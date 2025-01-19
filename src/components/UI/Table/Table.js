import styled from 'styled-components';

export const TableSection = styled.div`
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    overflow: auto;

table {
    width: 100%;
    margin: 0 auto 1rem auto;
    border-collapse: collapse;
    border-radius: 5px;
    box-shadow: 0 0 0 1px #073b4c;
}

table thead {
    background-color: #000000;
    color: #fff;
}

table tbody {
    background-color: aliceblue;
}

table td {
    border: 1px solid #073b4c;
    padding: 0.5rem 3.2rem;
}

@media (min-width: 768px) {
    .table {
        width: 70%;
    }
}

`;