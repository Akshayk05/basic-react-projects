import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <div className="w-screen h-screen flex flex-col  bg-black text-white">
        <div className="border-2 border-slate-300 border-opacity-45 rounded-lg text-center text-2xl  pb-1">
          review providing system
        </div>

        <div className=" flex text-center  justify-center m-24">
          <div className=" w-2/5 flex flex-col border-2 items-center  border-slate-300 border-opacity-45 rounded-lg ">
            <div className="text-2xl font-serif inline-block"> Rating: {rating}</div>
            <div className="text-lg inline-block my-4" style={{ cursor: "pointer" }}>
              <span>🫤</span>
              <span>😳</span>
              <span>😯</span>
              <span>😊</span>
              <span>🫡</span>
            </div>
            <textarea type="text" placeholder="write hear your review" className="w-3/5 text-black"></textarea>
            <button className="inline-block border-2 border-slate-300 border-opacity-40 px-6 rounded-lg  shadow-white shadow-sm m-4  hover:bg-slate-900 transform transition-transform duration-500 hover:scale-110 ease-in-out">submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;



