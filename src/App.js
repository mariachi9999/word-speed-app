import "./App.css";
import Input from "./components/Input";
import Speed from "./components/Speed";
import { useState, useEffect } from "react";

function App() {
  const [words, setWords] = useState("");
  const [start, setStart] = useState(undefined);
  const [end, setEnd] = useState(undefined);
  const [store, setStore] = useState([]);
  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    if (words.length > 0 && words.split("").at(-1) !== " ") {
      start === undefined ? setStart(Date.now()) : console.log("");
      setEnd(Date.now());
    }

    if (words.split("").at(-1) === " ") {
      let word = words.split(" ").at(-2);
      let duration = end - start;
      setStore((oldStore) => [...oldStore, { word, duration }]);
      setStart(undefined);
      setEnd(undefined);
    }
  }, [words]);

  useEffect(() => {
    let time = 0;
    if (store.length > 0) {
      store.forEach((element) => {
        time = time + element.duration;
      });
      let secondsPerWord = time / 1000 / store.length;
      let wordsPerMinute = Math.round(60 / secondsPerWord, 2);
      setSpeed(wordsPerMinute);
    }
  }, [store]);

  useEffect(() => {
    document.title = "Words typing Speed";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title">Measure your type speed! 😎🚀 </h1>
        <Input
          id="input"
          words={words}
          setWords={setWords}
          setStart={setStart}
          setEnd={setEnd}
          setSpeed={setSpeed}
          setStore={setStore}
        />
        <Speed id="speed" speed={speed} />
      </header>
    </div>
  );
}

export default App;
