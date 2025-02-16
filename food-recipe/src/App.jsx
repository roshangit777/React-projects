import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";
import { Outlet } from "react-router-dom";

function App() {
  /* const meals =
    recipe.length > 0 && recipe[0]?.data?.meals ? recipe[0].data.meals : []; // Fallback to an empty array
 */

  return (
    <>
      <Header />
      <Outlet />
      <Fotter />
    </>
  );
}

export default App;
