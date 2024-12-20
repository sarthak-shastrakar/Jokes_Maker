import { useState, useEffect } from "react";

export default function JOKES() {
  let [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/jokes/random";

  const getJokes = async () => {
    let response = await fetch(URL);
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    setJoke({ setup: jsonresponse.setup, punchline: jsonresponse.punchline });
  };

  useEffect(() => {
    async function getJokes() {
      let response = await fetch(URL);
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      setJoke({ setup: jsonresponse.setup, punchline: jsonresponse.punchline });
    }
    getJokes();
  }, []);

  return (
    <div>
      <div className="jokes">
        <h3>jokes makes:</h3>
        <h4>{joke.setup}</h4>
        <h5>{joke.punchline}</h5>
        <button onClick={getJokes} className="bg-blue-700 p-2 rounded-lg">
          Next Joke
        </button>
      </div>
    </div>
  );
}
