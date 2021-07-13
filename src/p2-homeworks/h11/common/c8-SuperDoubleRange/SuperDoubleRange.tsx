import React, {ChangeEvent} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (event: ChangeEvent<{}>, value: number | number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Typography id="range-slider" gutterBottom>
                double range
            </Typography>
            <Slider
                value={value}
                onChange={onChangeRange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                // getAriaValueText='valuetext'
            />
        </>
    )
}

export default SuperDoubleRange
