const Cast = ({ cast }) => {

  if(cast.length === 0){
    return <div>No cast information available.</div>
  } else {
    return (
      <div>
        {cast.map(({ person, character, voice }) => (
          <div key={person.id}>
            <div>
              <img src={person.image ? person.image.medium : '/not-found.png'} />
            </div>
            <div>
              {person.name} | {character.name} {!!voice && '| Voiceover'}
            </div>
          </div>
        ))}
      </div>
    );
  }

};

export default Cast;
