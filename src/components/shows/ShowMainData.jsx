const ShowMainData = ({image, name, rating, summary, genres}) => {
    return <div>
        <img src={image ? image.medium : '/not-found.png'} alt={name} />

        <div>
            <h1>{name}</h1>
            <div>{rating.average || 'N/A'}</div> {/*If rating average is 0, display 'N/A'*/}
            <div dangerouslySetInnerHTML={{__html: summary}} /> {/*(!!!) This is for displaying summary as an actual html*/}
            <div>
                Genres:
                <div>
                    {genres.map((genre) => <span key={genre}>{genre}</span>)}
                </div>
            </div>
        </div>



        </div>
}

export default ShowMainData;