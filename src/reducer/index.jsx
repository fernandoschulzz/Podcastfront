import {GET_PODCASTS, GET_PODCAST_BY_ID, GET_BLOGS} from '../actions/contants'

const initialState = {
    podcasts: []
}

const rootReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_PODCASTS: 
        return {
            ...state,
            podcasts: action.payload
        }
    }
}

export default rootReducer;