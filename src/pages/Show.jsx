import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import ShowMainData from '../components/shows/ShowMainData';
import Details from '../components/shows/Details';
import Seasons from '../components/shows/Seasons';
import Cast from '../components/shows/Cast';

/*
RESUMO:
- Pega o id do show pela url e usa o id para procurar na api as informações daquele show (Para o Read More)
*/

//using a library called "TanSack / React-query" in order to fetch data safely and practically, without deleting "StrictMode" from index.js

const Show = () => {
  const { showId } = useParams(); //useParams acessa parâmetros da url

  //The block below is adapted from TanStack
  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }
  if (showData) { //se achar na api, mostra os dados principais do show segundo informações da api
    return (
      <div>

        <Link to="/">Go back to home</Link>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }
  return <div>Data is loading</div>;
};

export default Show;
