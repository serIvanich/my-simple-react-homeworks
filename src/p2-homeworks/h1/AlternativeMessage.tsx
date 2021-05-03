import React from 'react'
import s from './AlternativeMessage.module.css'
import { UserType } from './HW1'


type AltMessagePropsType = {
    timeCreate: string
    user: UserType
}

function AlternativeMessage(props: AltMessagePropsType) {
    return (
        <div className={s.container}>

            <div className={s.time}>ENTRY TIME: {props.timeCreate}</div>
            <div className={s.firstElem}>
                <h3>{props.user.name}</h3>
            </div>
            <div className={s.secondElem}>
                {props.user.contact}
            </div>
            <div className={s.thirdElem}>
                {props.user.experience}
            </div>
            <div className={s.fourthElem}>
                {props.user.skills}
            </div>

        </div>
    )
}

export default AlternativeMessage
