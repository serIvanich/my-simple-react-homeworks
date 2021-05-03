import React, {ChangeEvent, useState} from "react";
import {TextError} from "./Greeting";
import s from './Greeting.module.css'
import {AltUsersType} from "./HW3";

type AltGreetingPropsType = {
    altUsers: Array<AltUsersType>
    addAltUser: (name: string, age: string, email: string) => void
}
export function AlternativeGreeting({altUsers, addAltUser}: AltGreetingPropsType) {
    const [nameValue, setNameValue] = useState<string>('')
    const [ageValue, setAgeValue] = useState<string>('')
    const [emailValue, setEmailValue] = useState<string>('')
    const [showUsersArray, setShowUsersArray] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    const [myAlert, setMyAlert] = useState<boolean>(false)


    function onChangeNameValue(e: ChangeEvent<HTMLInputElement>) {
        setNameValue(e.currentTarget.value)
    }
    function onChangeAgeValue(e: ChangeEvent<HTMLInputElement>) {
        setAgeValue(e.currentTarget.value)
    }
    function onChangeEmailValue(e: ChangeEvent<HTMLInputElement>) {
        setEmailValue(e.currentTarget.value)
    }

    function errorEnter(error: string) {
        setError(error)
    }

    function onClickEnter(){

        if (!/^[a-zA-Z]\w+$/.test(nameValue)) return errorEnter('name error')
        if (!/^\d{1,2}$/.test(ageValue)) return errorEnter('age error')
        if (!/^\w+@\w+.\w+.\w*$/.test(emailValue)) return errorEnter('email error')
        addAltUser(nameValue, ageValue, emailValue)
        setError('')
        setMyAlert(true)
        setShowUsersArray(false)
        setNameValue('')
        setAgeValue('')
        setEmailValue('')

    }




    function onClickCheckboxUsers() {
        setShowUsersArray(!showUsersArray)
    }

    function onClickContainer() {
        setMyAlert(false)
    }


    return (
        <div className={s.altContainer} >
            <h2>WARNING!!!</h2>
            <hr />
            <div className={s.text}>{'You are in the closed territory of the IT incubator!\nGive us your registration details.'} </div>
            <hr />
            <div className={s.nameInput}> Your name:
                <input onChange={onChangeNameValue} value={nameValue} />
                (name starts with a-z, may include a number!)
            </div>
            <div className={s.ageInput}>Your age:
                <input onChange={onChangeAgeValue} value={ageValue} />
                (only number!)
            </div>
            <div className={s.emailInput}>Your email:
                <input onChange={onChangeEmailValue} value={emailValue} />
                (for example email: name@mail.com)
            </div>
            <div>
                <button onClick={onClickEnter}>enter</button>
            </div>
            <input onClick={onClickCheckboxUsers} type={'checkbox'} checked={showUsersArray} />command of it-incubator
            {showUsersArray && <div className={s.groupUsers}>{altUsers.map(u => <li key={u.id}  >{`${u.name}  ${u.age}  ${u.email}`}</li>) }</div> }
            <div className={s.altError}>

                {error && <TextError error={error} />}

            </div>


            {myAlert && <div className={s.myAlertContainer}>
                <div className={s.myAlert}>{`Hi, ${altUsers[0].name}! We very happy, what you trust us.\nWe will write to you when you need it  ${altUsers[0].email} `}
                <button onClick={onClickContainer}>next</button>
                </div>
            </div> }

        </div>
    );
}





