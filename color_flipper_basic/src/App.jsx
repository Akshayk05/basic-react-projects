import { useState } from "react";
import namer from 'color-namer';

function App() {
  const [color, setColor] = useState("white");
  const [hex ,setHex]=useState(false);

  const randomcolor=()=>{
    let col="#"
    const string="ABCDEF0123456789abcdef"
    for(let i=0;i<6;i++){
      const index=Math.floor(Math.random()*string.length)
      col+=string[index]
    }
    if(hex===false){
      const names = namer(col); 
      const colorName = names.basic[0].name;
      setColor(colorName);
    }
    else if(hex===true){
      setColor(col);
    }
  }
  return (
    <>
    <div className="h-screen" style={{backgroundColor:color}}>
    <div>
        <div
          className="flex flex-wrap bg-white justify-center w-full py-1"
          style={{
            boxShadow: "0 4px 10px -4px #222",
          }}
        >
          <div className="text-center text-xl mr-96 text-cyan-600">
            colour flipper
          </div>
          <div className=" flex flex-wrap text-xl text-current   ">
            <button className="bg-blue-500 text-white px-4 mx-4 rounded-lg hover:bg-blue-600" onClick={()=>setHex(false)}>
              Simple
            </button>
            <button
              className="
            bg-blue-500 
            text-white
              px-4 
             rounded-lg 
             hover:bg-blue-600"
             onClick={()=>setHex(true)}
            >
              Hex
            </button>
          </div>
        </div>
        <div className=" flex flex-col  justify-center  items-center  mt-60">
          <div className=" flex bg-black text-white text-5xl justify-center align-middle px-4 py-2 rounded-md ">
            Background color: <span className="text-blue-300">{color}</span>
          </div>
          <button 
          className="bg-slate-600 
              text-3xl
            text-white px-2
              py-1 
              rounded-2xl
            hover:bg-gray-800 
              my-4"
              onClick={randomcolor}
             >
            change
          </button>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default App;
