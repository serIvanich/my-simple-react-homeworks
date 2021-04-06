import React from 'react'
import s from './AlternativeMessage.module.css'
import {v4 as v} from 'uuid'

type AltMessagePropsType = {
    timeCreate: string
}

function AlternativeMessage(props: AltMessagePropsType) {
    return (
        <div className={s.container}>
            <div className={s.time}>ENTRY TIME: {props.timeCreate}</div>
            <div className={s.firstElem}>
                {v()}
            </div>
            <div className={s.secondElem}>
                {v()}
            </div>
            <div className={s.thirdElem}>
                {v()}
            </div>
            <div className={s.fourthElem}>
                {v()}
            </div>

        </div>
    )
}

export default AlternativeMessage
