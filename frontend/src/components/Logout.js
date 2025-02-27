import { useNavigate } from "react-router-dom";

// Import necessary dependencies

const Logout = () => {
  // Define a navigate function using the `useNavigate` hook
  let navigate = useNavigate();

  // Define a `redirect` function that clears local storage and redirects the user to the home page
  const redirect = () => {
    localStorage.clear(); // Clear local storage
    navigate(`/`); // Redirect to the home page
  };

  // Render a div that contains a button for logging out
  return (
   
      <div onClick={redirect} className="nav">
      <ul>
        <li>
          <a href="#">Log out</a>
        </li>
      </ul>
    </div>
  );
};

// Export the Logout component
export default Logout;