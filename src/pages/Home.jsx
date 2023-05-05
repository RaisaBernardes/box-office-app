import { useState } from 'react';
import { searchForShows } from './../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState([]);

  const onSearchInputChange = event => {
    setSearchStr(event.target.value);
  };

  const onSearch = async event => {
    event.preventDefault();

    const result = await searchForShows(searchStr); //data coming from api
    setApiData(result);
  };

  const renderApiData = () => {
    if(apiData) {// if apiData has data or is "true"
      return apiData.map((data) => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    };
    return null; //if apiData has no data or is "false" 
  }

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />{' '}
        {/*Don't forget to put "value" = two-way data binding*/}
        <button type="submit">Search</button>
      </form>

      <div>
        {renderApiData()}
      </div>
    </div>
  );
};

export default Home;
