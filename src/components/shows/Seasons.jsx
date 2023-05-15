const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Seasons in total: {seasons.length}</p>{' '}
      {/*In THIS case, the number of elements is the number of seasons, because each season is an array. The object "season" is an array of arrays*/}
      <p>
        Episodes in total:{' '}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}{' '}
        {/*This is to sum up all episodes in the serie*/}
      </p>
      <div>
        {seasons.map(season => (
          <div key={season.id}>
            <p>Season {season.number}</p>
            <p>Episodes {season.episodeOrder}</p>

            <div>
              Aired: {season.premiereDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
