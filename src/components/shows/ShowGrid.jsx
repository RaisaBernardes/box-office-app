import ShowCard from "./ShowCard"
import { useStarredShows } from "../../lib/useStarredShows";
import { FlexGrid } from "../common/FlexGrid"

const ShowGrid = ({ shows }) => {
    const [starredShows, dispatchStarred]= useStarredShows();

    // const [starredShows, dispatchStarred] = usePersistedReducer(
    //     starredShowsReducer, [], 'Starred Shows:');
    
    const onStarMeClick = showId => {
        const isStarred = starredShows.includes(showId); //O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false

        if(isStarred) {
            dispatchStarred({ type: 'UNSTAR', showId });
        } else {
            dispatchStarred({ type: 'STAR', showId });
        }
    };

    return (
        <FlexGrid>
            {shows.map(data => (
                <ShowCard 
                key={data.show.id} 
                id={data.show.id}
                name={data.show.name} 
                image={data.show.image ? data.show.image.medium : '/not-found.png'}
                summary={data.show.summary}
                onStarMeClick={onStarMeClick}
                isStarred={starredShows.includes(data.show.id)} /*check if starredShows has data. "includes" method returns a true or false value*/
                />
            ))}
        </FlexGrid>
    );
};

export default ShowGrid;