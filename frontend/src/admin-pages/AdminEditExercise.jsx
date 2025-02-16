import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminEditExercise = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    Exercise_Reps: "",
    Exercise_Sets: "",
    Rest_Between_Sets: "",
    time: "",
    muscle_group: "",
    equipment_needed: "",
    img: "",
  });

  useEffect(() => {
    axios
      .post(
        `http://localhost/php-react/firstfitness/AdminGetExercisedata.php?id=${id}`
      )
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          setFormData({
            name: data.name,
            Exercise_Reps: data.Exercise_Reps,
            Exercise_Sets: data.Exercise_Sets,
            Rest_Between_Sets: data.Rest_Between_Sets,
            time: data.time,
            muscle_group: data.muscle_group,
            equipment_needed: data.equipment_needed,
            img: data.img, // This could be a URL string
          });
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("jsonData", JSON.stringify({ id, ...formData }));

    if (formData.img instanceof File) {
      formDataToSend.append("img", formData.img);
    }

    try {
      const response = await axios.post(
        "http://localhost/php-react/firstfitness/adminhandleexerciseedit.php",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(response.data.message || "Exercise updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update exercise.");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        img: e.target.files[0], // Store the File object
      }));
    }
  };

  const handleImageClick = () => {
    document.getElementById("imgUploadInput").click();
  };

  return (
    <div className="Admin-Home">
      <div className="nav">
        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
        </ul>
      </div>

      <div className="admin-exercise-container-all">
        <div className="admin-edit-exercise-container">
          <div className="admin-edit-exercise-left">
            <ul>
              <li>
                <label htmlFor="name">Exercise Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="reps">Exercise Reps</label>
                <input
                  type="number"
                  id="reps"
                  name="Exercise_Reps"
                  value={formData.Exercise_Reps}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="sets">Exercise Sets</label>
                <input
                  type="number"
                  id="sets"
                  name="Exercise_Sets"
                  value={formData.Exercise_Sets}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="rest">Rest Between Sets</label>
                <input
                  type="number"
                  id="rest"
                  name="Rest_Between_Sets"
                  value={formData.Rest_Between_Sets}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="TotalTimeToComplete">
                  Total Time To Complete
                </label>
                <input
                  type="number"
                  id="TotalTimeToComplete"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </li>
            </ul>
          </div>

          <div className="admin-edit-exercise-right">
            <div
              className="admin-edit-exercise-img-container"
              onClick={handleImageClick}
            >
              <div className="admin-edit-exercise-image">
                {formData.img && formData.img instanceof File ? (
                  <img
                    src={URL.createObjectURL(formData.img)}
                    alt={formData.name || "Exercise Image"}
                  />
                ) : (
                  <img
                    src={`http://localhost/php-react/frontend/public/${formData.img}`}
                    alt={formData.name || "Exercise Image"}
                  />
                )}
              </div>
              <p>Click to upload new image</p>
              <input
                type="file"
                id="imgUploadInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>

            <div className="admin-edit-right-radios">
              <div className="muscle-radio">
                <p>Please select muscle group:</p>
                {["Chest", "Back", "Legs", "Shoulders", "Arms"].map(
                  (muscle) => (
                    <div key={muscle} className="radioItem">
                      <input
                        type="radio"
                        id={muscle}
                        name="muscle_group"
                        value={muscle}
                        checked={formData.muscle_group === muscle}
                        onChange={handleChange}
                      />
                      <label htmlFor={muscle}>{muscle}</label>
                    </div>
                  )
                )}
              </div>

              <div className="equipment-radio">
                <p>Please select equipment type:</p>
                {[
                  { label: "Machines", value: 1 },
                  { label: "Free Weights", value: 2 },
                  { label: "Body Weight", value: 3 },
                ].map((equip) => (
                  <div key={equip.value} className="radioItem">
                    <input
                      type="radio"
                      id={equip.label}
                      name="equipment_needed"
                      value={equip.value}
                      checked={
                        parseInt(formData.equipment_needed) === equip.value
                      }
                      onChange={handleChange}
                    />
                    <label htmlFor={equip.label}>{equip.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="admin-edit-exercise-button">
          <button onClick={handleEdit}>Confirm Edit</button>
        </div>
      </div>
    </div>
  );
};

export default AdminEditExercise;
