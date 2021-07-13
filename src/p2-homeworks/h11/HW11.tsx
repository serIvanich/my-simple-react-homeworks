import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (value: number) => {
        setValue1(value)
    }
    const onChangeDoubleRange = (event: ChangeEvent<{}>,value: number[] | number) => {
        if (value instanceof Array) {
            setValue1(value[0])
            setValue2(value[1])
        }
    }
    return (
        <div >
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.allBox}>
                <span>{value1}</span>
                <SuperRange
                    myValue={value1}
                    onChangeRange={onChangeRange}
                />
            </div>

            <div className={s.allBox}>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeDoubleRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
