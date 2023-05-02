import {createContext, useReducer} from "react";

import {initState, weatherReducer} from "../reducers/weather.reducer";

const StateContext = createContext(null);
const Provider = ({children}) => {
    const reducers = {
        weathReducer: useReducer(weatherReducer, initState),
    }
    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {
    Provider,
    StateContext
}