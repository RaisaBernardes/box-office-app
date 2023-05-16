import { useReducer, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const reducerFn = (currentCounter, action) => {
  switch(action.type){
    case 'INCREMENT': 
      return currentCounter + 1;
    case 'DECREMENT': 
      return currentCounter - 1;
    case 'RESET': 
      return 0;
    case 'SET_VALUE': //LEARNING EXAMPLE***
      return action.newCounterValue;
  }
    return 0; //default
}

const Home = () => {

  const [filter, setFilter] = useState('null');

  const [counter, dispatch] = useReducer(reducerFn, 0);

  const onIncrement = () => {
    //setCounter(currentCounter => currentCounter + 1) //Alternative if we were using useState instead of useReducer
    dispatch({ type: 'INCREMENT' }) //Dispatch an object which type is "increment" that we define ourselves. Whenever dispatch is called, it will be handle by reducerFn().
  }
  const onDecrement = () => {
    //setCounter(currentCounter => currentCounter + 1)
    dispatch({ type: 'DECREMENT' })
  }
  const onReset = () => {
    dispatch({ type: 'RESET' })
  }
  const onSetValue = () => {
    dispatch({ type: 'SET_VALUE', newCounterValue: 500 })
  }

  //Here data is fetching when the component mounts (USEQUERY example)
  //filter changes whenever user clicks the search button and then the filter state is updated (setFilter)
  const { data: apiData, error: apiDataError } = useQuery({
      queryKey: ['search', filter], 
      queryFn: () => 
      filter.searchOption === 'shows' 
      ? searchForShows(filter.q) 
      : searchForPeople(filter.q),
      enabled: !!filter, //the query will be able only if "filter" is not "null"
      refetchOnWindowfocus: false, //(check out when is interesting not to use this.)
  });

  const onSearch = async ({ q, searchOption }) => { 
    setFilter({q, searchOption});
  }

  const renderApiData = () => {
    if(apiDataError){ //displaying the error
      return <div>Error occured: {apiDataError.message}</div>
    }

    if(apiData?.length === 0){ //this "?" is called "optional chaining" and it works to prevent the error when data is "null" (null.length) cause JS can't read length in "null" values
      return <div>No results</div>
    }

    if(apiData) {// if apiData has data or is "true"
      return apiData[0].show //if the 1st element of the api's data is "show"...
       ? <ShowGrid shows={apiData}/> 
       : <ActorsGrid actors={apiData}/> 
    };
    return null; //if apiData has no data or is "false" 
  }

  return (
    <div>
      <SearchForm onSearch={onSearch}/>

      <div>Counter: {counter}</div>
      <button type='button' onClick={onIncrement}>Increment</button>
      <button type='button' onClick={onDecrement}>Decrement</button>
      <button type='button' onClick={onReset}>Reset</button>
      <button type='button' onClick={onSetValue}>Set Value to 500</button> {/*Learning example*/}

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
