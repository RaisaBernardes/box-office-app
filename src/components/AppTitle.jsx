import styled from "styled-components";

export default function AppTitle(props){
    const { 
        title = "Box Office", //static default values
        subtitle="Look for a movie or an actor"
    } = props;
    
    return(
    <TitleWrapper> {/*era uma <div>*/}
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </TitleWrapper>
    )
}

//---styled-components

const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 0 40px;
  h1 {
    color: ${({ theme }) => theme.mainColors.blue};
    letter-spacing: 10px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  p {
    color: ${({ theme }) => theme.mainColors.dark};
    margin: 0;
  }
`;