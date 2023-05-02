const initState = {
    weatherData: [],
    trigger: null
};
const weatherReducer = (state, action) => {

    switch (action.type) {
        case 'GET_WEATHER':
            return {...state, weatherData: action.payload}
        case 'TRIGGER':
            return {...state, trigger: !state.trigger}
        default:
            return state
    }
};

export {
    weatherReducer,
    initState
}
