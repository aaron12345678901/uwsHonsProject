const Editworkout = () => {




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

                            <div className="use-edit-delete-button">
                                <button>Delete</button>
                            </div>
                        </li>

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
                            <div className="use-edit-delete-button">
                                <button>Delete</button>
                            </div>
                        </li>

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
                            <div className="use-edit-delete-button">
                                <button>Delete</button>
                            </div>
                        </li>

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
                            <div className="use-edit-delete-button">
                                <button>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="user-add-workout">
                    <a className="users-add-workout-button" href="#">
                        <div className="add-exercise-img"></div>
                        <h2>Add New Exercise</h2>
                    </a>
                </div>

                <div className="user-workout-footer">
                    <h1>
                        Total workout time (including rest): placeholder minutes
                    </h1>
                    <button>Confirm Edit</button>
                </div>
            </div>
        </div>
    );
};

export default Editworkout;
