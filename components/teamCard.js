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
import React from 'react'
import {IoFootball } from "react-icons/io5";
import moment from "moment"
import MatchOptions from "./MatchOptions"
export default function TodoCard(props) {
    const { children, edit, handleAddEdit, edittedValue, setEdittedValue, todoKey, handleEditTodo, handleDelete } = props


    return (
        <div className='p-2 relative sm:p-3 border flex flex-col items-stretch border-white border-solid  '>
        <div className=' flex items-stretch justify-between   '>
        <h3 className="text-[8px] text-gray-300 flex items-center " 
            ><IoFootball className="text-[15px] mr-1  " />Italy <span className='w-[4px] h-[4px] bg-slate-50 rounded-full ml-1 mr-1' ></span>Bundesliga </h3>
        <h3 className="text-[8px] text-gray-300 flex items-center "> <span className='mr-1'> Added  </span> 
        {moment(children.time).fromNow()}
         </h3>
        <h3 className="text-[8px] text-gray-300 flex items-center "> <MatchOptions todoKey={todoKey} 
        handleDelete={handleDelete} />
         </h3>

        </div>

<>
            <div className='flex-1 flex'>
                {!(edit === todoKey) ? <>
                <div className='p-2 relative sm:p-3  flex justify-between  w-full text-[10px] font-poppins capitalize text-zinc-200'>
                    <span className='flex flex-col items-center text-center w-[35%] whitespace-nowrap text-ellipsis'>
                                    {children.a.name}
                        <Image src="/ball.png" alt="Vercel Logo" width={40} height={40} className="mt-2 mb-2 w-9 h-9 rounded-full object-cover  " />
                                    {children.a.vote}
                    </span>
                    <span className='flex flex-col items-center text-center w-[30%] whitespace-nowrap text-ellipsis'>

                                    {children.d.name}
                    <Image src="/ball.png" alt="Vercel Logo" width={40} height={40}  className="mt-2 mb-2 w-9 h-9 rounded-full object-cover"/>
                                    {children.d.vote}
                    </span>
                    <span className='flex flex-col items-center text-center w-[35%] whitespace-nowrap text-ellipsis'>

                                    {children.b.name}
                        <Image src="/ball.png" alt="Vercel Logo"width={40} height={40} className="mt-2 mb-2 w-9 h-9 rounded-full object-cover" />
                                    {children.b.vote}
                    </span>
                </div>

                              
                
                </>  : (
                    <input className='bg-inherit flex-1 text-white outline-none' value={edittedValue} onChange={(e) => setEdittedValue(e.target.value)} />
                )}
                {/* {children} */}
            </div>
            {/* options button */}
            <div className='flex items-center'>
                {(edit === todoKey) ? <i onClick={handleEditTodo} className="fa-solid fa-check px-2 duration-300 hover:scale-125 cursor-pointer"></i> : <i onClick={handleAddEdit(todoKey)} className="fa-solid fa-pencil px-2 duration-300 hover:rotate-45 cursor-pointer"></i>}
                <i onClick={handleDelete(todoKey)} className="fa-solid fa-trash-can px-2 duration-300 hover:scale-125 cursor-pointer"></i>
            </div>
</>
        </div>
    )
}