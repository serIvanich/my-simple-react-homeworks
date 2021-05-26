import {ActionType, UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            return action.payload === 'up'
                ? newState.sort((a, b) => a.name < b.name ? -1 : 1)
                : newState.sort((a, b) => a.name < b.name ? 1 : -1)
        }
        case 'check': {

            return state.filter(p => p.age >= action.payload)
        }
        default: return state
    }
}