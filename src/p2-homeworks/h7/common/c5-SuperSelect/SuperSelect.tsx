import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    value?: any
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        value,
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const styleSelect = {
        margin: '10px',
        borderColor: 'green',
        borderRadius: '3px',
        color: 'orange'
    }
    const styleOption = {
        color: "green"
    }

    const mappedOptions: any[] = options ? options.map((o, i) => {
            return (
                <option key={i} selected={o === value} style={styleOption} >
                    {o}
                </option>
            )
        })
        : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)

        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} style={styleSelect}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
