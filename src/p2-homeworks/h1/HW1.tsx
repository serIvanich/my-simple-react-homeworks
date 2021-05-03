import React from 'react'
import Message from './Message'
import AlternativeMessage from "./AlternativeMessage";
import {v1 as v} from 'uuid'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

export type UserType = {
    id: string
    name: string
    contact: string
    skills: string[]
    experience: string

}

const user = {
    id: v(),
    name: 'Serik',
    contact: 'my email and other contact details',
    skills: [' html ', ' css ', ' js ', ' react '],
    experience: 'My experience of work...'
}
const timeCreate = new Date()
let n = timeCreate.toTimeString().slice(0,8)


function HW1() {

    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage timeCreate={n} user={user}/>
            <hr/>
        </div>
    )
}

export default HW1
