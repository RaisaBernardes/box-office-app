import { useState } from 'react';
import { searchForShows, searchForPeople } from './../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  console.log(searchOption);

  const onSearchInputChange = event => {
    setSearchStr(event.target.value);
  };

  const onRadioChange = event => {
    setSearchOption(event.target.value)
  }


  const onSearch = async event => {
    event.preventDefault();
    
    //handling api error
    try {
      setApiDataError(null); //this is to clean up the previous state before every request we send

      if (searchOption === 'shows'){
        const result = await searchForShows(searchStr); //data coming from api
        setApiData(result);
      } else {
        const result = await searchForPeople(searchStr); //data coming from api
        setApiData(result);
      } 
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
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />{' '} {/*Don't forget to put "value" = two-way data binding*/}
       
        <label>
          Shows
          <input type="radio" name="search-option" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange}></input>
        </label>
        <label>
          Actors
          <input type="radio" name="search-option" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange}></input>
        </label>

        <button type="submit">Search</button>
      </form>

      <div>
        {renderApiData()}
      </div>
    </div>
  );
};

export default Home;
