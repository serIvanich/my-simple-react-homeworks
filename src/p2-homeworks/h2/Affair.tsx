import React from 'react'
import s from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <>
            <li >
                {props.affair.name}

                <button className={s.buttonDelete} onClick={deleteCallback}>x</button>
            </li>
        </>
    )
}

export default Affair
