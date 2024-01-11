import { useState, useEffect} from 'react';
import { Wind, Waves, Search} from 'lucide-react';
import Sun from './assets/sun-icon.png';
import './index.css';
import Clear from './assets/clear.png';
import Cloud from './assets/cloud.png';
import Drizzle from './assets/drizzle.png';
import Rain from './assets/rain.png';
import Snow from './assets/snow.png';

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
    const mins = formatZero(currentDate.getMinutes());
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
      <h1 className='text-white font-montserrat font-black text-[128px] max-lg:text-[40px]'>{time}</h1>
      <p className='text-white font-montserrat font-extrabold text-[36px] max-lg:text-[20px]'>{date}</p>
    </div>
  );
}

function WeatherChecker() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className='mt-10 w-[90%] max-sm:w-full p-10 max-sm:p-4 bg-black rounded-[20px] bg-opacity-50'>
      <form className='flex justify-start items-center gap-4 '>
        <input value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} className='font-montserrat w-[50%] max-md:w-[90%] text-white border-2 outline-none border-white bg-transparent rounded-[10px] py-[5px] px-[15px]' placeholder='Search a city' type="text" name="searchInput" id="searchInput" />
        <button type="submit">
          <Search className='text-white'></Search>
        </button>
      </form>

      <div className='flex justify-around items-center mt-10 max-lg:flex-col gap-10 pb-10'>
        
        <div className='flex justify-normal items-center gap-6'>
          <img className='w-[170px] max-sm:w-[120px]' src={Cloud} alt={Cloud} />
          <div className='max-md:flex max-md:flex-col-reverse'>
            <p className='max-md:text-[30px] max-sm:text-[15px]  text-white font-montserrat font-bold text-[30px]'>Republic of the Philippines</p>
            <h1 className='max-md:text-[50px] max-sm:text-[35px] text-white font-montserrat font-extrabold text-[80px]'>28°C</h1>
          </div>
        </div>

        <div className='flex flex-col gap-6 justify-start items-start'>
          <div className='flex justify-start items-center gap-6'>
              <Wind className='text-white size-[81px] max-md:size-[40px]'></Wind>
              <div>
                <h1 className='text-white font-montserrat font-extrabold text-[45px] max-md:text-[25px]'>18 km/h</h1>
                <p className='text-white  font-montserrat font-medium text-[20px] max-md:text-[15px]'>Wind Speed</p>
              </div>
          </div>
          <div className='flex justify-start items-center gap-6'>
              <Waves className='text-white size-[81px] max-md:size-[40px]'></Waves>
              <div>
                <h1 className='text-white font-montserrat font-extrabold text-[45px] max-md:text-[25px]'>68%</h1>
                <p className='text-white  font-montserrat font-medium text-[20px] max-md:text-[15px]'>Humidity</p>
              </div>
          </div>
        </div>
        
      </div>



    </div>
  );
}

function Footer() {
  return (
    <div className='w-full text-center max-sm:mt-10 '>
      <h1 className='font-montserrat text-white font-semibold'>Made by ❤️🔥 by John Florence Batol</h1>
    </div>
  );
}

function App() {

  return (
    <>
    <div className='bg-black h-[115vh]'>      

      {/* MAIN CONTAINER */}
      <div className='absolute top-0 w-full h-[100vh]'>     
        <div className='relative w-full z-40'>

          <div className='absolute top-6 right-16 max-md:top-8 max-md:right-8'>
            <img className='w-[40px] transition-all duration-100 ease-linear hover:rotate-45' src={Sun} alt={Sun} />
          </div>

          <div className='ml-16 mt-10 max-md:ml-0 max-md:mt-0'>
            <DateTimeClock />
          </div>

          <div className='p-10 max-sm:p-2 flex justify-center'>
            <WeatherChecker />
          </div>

          <Footer />


        </div>
      </div>   

      {/* BACKGROUND GIF */}
      <div className='bg-black w-full h-[100%] bg-[url("assets/sunny-bg.gif")] bg-cover bg-no-repeat bg-center opacity-50'>

      </div>
    </div>
    </>
  )
}

export default App
