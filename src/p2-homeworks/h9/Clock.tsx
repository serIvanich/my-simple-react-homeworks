import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())// setDate
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)// close
    }
    console.log(date)
    const stringTime = date.toTimeString().slice(0,8) // fix with date
    const stringDate =`${date.getFullYear()} 0${date.getMonth() + 1} 0${date.getDate()}`// fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{
                    height: '40px',
                    width: '80px',
                    margin: '5px',
                    padding: '5px',
                    border: '1px solid',
                    borderRadius: '5px',
                    backgroundColor: 'darkorange',
                    color: 'whitesmoke',
                }}
            >
                {stringTime}


            {show && (
                <div>

                    {stringDate}
                </div>
            )}
            </div>
            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton style={{marginLeft: '5px'}}
                         onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
