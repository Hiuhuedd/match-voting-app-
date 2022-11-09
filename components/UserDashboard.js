

import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import TodoCard from './teamCard'
import { doc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import useFetchTodos from '../hooks/fetchteams'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function UserDashboard() {
    const { userInfo, currentUser } = useAuth()
    const [edit, setEdit] = useState(null)
    const [todo, setTodo] = useState('')
    const [todo2, setTodo2] = useState('')
    const [country, setcountry] = useState('Italy')
    const [type, settype] = useState('Bundesliga')
    const [edittedValue, setEdittedValue] = useState('')

    const { todos, setTodos, loading, error } = useFetchTodos()
    const draw="draw"

let arr= new Array
    console.log(todos)

    // useEffect(() => {
    //     if (!userInfo || Object.keys(userInfo).length === 0) {
    //         setAddTodo(true)
    //     }
    // }, [userInfo])

const game={
    a: {name:todo,vote:0},
    b: {name:todo2,vote:0},
    d: {name:draw,vote:0},
    voters:{},
    country:country,
    type:type,
    time: Date.now()
}

const id="allusers"
    async function handleAddTodo() {
        if (!todo) { return }
        const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1
        setTodos({ ...todos, [newKey]: game })
        const userRef = doc(db, 'users', id)
        await setDoc(userRef, {
            'todos': {
                [newKey]: game
            }
        }, { merge: true })
        setTodo('')
    }

    async function handleEditTodo() {
        if (!edittedValue) { return }
        const newKey = edit
        setTodos({ ...todos, [newKey]: edittedValue })
        const userRef = doc(db, 'users',id)
        await setDoc(userRef, {
            'todos': {
                [newKey]: edittedValue
            }
        }, { merge: true })
        setEdit(null)
        setEdittedValue('')
    }

    function handleAddEdit(todoKey) {
        return () => {
            console.log(todos[todoKey])
            console.log('bannan')
            setEdit(todoKey)
            setEdittedValue(todos[todoKey])
        }
    }

    function handleDelete(todoKey) {
        return async () => {
            const tempObj = { ...todos }
            delete tempObj[todoKey]
console.log("deletin",todoKey);
            setTodos(tempObj)
            const userRef = doc(db, 'users', id)
            await setDoc(userRef, {
                'todos': {
                    [todoKey]: deleteField()
                }
            }, { merge: true })

        }
    }

   
    return (
                <div className='w-full max-w-[90%] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5 bg-whitex'>
                 <div className='flex mobile:flex-col  '>
                 <div className='flex  '>
                        <input type='text' placeholder="Enter Team" value={todo} onChange={(e) => setTodo(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-sm text-slate-900 flex-1" />
                  
                    {/* {(loading) && (<div className='flex-1 grid place-items-center'>
                        <i className="fa-solid fa-spinner animate-spin text-6xl"></i>
                    </div>)} */}
                    </div>
                    <div>
                                <h2 className='relative z-20'>
                                    Vs
                                </h2>

                    </div>
                    <div className='flex flex-col'>
                        <input type='text' placeholder="Enter Team" value={todo2} onChange={(e) => setTodo2(e.target.value)} className="outline-none p-3 text-base sm:text-lg text-sm text-slate-900 flex-1" /> 
                      
                    {/* {(loading) && (<div className='flex-1 grid place-items-center'>
                        <i className="fa-solid fa-spinner animate-spin text-6xl"></i>
                    </div>)} */}
                    </div>
                 </div>
        
                    <button onClick={()=>handleAddTodo()} className=' px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-40'>
                        {loading?<Box sx={{ display: 'flex' }} className="flex items-center justify-center text-xs relative z-20 "> 
                    <CircularProgress size={15} /> 
                </Box>:"Add Match"}
                        </button>
                    {(!loading) && (
                        <div className='grid   tablet:grid-cols-1 tablet-laptop:grid-cols-3 gap-3'>
                   
                            {      
                            
                           todos!==null && Object.keys(todos).reverse().map((todo, i) => {
                         
                                return (
                                    <TodoCard handleEdittodo={handleEditTodo} key={i} handleAddEdit={handleAddEdit} edit={edit} todoKey={todo} edittedValue={edittedValue} setEdittedValue={setEdittedValue} handleDelete={handleDelete}>
                                        {todos[todo]}
                                    </TodoCard>
                                )
                            })}
                        </div>  
                    )}
                    {/* {!addteam && <button onClick={() => setAddteam(true)} className='text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30'>ADD team</button>} */}
                </div>
            )
}
