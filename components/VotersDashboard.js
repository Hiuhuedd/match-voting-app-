import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import VoteCard from './VoteCard'
import { doc, setDoc, deleteField } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import useFetchTodos from '../hooks/fetchteams'

export default function VotersDashboard() {
    const { userInfo, currentUser } = useAuth()
    const [edit, setEdit] = useState(null)
    const [todo, setTodo] = useState('')
    const [todo2, setTodo2] = useState('')
    const [edittedValue, setEdittedValue] = useState('')

    const { todos, setTodos, loading, error } = useFetchTodos()
    const draw="draw"
    const [country, setcountry] = useState('Italy')
    const [type, settype] = useState('Bundesliga')

    console.log(todos)
    const id="allusers"
    // useEffect(() => {
    //     if (!userInfo || Object.keys(userInfo).length === 0) {
    //         setAddTodo(true)
    //     }
    // }, [userInfo])
    
    const game={
        a: {name:todo,vote:0},
        b: {name:todo2,vote:0},
        d: {name:draw,vote:0},
        voters:[],
        country:country,
        type:type,
        time: Date.now()
    }
   

const handleEditTodo= async(todoKey,obj)=> {
        if (!obj) { return }
        const newKey = todoKey
        const userRef = doc(db, 'users', id)
        await setDoc(userRef, {
            'todos': {
                [newKey]: obj
            }
        }, { merge: true })
        
        // setTodos({ ...todos, [newKey]: obj })
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
            console.log(todos[todoKey])
        
    }

 

   
    return (
                <div className='w-full max-w-[90%] text-xs sm:text-sm mx-auto flex flex-col flex-1 gap-3 sm:gap-5 bg-whitex'>
                 <div className='flex justify-between mobile:flex-col '>
                 <h2 className=''>
                    Matches
                </h2>
                 </div>
        
                    {(!loading) && (
                        <div className='grid   tablet:grid-cols-1 tablet-laptop:grid-cols-3 gap-3'>
                   
                            {      
                            
                            Object.keys(todos).length >0 && Object.keys(todos).reverse().map((todo, i) => {
                                return (

                                    <VoteCard handleEditTodo={handleEditTodo} key={i} handleAddEdit={handleAddEdit} edit={edit} todoKey={todo} edittedValue={edittedValue} setEdittedValue={setEdittedValue} handleDelete={handleDelete}>
                                        {todos[todo]}
                                    </VoteCard>

                                )
                            })}
                        </div>
                    )}
                    {/* {!addteam && <button onClick={() => setAddteam(true)} className='text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase text-lg duration-300 hover:opacity-30'>ADD team</button>} */}
                </div>
            )
}
