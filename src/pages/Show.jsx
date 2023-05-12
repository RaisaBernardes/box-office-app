import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';


//custom Hook = Is good to reuse it in other components. Works as functions in programming
const useShowById = (showId) => { //since we don't have access to showId anymore, we can get it from arguments
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null); 

  useEffect(() => {
    async function fetchData() { 
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch(err) {
        setShowError(err)
      }
    }
    fetchData();
  }, [showId]);

  return { showData, showError }; //We also don't have access to these 2 datas, so we can return as an object and implement a logic as in "solution A" comment
}


const Show = () => {
    const { showId } = useParams();
    const { showError, showData } = useShowById(showId); //(solution A)

    if (showError) {
      return <div>We have an error: {showError.message}</div>
    }
    if (showData) {
      return <div>Got show data: {showData.name}</div>
    }
    return <div>Data is loading</div>
  };
  
  export default Show;
  