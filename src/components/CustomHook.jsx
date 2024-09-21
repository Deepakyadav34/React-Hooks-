
import UseFetch from './UseFetch';

function CustomHook() {

  const show=UseFetch("https://api.themoviedb.org/3/discover/movie?api_key=57ae30a1f3a14b747633fdc5c843f6e3");

  console.log(show);

  return (
    <>
    <div className='bg-blue-300 h-screen'>
      <h1 className='text-4xl'>Hooks Installed</h1>

      <p className='text-2xl'>When you inspect the webpage you can clearly see the two arrays of the Movies API which is fetch using a customhook called UseFetch which is made using useState and useEffect</p>

    </div>
   
    </>
  )
}

export default CustomHook;
