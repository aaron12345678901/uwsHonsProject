import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AdminEditExercise = () => {
  const { id } = useParams(); // Get exercise ID from URL
  const [exerciseDetails, setExerciseDetails] = useState(null);
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
          setExerciseDetails(response.data[0]);
          console.log(response.data);
          setFormData({
            name: response.data[0].name,
            Exercise_Reps: response.data[0].Exercise_Reps,
            Exercise_Sets: response.data[0].Exercise_Sets,
            Rest_Between_Sets: response.data[0].Rest_Between_Sets,
            time: response.data[0].time,
            muscle_group: response.data[0].muscle_group,
            equipment_needed: response.data[0].equipment_needed,
            img: response.data[0].img,
          });
        }
      })
      .catch((error) => console.error(error));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleEdit = () => {
    axios
      .post(
        "http://localhost/php-react/firstfitness/adminhandleexerciseedit.php",
        {
          id,
          ...formData,
        }
      )
      .then((response) => {
        console.log("Edit success:", response.data);
        alert("Exercise updated successfully!");
      })
      .catch((error) => {
        console.error("Edit failed:", error);
        alert("Failed to update exercise.");
      });
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
            <div className="admin-edit-exercise-img-container">
              <div className="admin-edit-exercise-image">
                <img
                  src={`http://localhost/php-react/frontend/public/${formData.img}`}
                  alt="Exercise"
                />
              </div>
              <p>Click to upload new image</p>
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
