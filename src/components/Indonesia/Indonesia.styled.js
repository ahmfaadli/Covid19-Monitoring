import styled from "styled-components";

const statusColor = {
    confirmed: "blue",
    recovered: "orange",
    death: "red"
};

const IndonesiaStyle = styled.div`
    margin-bottom: 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    background-color: #f2f2f2;
;

h3 {
    color: #000000;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 0rem;
    min-height: 2rem;
}

h2 {
    color: ${(props) => statusColor[props.status] || "#ffffff"};
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    margin-bottom: 0.5rem;
    min-height: 1rem;
}

@media (min-width: 768px) {
    flex-basis: 50%;
}

@media (min-width: 992px) {
    flex-basis: 20%;
    padding: 5rem;
};
`
export default IndonesiaStyle;