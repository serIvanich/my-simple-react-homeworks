import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from "./bll/store";
import preload from './img/preload.gif'

function HW10() {
    // useSelector, useDispatch
    let loading = useSelector((state: AppStoreType) => state.loading.isInclusion)

    const dispatch = useDispatch()
    const setLoading = () => {
        // dispatch
        // setTimeout
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? <div>
                    <img src={preload}/></div>
                : <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>

            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
