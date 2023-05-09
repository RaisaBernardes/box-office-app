const ActorsCard = ({ name, image, gender, country, birthday, deathday }) => {

    return (
    <div>
        <div>
            <img src={image} alt={name}/>
        </div>

        <h1>{name}</h1>
        <p>{gender}</p>
        <p>{country ? `Comes from ${country}` : 'No country known'}</p>
        {!!birthday && <p>Born {birthday}</p>} {/*"!!" is a if with a booleanish value*/}
        <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </div>
    );
};

export default ActorsCard;