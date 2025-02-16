import { useState } from "react";
import "./App.css";
import Wather from "./Components/Wather";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleFetch = (currentInfo) => {
    setData(currentInfo);
  };

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=bengaluru&units=metric&appid=2e290744d2ac1dea2e02522630cecd74"
    )
      .then((res) => res.json())
      .then((data) => {
        handleFetch([data]);
      });
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <Wather key={Math.random()} data={item} handleFetch={handleFetch} />
        );
      })}
    </>
  );
}

export default App;
