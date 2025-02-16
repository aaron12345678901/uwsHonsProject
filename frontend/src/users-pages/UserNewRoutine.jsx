// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const UserNewRoutine = () => {
//   const [userData, setUserData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   let id = JSON.parse(window.localStorage.getItem("id"));

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .post(
//         `http://localhost/php-react/firstfitness/GetUserDetails.php?id=${id}`
//       )
//       .then((response) => {
//         setUserData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, [id]);

//   const getWorkoutForDay = (day) => {
//     const workoutForDay = userData.find(
//       (entry) => entry.day_of_week.toLowerCase() === day.toLowerCase()
//     );
//     return workoutForDay ? workoutForDay.workout_name : "Rest Day";
//   };

//   return (
//     <div className="User-profile">
//       <div className="nav">
//         <ul>
//           <li>
//             <a href="#">About us</a>
//           </li>
//           <li>
//             <a href="#">Log out</a>
//           </li>
//         </ul>
//       </div>

//       <div className="User-profile-container">
//         <div className="User-new-routine-container">
//           <div className="user-new-routine-heading">
//             <h1>New Routine</h1>
//           </div>

//           <div className="user-new-routine-links">
//             <div className="user-new-routine-links-left">
//               <Link to="/UserPreBuiltRoutine" state={{}}>
//                 <a className="user-new-routine-pre" href="">
//                   <p>Pre built Workout</p>
//                 </a>
//               </Link>
//             </div>
//             {/* <div className="user-new-routine-links-right">
//               <a className="user-new-routine-custom" href="">
//                 <p>Custom Routine</p>
//               </a>
//             </div> */}
//           </div>

//           <div className="user-new-routine-list">
//             <ul>
//               {[
//                 "Monday",
//                 "Tuesday",
//                 "Wednesday",
//                 "Thursday",
//                 "Friday",
//                 "Saturday",
//                 "Sunday",
//               ].map((day, index) => (
//                 <React.Fragment key={day}>
//                   <li>
//                     <p>{day.substring(0, 3)}</p>
//                     <p>{getWorkoutForDay(day)}</p>
//                   </li>
//                   {index < 6 && (
//                     <div className="user-new-routine-divider"></div>
//                   )}
//                 </React.Fragment>
//               ))}
//             </ul>
//           </div>

//           <div className="user-new-routine-confirm-button">
//             <button>Confirm New Routine</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserNewRoutine;
