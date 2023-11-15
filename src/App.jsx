import { useState } from "react";
import Search from "./ui/Search";
import WeaderApp from "./feucher/WeaderApp";

function App() {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <div className="bg-slate-700  flex flex-col items-center h-[100vh]  ">
      <Search setInput={setInput} />
      <WeaderApp />
    </div>
  );
}

export default App;
