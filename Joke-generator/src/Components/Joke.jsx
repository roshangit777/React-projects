import { useDispatch, useSelector } from "react-redux";
import { jokeSliceActions } from "../store/jokeSlice";
import JokeItem from "./JokeItem";

const Joke = () => {
  const dispatch = useDispatch();
  const jokeItem = useSelector((store) => store.joke);
  const generateJoke = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => {
        dispatch(jokeSliceActions.addJoke(data));
      })
      .catch((error) => console.error("Error fetching joke:", error));
  };

  return (
    <center>
      <div className="card joke-cotainer">
        <div className="card-body">
          <JokeItem key={jokeItem.id} item={jokeItem} />
          <button className="btn btn-primary" onClick={generateJoke}>
            Get a joke
          </button>
        </div>
      </div>
    </center>
  );
};

export default Joke;
