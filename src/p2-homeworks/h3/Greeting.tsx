import React, {ChangeEvent, KeyboardEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

type GreetingPropsType = {
    users: Array<UserType>
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    setError: (error: string) => void
    checked: boolean
    setChecked: (checked: boolean) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {users, name, setNameCallback, addUser, error, totalUsers, setError, checked, setChecked} // деструктуризация пропсов
) => {
    //remove the error text
    function onFocus() {
        setError('')
    }

    function onChecked() {
        setChecked(!checked)
    }

    function onPressEnter(e: KeyboardEvent<HTMLInputElement>) {
        
        if (e.code === 'Enter') {
            addUser()
            e.currentTarget.blur()

        }
    }

    let inputClass
    error ? inputClass = s.error : inputClass = s.input// need to fix with (?:)

    return (
        <div>
            <span>Please,input correct name for added to list: </span>
            <input value={name} onChange={setNameCallback} onFocus={onFocus} onKeyPress={onPressEnter}
                   className={inputClass}/>
            {error && <TextError error={error}/>}
            <button onClick={addUser}>add</button>
            <div className={s.users}>
                All users on list :
                <span> {totalUsers}</span>
                <div>
                    <input onClick={onChecked} type={'checkbox'} checked={checked}/>
                    our group:
                    <div>
                        {checked && users.map(u => <span key={u._id}>  {u.name}  </span>)}
                    </div>


                </div>
            </div>
        </div>
    )
}
type TextErrorPropsType = {
    error: string
}

export const TextError: React.FC<TextErrorPropsType> = ({error}) => {
    return <div className={s.textError}>
        {error}
    </div>
}


export default Greeting
