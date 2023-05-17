import { useEffect, useState } from "react";

/*
Resumo:
- O objetivo é quando o usuário escrever na caixa de input, o que foi escrito não seja perdido caso ele clique em outro local e volte, ou ele atualize a página, por exemplo.
- useEffect is needed to sicronyze the state with sessionStorage
*/

const usePersistedState = (initialState, sessionStorageKey) => {
    const[state, setState] = useState(() => { //useState can recieve either the initial State or the initializer function which will run only once (unlike useReducer)
    const persistedValue = sessionStorage.getItem(sessionStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initialState;
    })

    useEffect(() => { //this function syncs the state with localStorage
        sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
    }, [state, sessionStorageKey]);
        
    return [state, setState]; 
};

//See explanation 1 on bottom
export const useSearchStr = () => {
     return usePersistedState('', 'searchString') //'searchString' will be the sessionStorageKey. usePersistedState will return an array of 
} 



/*
Explanation 1:
- 'searchString' will be the "key" (sessionStorageKey) when we inspect the sessionStorage in "application"
- The empty string is the initial state of line 8, and will be displayed in the "inspect" as "value"
- What is happening is that the state (lines 9-12) is initialized with the value (empty string).
- Now, whatever we type in the searchbox will be defleted as value inside the sessionStorageKey under searchString, bcause we used useEffect to sync the state
*/
