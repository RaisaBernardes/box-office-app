import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

/*
A <NavLink> is a special kind of <Link> that knows whether or not it is "active" or "pending". 
This is useful when building a navigation menu, such as a breadcrumb or a set of tabs where 
you'd like to show which of them is currently selected. It also provides useful context for 
assistive technology like screen readers.
*/

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
            <NavList>
                {LINKS.map((item) => ( //vai percorrer o array de objetos dentro de "LINKS"
                    <li key={item.to}>
                        <LinkStyled to={item.to}>{item.text}</LinkStyled> {/*LinkStyled = NavLink stylized*/}
                    </li>
                ))}
            </NavList>
        </div>
    )
}
export default Navs;


//NavList, in this case, represents <ul> html component
const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  li {
    margin: 0 10px;
  }
`;

const LinkStyled = styled(NavLink)`
  display: block;
  padding: 3px 15px;
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.mainColors.gray};
  &.active { //When the NavLink has the active class it'll specify the styling below
    color: ${({ theme }) => theme.mainColors.blue};
    &:after { //A nested "&" selects the parent element in both SASS and LESS. The same as NavLink.after
      content: '';
      position: absolute;
      display: block;
      height: 2px;
      left: 0%;
      bottom: 0;
      background-color: ${({ theme }) => theme.mainColors.blue};
      animation: slide-in 0.3s ease-in forwards;
      @keyframes slide-in {
        from {
          left: 50%;
          width: 0;
        }
        to {
          left: 0%;
          width: 100%;
        }
      }
    }
  }
`;