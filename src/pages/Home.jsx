import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');

  const onSearchInputChange = event => {
    setSearchStr(event.target.value);
  };

  const onSearch = async (event) => {
    event.preventDefault();

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchStr}`);
    const body = await response.json();
    console.log(body);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />{' '}
        {/*Don't forget to put "value" = two-way data binding*/}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
