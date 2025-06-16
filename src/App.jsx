import { useState } from "react";
import Butones, { Header } from "./components/button";

function App() {
  const [counter, setCounter] = useState(100);
  const increament = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold" onClick={increament}>
        {counter}
      </h1>
      <Header />
      <Butones
        color="primary"
        label="increament"
        action={() => console.log("hello")}
      />
      <Butones color="secondary" label="decreament" />
      <Butones />
      <Butones />
    </main>
  );
}

export default App;
