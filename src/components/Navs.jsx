import { Link } from 'react-router-dom'

const LINKS = [ //Array de objetos
    {
        text: 'Home',
        to: "/",
    },
    {
        text: 'Starred',
        to: '/starred', //o "to" vai ser a continuação da url
    },
];

const Navs = () => {
    return(
        <div> 
            <ul>
                {LINKS.map((item) => ( //vai percorrer o array de objetos dentro de "LINKS"
                    <li key={item.to}>
                        <Link to={item.to}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navs;