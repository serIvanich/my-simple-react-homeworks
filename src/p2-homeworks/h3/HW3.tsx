import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import { AlternativeGreeting } from './AlternativeGreeting';

// types
export type UserType = {
    _id: string// need to fix any
    name: string // need to fix any
}

export type AltUsersType = {
    id: string
    name: string
    age: string
    email: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const getId = () => v1()
    const addUserCallback = (name: string) => {
        const newUsers = [{_id: getId(), name: name}, ...users]
        // need to fix any
        setUsers(newUsers) // need to fix
    }
//AlternativeGreeting
    
    const [altUsers, setAltUsers] = useState<Array<AltUsersType>>([])

    const addAltUser = (name: string, age: string, email: string) => {
        setAltUsers([
            {id: v1(),
            name: name,
            age: age,
            email: email}, ...altUsers])
    }


    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeGreeting altUsers={altUsers} addAltUser={addAltUser}/>
            <hr/>
        </div>
    )
}

export default HW3
