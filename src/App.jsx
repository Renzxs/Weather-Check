import { useState, useEffect} from 'react';
import { Wind, Waves} from 'lucide-react';
import Sun from './assets/sun-icon.png';
import './index.css';

function DateTimeClock() {  
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setInterval(UpdateClock, 1000);
  })

  const UpdateClock = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday"];
    
    const currentDate = new Date();
    const sec = formatZero(currentDate.getSeconds());
    const mins = currentDate.getMinutes();
    const amOrPm = currentDate.getHours() >= 12 ? "PM" : "AM";

    setDate(
      `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`
    );
    setTime(
      `${currentDate.getHours() % 12 || 12}:${mins}:${sec} ${amOrPm}`
    );
    setDay(`${days[currentDate.getDay()]}`);
  }

  const formatZero = (time) => {
    time = time.toString();
    return time.length < 2 ? "0" + time : time;
  }

  return (
    <div className='overflow-hidden flex justify-start flex-col items-start max-md:items-center max-md:pt-28'>
      <p className='text-white font-montserrat font-extrabold text-[36px] max-lg:text-[20px]'>{day}</p>
      <h1 className='text-white font-montserrat font-black text-[128px] max-lg:text-[50px]'>{time}</h1>
      <p className='text-white font-montserrat font-extrabold text-[36px] max-lg:text-[20px]'>{date}</p>
    </div>
  );
}


function App() {

  return (
    <>
    <div className='bg-black'>      

      {/* MAIN CONTAINER */}
      <div className='absolute top-0 w-full h-[100vh]'>     
        <div className='relative w-full z-40'>

          <div className='absolute top-6 right-16 max-md:top-8 max-md:right-8'>
            <img className='w-[40px] transition-all duration-100 ease-linear hover:rotate-45' src={Sun} alt={Sun} />
          </div>

          <div className='ml-10 mt-10 max-md:ml-0 max-md:mt-0'>
            <DateTimeClock />
          </div>


        </div>
      </div>   

      {/* BACKGROUND GIF */}
      <div className='bg-black w-full h-[100vh] bg-[url("assets/sunny-bg.gif")] bg-cover bg-no-repeat bg-center opacity-20'>

      </div>
    </div>
    </>
  )
}

export default App
