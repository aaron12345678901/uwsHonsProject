import { useState } from "react";

const UsersWorkout = () => {


 


    const UsersWorkout = {
        day: "placeholder",
        workoutName: "placeholder",
        exercises: [
          {
            id: 1,
            exerciseName: "placeholder",
            sets: "placeholder",
            reps: "placeholder",
            restBetweenSets: "placeholder",
            img: "placeholder"
          },
          {
            id: 2,
            exerciseName: "placeholder",
            sets: "placeholder",
            reps: "placeholder",
            restBetweenSets: "placeholder",
            img: "placeholder"
          },
          {
            id: 3,
            exerciseName: "placeholder",
            sets: "placeholder",
            reps: "placeholder",
            restBetweenSets: "placeholder",
            img: "placeholder"
          },
          {
            id: 4,
            exerciseName: "placeholder",
            sets: "placeholder",
            reps: "placeholder",
            restBetweenSets: "placeholder",
            img: "placeholder"
          }
        ],
        WorkoutEstDuration:"placeholder",
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

            <div className="User-exercise-container">
                <div className="userworkout-container-heading">
                    <h1>{UsersWorkout.day} for day</h1>
                    <h2>workout name {UsersWorkout.workoutName}</h2>
                </div>

                <div className="userworkout-container-body2">
                    <ul>
                        <li>
                            <div className="user-exercise-left">
                                <h1>{UsersWorkout.exercises[0].exerciseName}</h1>
                                <h3>reps: {UsersWorkout.exercises[0].reps}</h3>
                                <h3>sets: {UsersWorkout.exercises[0].sets}</h3>
                                <h3>Rest Between Sets:{UsersWorkout.exercises[0].restBetweenSets}</h3>
                            </div>

                            <div className="user-exercise-right">
                                <div className="exercise-img-container">
                                    <div className="exercise-image">
                                        <img
                                            src="/exercise-images/benchpress.jpg"
                                            alt="dfd"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                            <h1>{UsersWorkout.exercises[1].exerciseName}</h1>
                                <h3>reps: {UsersWorkout.exercises[1].reps}</h3>
                                <h3>sets: {UsersWorkout.exercises[1].sets}</h3>
                                <h3>Rest Between Sets:{UsersWorkout.exercises[1].restBetweenSets}</h3>
                            </div>

                            <div className="user-exercise-right">
                                <div className="exercise-img-container">
                                    <div className="exercise-image">
                                        <img
                                            src="/exercise-images/benchpress.jpg"
                                            alt="dfd"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                            <h1>{UsersWorkout.exercises[2].exerciseName}</h1>
                                <h3>reps: {UsersWorkout.exercises[2].reps}</h3>
                                <h3>sets: {UsersWorkout.exercises[2].sets}</h3>
                                <h3>Rest Between Sets:{UsersWorkout.exercises[2].restBetweenSets}</h3>
                            </div>

                            <div className="user-exercise-right">
                                <div className="exercise-img-container">
                                    <div className="exercise-image">
                                        <img
                                            src="/exercise-images/benchpress.jpg"
                                            alt="dfd"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="user-exercise-left">
                            <h1>{UsersWorkout.exercises[3].exerciseName}</h1>
                                <h3>reps: {UsersWorkout.exercises[3].reps}</h3>
                                <h3>sets: {UsersWorkout.exercises[3].sets}</h3>
                                <h3>Rest Between Sets:{UsersWorkout.exercises[3].restBetweenSets}</h3>
                            </div>

                            <div className="user-exercise-right">
                                <div className="exercise-img-container">
                                    <div className="exercise-image">
                                        <img
                                            src="/exercise-images/benchpress.jpg"
                                            alt="dfd"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="user-workout-footer">
                    <h1>
                        Total workout time (including rest): {UsersWorkout.WorkoutEstDuration}
                    </h1>
                    <button>Complete workout</button>
                </div>
            </div>
        </div>
    );
};

export default UsersWorkout;
