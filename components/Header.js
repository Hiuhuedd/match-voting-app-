import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import { FiUser } from "react-icons/fi";
import { useAuth } from '../context/AuthContext';

export default function Header() {
    // const [openModal, setOpenModal] = useState(false)
    const {  currentUser } = useAuth()
    return (
        <>
            {/* {openModal && <Modal setOpenModal={setOpenModal} />} */}
            <div className='sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white z-[100]'>
                <h1 className='text-3xl select-none sm:text-6xl'>Team spot</h1>
                {currentUser&&      <Modal  />}
          
                         
            </div>
        </>
    )
}
