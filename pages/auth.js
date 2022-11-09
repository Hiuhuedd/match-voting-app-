
import Head from 'next/head'
import Image from 'next/image'
import { useState, useContext, useRef, useEffect,FormEvent } from "react";
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router'
const Home = () => { 

const [isLogin,setisLogin]=useState(true)
const [isLoading,setisLoading]=useState(false)
const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("")
const [Phone,setPhone]=useState("")
const [Name,setName]=useState("")


 //show or hide password
 const [revealed, setrevealed] = useState(true);
 const revealpassword = () => { 
 setrevealed(!revealed)
};
//end of show or hide password

//greet users depending on time of the day
const [Greeting, setGreeting] = useState("");
useEffect(() => {
 let time = new Date();
 let greeting = "Good ";
 if (time.getHours() < 12) {
   greeting = greeting + "morning";
 } else if (time.getHours() < 18) {
   greeting = greeting + "afternoon";
 } else {
   greeting = greeting + "evening";
 }
 setGreeting(greeting);
}, []);
const HandleTap=async(e)=>{
alert(Password)
  setisLoading(true)

  e.preventDefault();
    
    //  await signUpWithEP(
    //      Email,
    //      Password,
    //      Name,
    //      Phone).then(res =>{
    //       setisLoading(false)
    //         console.log(user);
    //      }
    //     );
    //   if (error) {
    //       // toast.error(`${error}`, {
    //       //   position: toast.POSITION.TOP_CENTER,
    //       //   autoClose: 4000,
    //       // });
    //     }
  
}


  return (
    <div className="min-h-screen">
      <Head>
        <title>Match voting </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className=" w-full min-h-screen  grid   tablet:grid-cols-1 tablet-laptop:grid-cols-2  ">

      <main className="flex w-full flex-1 flex-col items-center  px-20 text-center ">
        <h1 className="text-4xl font-bold mt-10">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
          Voting app
          </a>
        </h1>

       { isLogin? <p className="mt-3 text-2xl">
       Login
        </p>: <p className="mt-3 text-2xl">
        Sign up
        </p>}

        <div className="mt-6 flex max-w-4xl  flex-wrap items-center justify-center  sm:w-full mb-32">
          <div className="flex flex-col items-start py-2">
          <h3 className="text-sm font-bold">Email </h3>
          <input onChange={(e)=>setEmail(e.target.value)}   className="mt-2 w-96 rounded-md border border-blue-200 p-2 text-left focus:outline-blue-600 text-sm"
          />
            
          </div>
          <div className="flex flex-col items-start py-2">
          <h3 className="text-sm font-bold">Password</h3>
          <input onChange={(e)=>setPassword(e.target.value)}  className="mt-2 w-96 rounded-md border  border-blue-200 p-2 text-left focus:outline-blue-600 text-sm"
          />
            
          </div>

          <div onClick={HandleTap} className="mt-2 w-96 rounded-md border p-3 text-left hover:scale-95 transition-all bg-blue-600  mt-10 flex  justify-center cursor-pointer"
          >
          {isLogin?<h3 className="text-sm text-white">Login</h3>:<h3 className="text-sm text-white">Sign up</h3>}

          </div>
         { isLogin?<h3 className="text-xs text-black mt-2 cursor-pointer" onClick={()=>setisLogin(!isLogin)}> Dont have an account <span className='text-blue-600' >sign up </span> </h3>: <h3 className="text-xs text-black mt-2 cursor-pointer" onClick={()=>setisLogin(!isLogin)}> Already have an account <span className='text-blue-600' >sign in </span> </h3>}
      
        </div>
          <footer className="flex w-full items-center justify-center self-end  border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
          <b>

          windtech
          </b>
        </a>
      </footer>
      </main>
      <main className="w-full h-full bg-neutral-800">
      <div className="relative hidden h-full flex-col  items-center justify-center bg-sky-900  md:flex  md:w-5/12 lg:w-6/12">
          <span className="font-poppins text-4xl font-light text-white">
            {Greeting}!
          </span>
          <br />
          {/* <span className="">
            <img src="/logo.png" alt="" />
          </span> */}
        </div>
      </main>
</div>

      
    </div>
  )
}

export default Home
