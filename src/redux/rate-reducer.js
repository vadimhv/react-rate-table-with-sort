import {participantsAPI} from "../api/api";

const CHANGE_PART = 'CHANGE_PART',
    SORT_NAME = 'SORT_NAME',
    SORT_SHOOT = 'SORT_SHOOT',
    SORT_SPEED = 'SORT_SPEED',
    SET_PARTICIPANTS = 'SET_PARTICIPANTS'

const initialState = {
    participants: []
}

const rateReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_PART:
            return {
                ...state,
                participants: action.participants
            }

        case SORT_NAME:
            return {
                ...state,
                participants: [...state.participants].sort((a, b) => a.name > b.name ? 1 : -1)
            }
        case SORT_SHOOT:
            return {
                ...state,
                participants: [...state.participants].sort((a, b) => a.shooting > b.shooting ? 1 : -1)
            }
        case SORT_SPEED:
            return {
                ...state,
                participants: [...state.participants].sort((a, b) => a.speed > b.speed ? 1 : -1)
            }
        case SET_PARTICIPANTS:
            return {
                ...state,
                participants: action.participants
            }
        default:
            return state
    }
}

export const changeParticipants = (participants) => ({type: CHANGE_PART, participants})
export const sortName = () => ({type: SORT_NAME})
export const sortShoot = () => ({type: SORT_SHOOT})
export const sortSpeed = () => ({type: SORT_SPEED})
export const setParticipants = (participants) => ({type: SET_PARTICIPANTS, participants})

/* THUNK */
export const getParticipants = () => async (dispatch) => {
    let response = await participantsAPI.getParticipants();
    dispatch(setParticipants(response));
}

export default rateReducer;