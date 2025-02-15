import { useState } from "react";

const UserCustomWorkout = () => {
  const UsersWorkout = {
    id: "placeholder",
    name: "placeholder",
  };

  return (
    <div className="User-profile">
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

      <div className="User-Prebuilt-container">
        <div className="user-pre-built-heading">
          <h1>Custom Routine</h1>
        </div>

        <div className="user-custom-list-container">
          <ul>
            <li>
              <div className="user-custom-list-left">
                <h3>Mon</h3>
              </div>
              <div className="user-custom-list-middle">
                <h3>{UsersWorkout.name}</h3>
              </div>
              <div className="user-custom-list-right">
                <button>Edit</button>
              </div>
            </li>
            <li>
              <div className="user-custom-list-left">
                <h3>Tue</h3>
              </div>
              <div className="user-custom-list-middle">
                <h3>{UsersWorkout.name}</h3>
              </div>
              <div className="user-custom-list-right">
                <button>Edit</button>
              </div>
            </li>
            <li>
              <div className="user-custom-list-left">
                <h3>Wed</h3>
              </div>
              <div className="user-custom-list-middle">
                <h3>{UsersWorkout.name}</h3>
              </div>
              <div className="user-custom-list-right">
                <button>Edit</button>
              </div>
            </li>
            <li>
              <div className="user-custom-list-left">
                <h3>Thu</h3>
              </div>
              <div className="user-custom-list-middle">
                <h3>{UsersWorkout.name}</h3>
              </div>
              <div className="user-custom-list-right">
                <button>Edit</button>
              </div>
            </li>
            <li>
              <div className="user-custom-list-left">
                <h3>Fri</h3>
              </div>
              <div className="user-custom-list-middle">
                <h3>{UsersWorkout.name}</h3>
              </div>
              <div className="user-custom-list-right">
                <button>Edit</button>
              </div>
            </li>
            <li>
              <div className="user-custom-list-left">
                <h3>Sat</h3>
              </div>
              <div className="user-custom-list-middle">
                <h3>{UsersWorkout.name}</h3>
              </div>
              <div className="user-custom-list-right">
                <button>Edit</button>
              </div>
            </li>
            <li>
              <div className="user-custom-list-left">
                <h3>Sun</h3>
              </div>
              <div className="user-custom-list-middle">
                <h3>{UsersWorkout.name}</h3>
              </div>
              <div className="user-custom-list-right">
                <button>Edit</button>
              </div>
            </li>
          </ul>
        </div>

        <div className="user-custom-save-button">
          <button>Confirm Changes</button>
        </div>
      </div>
    </div>
  );
};

export default UserCustomWorkout;
