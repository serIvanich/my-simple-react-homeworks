import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3"
import s from './Greeting.module.css'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any
    const [checked, setChecked] = useState<boolean>(false)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        // need to fix
    }


    const addUser = () => {
        const regexpName = /^\w+$/

        if (regexpName.test(name)) {

            addUserCallback(name)
            setName('')

            alert(`Hello ${name}!`)

        }else{setError('incorrect name input!\nname starts with a-z!\nmay include a number!')}// need to fix
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            users={users}
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            setError={setError}
            checked={checked}
            setChecked={setChecked}
        />
    )
}


export default GreetingContainer
