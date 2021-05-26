import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './hw8.module.css'

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id}>
            <span className={s.name}>
                {p.name}
            </span>
           <span className={s.age}>
                {p.age}
            </span>

        </div>
    ))


    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div>
            <hr/>
            homeworks 8
            <div className={s.container}>
            {/*should work (должно работать)*/}
            {finalPeople}

            <div>
                <SuperButton className={s.button} onClick={sortUp}>sort up</SuperButton>
                <SuperButton className={s.button} onClick={sortDown}>sort down</SuperButton>
                <SuperButton className={s.button} onClick={check18}>check 18</SuperButton>
            </div>

            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}



export default HW8

type SortActionType = { type: string, payload: string }
type CheckActionType = { type: string, payload: number }
export type ActionType = SortActionType | CheckActionType
