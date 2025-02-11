import { useState } from "react";
import axios from "axios";

const AdminAddExercise = () => {
  const [exerciseData, setExerciseData] = useState({
    name: "",
    muscle_group: "",
    equipment_needed: "",
    exercise_reps: "",
    exercise_sets: "",
    img: null,
    rest_between_sets: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExerciseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setExerciseData((prevData) => ({
        ...prevData,
        img: e.target.files[0],
      }));
    }
  };

  const handleImageClick = () => {
    document.getElementById("imgUploadInput").click();
  };

  const handleFormSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", exerciseData.name);
      formData.append("muscle_group", exerciseData.muscle_group);
      formData.append("equipment_needed", exerciseData.equipment_needed);
      formData.append("exercise_reps", exerciseData.exercise_reps);
      formData.append("exercise_sets", exerciseData.exercise_sets);
      formData.append("img", exerciseData.img);
      formData.append("rest_between_sets", exerciseData.rest_between_sets);
      formData.append("time", exerciseData.time);

      const response = await axios.post(
        "http://localhost/php-react/firstfitness/add_exercise.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data && response.data.Message) {
        alert(response.data.Message);
      } else {
        alert("Unexpected response format. Please check the backend.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error adding the exercise. Please try again.");
    }
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
                  value={exerciseData.name}
                  onChange={handleInputChange}
                />
              </li>
              <li>
                <label htmlFor="exercise_reps">Exercise Reps</label>
                <input
                  type="text"
                  id="exercise_reps"
                  name="exercise_reps"
                  value={exerciseData.exercise_reps}
                  onChange={handleInputChange}
                />
              </li>
              <li>
                <label htmlFor="exercise_sets">Exercise Sets</label>
                <input
                  type="text"
                  id="exercise_sets"
                  name="exercise_sets"
                  value={exerciseData.exercise_sets}
                  onChange={handleInputChange}
                />
              </li>
              <li>
                <label htmlFor="rest_between_sets">Rest Between Sets</label>
                <input
                  type="text"
                  id="rest_between_sets"
                  name="rest_between_sets"
                  value={exerciseData.rest_between_sets}
                  onChange={handleInputChange}
                />
              </li>
              <li>
                <label htmlFor="time">Total Time To Complete Exercise</label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  value={exerciseData.time}
                  onChange={handleInputChange}
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
                {exerciseData.img ? (
                  <img
                    src={URL.createObjectURL(exerciseData.img)}
                    alt={exerciseData.name || "Exercise Image"}
                  />
                ) : (
                  <img
                    src="/exercise-images/benchpress.jpg"
                    alt={exerciseData.name || "Exercise Image"}
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
                {["Chest", "Back", "Legs", "Shoulders", "Triceps","Biceps"].map((group) => (
                  <div className="radioItem" key={group}>
                    <input
                      type="radio"
                      id={group}
                      name="muscle_group"
                      value={group}
                      checked={exerciseData.muscle_group === group}
                      onChange={handleInputChange}
                    />
                    <label htmlFor={group}>{group}</label>
                  </div>
                ))}
              </div>

              <div className="equipment-radio">
                <p>Please select equipment type:</p>
                {[
                  { label: "Machines", value: 1 },
                  { label: "Free Weights", value: 2 },
                  { label: "Body Weight", value: 3 },
                ].map((equipment) => (
                  <div className="radioItem" key={equipment.value}>
                    <input
                      type="radio"
                      id={equipment.label}
                      name="equipment_needed"
                      value={equipment.value}
                      checked={
                        parseInt(exerciseData.equipment_needed) ===
                        equipment.value
                      }
                      onChange={handleInputChange}
                    />
                    <label htmlFor={equipment.label}>{equipment.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="admin-edit-exercise-button">
          <button onClick={handleFormSubmit}>Confirm Submission</button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddExercise;
