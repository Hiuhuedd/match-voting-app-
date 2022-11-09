import React, { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { onSnapshot, collection, query, getDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import axios from "axios";
export default function useFetchTodos() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [todos, setTodos] = useState(null)

    const { currentUser } = useAuth()
    console.log("==========Dara",todos);
    const id="allusers"
    useEffect(() => {
        async function fetchData() {
            try {
              
                 const docRef = doc(db, 'users',id)
                    const docSnap = await getDoc(docRef)
                    if (docSnap.exists()) {
                        console.log(docSnap.data().todos);
                        setTodos(docSnap.data().todos)
                        // setTodos('todos' in docSnap.data() ? docSnap.data().todos : {})
                        teamData()
                    } else {
                        setTodos({})
                    }
                } catch (err) {
                    setError('Failed to load todos') 
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()

       
const teamData=()=>{

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '27365f6579msh93c9f38dd1de230p1b0d67jsn5e144031af30',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };
    
    fetch('https://api-football-v1.p.rapidapi.com/v3/teams?search=arsenal', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
    }, [])

    return { loading, error, todos, setTodos }
}
                 