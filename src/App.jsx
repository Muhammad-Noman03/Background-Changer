import { useState } from "react"


function App() {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-2">
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg" style={{ backgroundColor: "Red" }} onClick={() => setColor("Red")}>Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white  font-bold shadow-lg" style={{ backgroundColor: "Green" }} onClick={() => setColor("Green")}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg" style={{ backgroundColor: "Blue" }} onClick={() => setColor("Blue")}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg" style={{ backgroundColor: "Skyblue" }} onClick={() => setColor("Skyblue")}>SkyBlue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg" style={{ backgroundColor: "Orange" }} onClick={() => setColor("Orange")}>Orange</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg" style={{ backgroundColor: "Olive" }} onClick={() => setColor("Olive")}>Olive</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg" style={{ backgroundColor: "Gray" }} onClick={() => setColor("Gray")}>Gray</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg" style={{ backgroundColor: "Pink" }} onClick={() => setColor("Pink")}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white font-bold shadow-lg" style={{ backgroundColor: "Violet" }} onClick={() => setColor("Violet")}>Violet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
