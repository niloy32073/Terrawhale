import {
  RouterProvider,
} from "react-router-dom";
import router from "./routes/router";
import "preline/preline";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Clear the timeout to prevent it from running after the component unmounts
    return () => clearTimeout(loaderTimeout);
  }, []);

  return (
    <>
  
    {isLoading ? (
      // Random loader content, replace with your own loader component or HTML
      <div className='flex justify-center items-center h-screen'> <h2>loading....</h2></div>
    ) : (
      <RouterProvider router={router}></RouterProvider>
    )}
      <Toaster position="top-center" reverseOrder={false}></Toaster>
   
      
  </>
  )
}

export default App
