import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    name: string
    options?: any[]
    value: any
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const styleInput = {


        color: 'orange',
        marginLeft: '5px'
    }

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {

        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i} style={o === value ? {color: 'orange'} : {color: 'green'}}>
            <input
                type={'radio'}
                name={name}
                checked={o === value}
                value={o}
                onChange={onChangeCallback}

                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}


export default SuperRadio
