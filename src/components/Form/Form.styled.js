import styled from "styled-components";

export const StyleForm = styled.div`
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    section {
        text-align: center;
        flex-direction: column;
        display: flex;
    }

    @media (min-width: 768px) {
      section {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
    }

    @media (min-width: 992px) {
      width: 100%;
      margin: 0;

      section {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
    }
`

export const FormRightStyle = styled.div`
    margin-bottom: 1rem;

    label {
        color: #ffffff;
        margin-bottom: 1rem;
        font-size: 1rem;
        text-align: center;
    }

    input, select {
        padding: 0.5rem;
        margin-bottom: 1rem;
        border-radius: 0.2rem;
        border: 1ppx;
        color: #333;
        width: 90%;
    }

    @media (min-width: 768px) {
      flex-basis: 50%;
    }

    @media (min-width: 992px) {
      flex-basis: 60%;
    }
`

export const FormLeftStyle = styled.div`
    img {
        width: 100%;
        height: auto;
        margin-left: auto;
    }

    @media (min-width: 992px) {
        flex-basis: 80%;
    }

    @media (min-width: 1200px) {
        flex-basis: 70%;
    }
`