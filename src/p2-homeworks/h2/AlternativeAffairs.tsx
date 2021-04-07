import React from 'react'
import {AffairType, ValueType} from "./HW2";
import s from './Affairs.module.css'

type AltAffairsPropsType = {
    data: Array<AffairType>
    value: string
    valueDelete: string
    affairId: number | undefined
    setValue: (value: ValueType) => void
    setValueDelete: (valueDelete: string) => void
    setAffairId: (affairId: number | undefined) => void
    deleteAltAffairCallback: (_id: number) => void
}

function AlternativeAffairs(props: AltAffairsPropsType) {
    function onClickDelete() {
        if (props.affairId) {
            props.deleteAltAffairCallback(props.affairId)
            props.setValue('no active')
            props.setValueDelete('no active')
        }
    }

    return (
        <div>
            <div>
                {props.data.map((a: AffairType) => {
                    function onClickName() {
                        props.setValue(a.priority)
                        props.setValueDelete(a.name)
                        props.setAffairId(a._id)
                    }
                    return <button key={a._id} className={s.buttonName} onClick={onClickName}>{a.name}</button>
                })}
            </div>
            <div className={s.levelBlock}>
                affair completion level: {props.value}
            </div>
            <div className={s.levelBlock}>
                delete affair <button onClick={onClickDelete}>{props.valueDelete}</button>
            </div>
        </div>
    )
}

export default AlternativeAffairs
