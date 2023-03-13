import { useState } from "react";
import icon from "./assets/icon-star.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-primary-dark '>
      <div className='flex flex-col bg-primary rounded-3xl  w-96 h-[400px] p-8  align-middle'>
        <div className=' bg-secondary-medium-1 rounded-full w-8 h-10 p-[9.5px]   '>
          <img src={icon} alt='icon' />
        </div>

        <div className='h-full flex flex-col align-middle justify-center -mt-12'>
          <h1 className='  text-2xl font-overpass font-[700] text-white mb-4 '>
            How did we do?
          </h1>
          <p className='text-sm font-overpass font-[400] text-[15px] text-secondary text-justify'>
            Please let us know how we did and how we did with your supper
            request. All feedback is apreciated to help us improve our
            offering!.{" "}
          </p>
        </div>
        <div className='flex flex-row justify-between -mt-12 mb-6'>
          <button className='bg-secondary-medium-1 rounded-full  text-secondary w-10 h-10 hover:text-white hover:bg-secondary '>
            1
          </button>
          <button className='bg-secondary-medium-1 rounded-full  text-secondary w-10 h-10 hover:text-white hover:bg-secondary '>
            2
          </button>
          <button className='bg-secondary-medium-1 rounded-full  text-secondary w-10 h-10 hover:text-white hover:bg-secondary '>
            3
          </button>
          <button className='bg-secondary-medium-1 rounded-full  text-secondary w-10 h-10 hover:text-white hover:bg-secondary '>
            4
          </button>
          <button className='bg-secondary-medium-1 rounded-full  text-secondary w-10 h-10 hover:text-white hover:bg-orange '>
            5
          </button>
        </div>

        <div className=''>
          <button className='bg-orange rounded-full w-full tracking-widest  text-white h-10 font-overpass-semibold hover:text-orange hover:bg-white '>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
