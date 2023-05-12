//import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';


//using a library called "TanSack / React-query" in order to fetch data safely and practically, without deliting "StrictMode" from index.js 

const Show = () => {
    const { showId } = useParams();

    //The block below is adapted from TanStack
    const { data: showData, error: showError } = useQuery({    
      queryKey: ['show', showId],
      queryFn: () => getShowById(showId),
  });

    if (showError) {
      return <div>We have an error: {showError.message}</div>
    }
    if (showData) {
      return <div>Got show data: {showData.name}</div>
    }
    return <div>Data is loading</div>
  };
  
  export default Show;
  