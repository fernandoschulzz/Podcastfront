import {GET_PODCASTS, GET_BLOGS, GET_TRENDINGEPISODE} from '../actions/contants'

const initialState = {
    podcasts: [],
    trendingEpisode: {},
    blogs: []
}

const rootReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_PODCASTS: 
        return {
            ...state,
            podcasts: action.payload
        }
        case GET_TRENDINGEPISODE:
            return {
                ...state,
                trendingEpisode: action.payload
            }
        case GET_BLOGS: 
        return {
            ...state,
            blogs: action.payload
        }
        default: return state;
    }
}

export default rootReducer;