import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowGrid from '../components/shows/ShowGrid';
import ActorsGrid from '../components/actors/ActorsGrid';

const Home = () => {

  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => { //these elements were passed by parameters in SearchForm component
    
    try { //handling api error
      setApiDataError(null); //this is to clean up the previous state before every request we send

      let result;

      if (searchOption === 'shows'){
        result = await searchForShows(q); //data coming from api
        setApiData(result);
      } else {
        result = await searchForPeople(q); //data coming from api
      } 
      setApiData(result);
    } catch (error) {
      setApiDataError(error)
    }
  };

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

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
