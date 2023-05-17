import { useEffect, useReducer } from "react";

//Handling sync between state reducer and LocalStorage
const usePersistedReducer = (reducer, initialState, localStorageKey) => {
    const[state, dispatch] = useReducer(reducer, initialState, initial => { //"initial" params = initialState that we passed   
        const persistedValue = localStorage.getItem(localStorageKey);

        return persistedValue ? JSON.parse(persistedValue) : initial;
    });
    //useeffect is able to run logic when something changes. Quando o state ou localStorageKey mudar a função é disparada.
    useEffect(() => { //this function syncs the state with localStorage
        localStorage.setItem(localStorageKey, JSON.stringify(state)); //transformando pra string
    }, [state, localStorageKey]);

    return [state, dispatch];
};
 

const starredShowsReducer = (currentStarred, action) => {
    switch(action.type) {
        case 'STAR': 
            return currentStarred.concat(action.showId);
        case 'UNSTAR':
            return currentStarred.filter(showId => showId !== action.showId) //it'll return a boolean
        default:
            return currentStarred;
    }
}

export const useStarredShows = () => {
    return usePersistedReducer(
        starredShowsReducer, [], 'Starred Shows:'
    );
} 