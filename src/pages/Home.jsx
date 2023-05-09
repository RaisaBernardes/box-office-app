import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';
import SearchForm from '../components/SearchForm';

const Home = () => {

  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ q, searchOption }) => {
    
    //handling api error
    try {
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

    if(apiData) {// if apiData has data or is "true"
      return apiData[0].show //if the 1st element of the api's data is "show"...
       ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
       : apiData.map(data => (<div key={data.person.id}>{data.person.name}</div>))
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
