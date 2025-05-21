import { useState, useEffect } from "react";

function App() {
  const apiURL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [arr, setArr] = useState([]);
  const [char, setChar] = useState("Click");
  const [name, setName] = useState("Emoji Name");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${apiURL}?access_key=${apiKey}`);
        if (!response.ok) throw new Error("API Response was not ok");
        const data = await response.json();
        setArr(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  function handleOnClick() {
    const randNum = Math.floor(Math.random() * (arr.length + 1));

    setChar(arr[randNum].character);
    setName(arr[randNum].unicodeName);
  }

  return (
    <div id="main">
      <div id="container">
        <p className="h2">Random Emoji Generator</p>
        <button className="my-4" onClick={handleOnClick}>
          <h1>{char}</h1>
        </button>
        <p className="h5">{name}</p>
      </div>
    </div>
  );
}

export default App;
