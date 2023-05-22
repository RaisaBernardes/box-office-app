import styled from "styled-components";

const Details = ({status, premiered, network}) => {
    return (
    <DetailsWrapper>
        <p>Status: {status}</p>
        <p>
          Premiered {premiered} {!!network && `on ${network.name}`} {/*Will be displayed only if network.name is truthy*/}
        </p>
    </DetailsWrapper>
    )
}

export default Details;

//---styled-components

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;