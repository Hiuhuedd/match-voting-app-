// import React from 'react'
// import { FiEdit,FiTrash2,FiCheckCircle } from "react-icons/fi";
// export default function TeamCard(props) {
//     const { children, edit, handleAddEdit, edittedValue, setEdittedValue, teamKey, handleEditteam, handleDelete } = props




//     return (
//         <div className='p-2 relative sm:p-3 border flex items-stretch border-white border-solid '>

//             <div className='flex-1 flex'>
//                 {!(edit === teamKey) ? <>{children}</> : (
//                     <input className='bg-inherit flex-1 text-white outline-none' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} />
//                 )}
//                 {/* {children} */}
//             </div>
//             <div className='flex items-center'>

//                 {(edit === teamKey) ?
//                 <span
//                 onClick={handleEditteam} 
//                 className=" px-2 duration-300 hover:rotate-45 cursor-pointer">
//                     <FiCheckCircle  /> 
//                 </span>
//                 :
//                 <span
//                 onClick={handleAddEdit(teamKey)} 
//                 className=" px-2 duration-300 hover:rotate-45 cursor-pointer">
//                     <FiEdit  /> 
//                 </span>
//                 }
//                 <FiTrash2 onClick={handleDelete(teamKey)} />
//                 <i ></i>
//             </div>
//         </div>
//     )
// }
import Image from 'next/image' 
import React, { useEffect, useState } from 'react'
import {IoFootball } from "react-icons/io5";
import VoteModal from "./VoteModal"
import WarnModal from "./WarnModal"
import moment from "moment"
import { useAuth } from '../context/AuthContext';
export default function VoteCard(props) {
    const { userInfo, currentUser } = useAuth()
    const { children, edit, handleAddEdit, edittedValue, setEdittedValue, todoKey, handleEditTodo, handleDelete } = props
    let [isModalOpen, setModalIsOpen] = useState(false) 
    let [warnmodal, setWarnModal] = useState(false) 
    let [votedteam, setvotedteam] = useState('') 
    let [ModalTeam, setModalTeam] = useState(false) 
    let [confirm, setconfirm] = useState(false) 
    const [aVote,setaVote]=useState(children.a.vote)
    const [dVote,setdVote]=useState(children.d.vote)
    const [bVote,setbVote]=useState(children.b.vote)

    const [country, setcountry] = useState('Italy')
    const [type, settype] = useState('Bundesliga')
    const draw="draw"
    const v=children.voters
    const cast=Object.keys(v).includes(currentUser.uid)
console.log("=========cast",!cast);
const handleVote=(t)=>{
    setvotedteam(t)
    if(t==="a"){
        if(confirm||cast){
            setWarnModal(true)
        }else{
            setModalTeam(children.a.name)
            setModalIsOpen(true)
        }
 
    }
    if(t==="b"){
        
        if(confirm||cast){
            setWarnModal(true)
        }else{
            setModalIsOpen(true)
            setModalTeam(children.b.name)
        }
    }
    if(t==="d"){
     
        if(confirm||cast){
            setWarnModal(true)
        }else{
            setModalIsOpen(true)
            setModalTeam(children.d.name)
        }
    }
    
}
const a=children.a.name
const b=children.b.name
useEffect(() => {

    // const v=children.voters
    // const cast=Object.keys(v).includes(currentUser.uid)
    // console.log(cast);
    if(confirm&&!cast){
        const newVoters={...v,[currentUser.uid]:currentUser.uid}
        if(votedteam==="a"){
            setaVote(aVote+1)
            const game={
                a: {name:a,vote:aVote+1},
                b: {name:b,vote:bVote},
                d: {name:draw,vote:dVote},
                voters:newVoters,
                country:country,
                type:type,
                time: children.time
            }
              handleEditTodo(todoKey,game) 
    }
    if(votedteam==="b"){
        setbVote(bVote+1)
        const game={
            a: {name:a,vote:aVote},
            b: {name:b,vote:bVote+1},
            d: {name:draw,vote:dVote},
            voters:newVoters,
            country:country,
            type:type,
            time: children.time
        }
        handleEditTodo(todoKey,game) 
    }
    if(votedteam==="d"){
        setdVote(dVote+1)
        const game={
            a: {name:a,vote:aVote},
            b: {name:b,vote:bVote},
            d: {name:draw,vote:dVote+1},
            voters:newVoters,
            country:country,
            type:type,
            time: children.time
        }

        handleEditTodo(todoKey,game) 
    }
    }
   }, [confirm]);
const time= Date.now()
    return (
        <div className='p-2 relative sm:p-3 border flex flex-col items-stretch border-white border-solid  '>
        <div className=' flex items-stretch justify-between   '>
        <h3 className="text-[8px] text-gray-300 flex items-center " 
            ><IoFootball className="text-[15px] mr-1  " />Italy <span className='w-[4px] h-[4px] bg-slate-50 rounded-full ml-1 mr-1' ></span>Bundesliga </h3> 
        <h3 className="text-[8px] text-gray-300 flex items-center ">
        <span className='mr-1'> Added  </span> {moment(children.time).fromNow()}
         </h3>

        </div>

<>
            <div className='flex-1 flex'>
                {!(edit === todoKey) ? <>
                <div className='p-2 relative sm:p-3  flex justify-between  w-full text-[10px] font-poppins capitalize text-zinc-200'>
                    <span className='flex flex-col items-center text-center w-[35%] whitespace-nowrap text-ellipsis'>
                                    {children.a.name}
                        <Image src="/ball.png" alt="Vercel Logo" width={40} height={40} className="mt-2 mb-2 w-9 h-9 rounded-full object-cover  " />
                        <span  onClick={()=>{handleVote("a")}}  className='w-[4rem] h-[1.5rem] justify-center flex text-center bg-slate-500  shadow-md text-gray-200 cursor-pointer  duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-5 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900' >
                        <h2 className='relative  z-10'>
                        {aVote}
                </h2>
                            </span>     
                    </span>
                    <span className='flex flex-col items-center text-center w-[30%] whitespace-nowrap text-ellipsis'>

                                    {children.d.name}
                    <Image src="/ball.png" alt="Vercel Logo" width ={40} height={40}  className="mt-2 mb-2 w-9 h-9 rounded-full object-cover"/>
                    <span  onClick={()=>{handleVote("d")}} className='w-[4rem] h-[1.5rem] flex justify-center  text-center bg-slate-500  shadow-md text-gray-200 cursor-pointer  duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-5 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900' >
                    <h2 className='relative  z-10'>
                        {dVote}
                </h2>                   
                    </span>  
                    </span>
                    <span className='flex flex-col items-center text-center w-[35%] whitespace-nowrap text-ellipsis'>

                                    {children.b.name}
                        <Image src="/ball.png" alt="Vercel Logo"width={40} height={40} className="mt-2 mb-2 w-9 h-9 rounded-full object-cover" />
                        <span onClick={()=>{handleVote("b")}} className='w-[4rem] h-[1.5rem] justify-center  shadow-md flex text-center bg-slate-500 text-slate-100  cursor-pointer  duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-5 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900' >
                        <h2 className='relative  z-10 '>
                        {bVote}
                </h2>
                        </span>  
                    </span>
                </div>

                              
                
                </>  : (
                    <input className='bg-inherit flex-1 text-white outline-none' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} />
                )}
                {/* {children} */}
            </div>
            {/* options button */}
            {/* <div className='flex items-center'>
                {(edit === todoKey) ? <i onClick={handleEditTodo} className="fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer"></i> : <i onClick={handleAddEdit(todoKey)} className="fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer"></i>}
                <i onClick={handleDelete(todoKey)} className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"></i>
            </div> */}

</>
<div className='z-[100]'>
{isModalOpen&&<VoteModal setIsOpen={setModalIsOpen} setconfirm={setconfirm} team={ModalTeam} />}
{warnmodal&&<WarnModal setIsOpen={setWarnModal}  />}

</div>
        </div>
    )
}