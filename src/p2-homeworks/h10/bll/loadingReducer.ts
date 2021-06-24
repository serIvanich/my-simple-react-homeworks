
const CHANGE_LOADING_STATE = 'CHANGE-LOADING-STATE'

const initState = {
    isInclusion: false,
}

type InitStateType = typeof initState
export const loadingReducer = (state: InitStateType = initState, action: loadingACType): InitStateType => { // fix any
    switch (action.type) {
        case CHANGE_LOADING_STATE: {
            return {
                ...state,
                isInclusion: action.isInclusion

            }
        }
        default:
            return state
    }
}

type loadingACType = {
    type: typeof CHANGE_LOADING_STATE
    isInclusion: boolean
}
export const loadingAC = (isInclusion: boolean): loadingACType => ({
    type: CHANGE_LOADING_STATE, isInclusion
}) // fix any