import styled from 'styled-components';

export const HeroStyle = styled.div`
    margin: 1rem;

    section{
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    @media (min-width: 768px) {
      flex-basis: 50%;
    }

    @media (min-width: 992px) {
    margin: 3rem auto;

    section{
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      padding: 0rem 1rem 1rem 6rem;
    }
    }
`

export const HeroRight = styled.div`
    margin-bottom: 1rem;
  
    img{
      width: 100%;
      height: auto;
    }

    @media (min-width: 992px) {
      flex-basis: 80%;     
    }
`

export const HeroLeft= styled.div`
    margin-bottom: 1rem;
   @media (min-width: 992px) {
      flex-basis: 90%;
    }
`
