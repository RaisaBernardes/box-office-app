import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr'
import CustomRadio from './shows/CustomRadio';

const SearchForm = ({ onSearch }) => {
    const [searchStr, setSearchStr] = useSearchStr('');
    const [searchOption, setSearchOption] = useState('shows');

    const onSearchInputChange = event => { //coloca o valor de input no estado atual "searchStr"
        setSearchStr(event.target.value);
      };
    
    const onRadioChange = event => { //coloca a opção selecionada no estado atual "searchOption"
        setSearchOption(event.target.value)
      };

    const onSubmit = (event) => { //Botão "pesquisar"
        event.preventDefault();

        const options = { //obj que "resume" o valor digitado no input + opção de radio
            q: searchStr, searchOption,
        }

        onSearch(options); //onSearch é uma função recebida de props
    }
    
    return (
    <form onSubmit={onSubmit}>
       <input type="text" value={searchStr} onChange={onSearchInputChange} />{' '} {/*Don't forget to put "value" = two-way data binding*/}
      
       <CustomRadio 
        label="Shows"
        name="search-option"
        value="shows"
        checked={searchOption === 'shows'}
        onChange={onRadioChange}
       />

       <CustomRadio 
        label="Actors"
        name="search-option"
        value="actors"
        checked={searchOption === 'actors'}
        onChange={onRadioChange}
       /> 

        <button type="submit">Search</button>
    </form>
    )
}

export default SearchForm;