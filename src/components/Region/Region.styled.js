import styled from "styled-components";

const StyledRegion = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  min-height: 150px;
  background-color: #f9f9f9;


h3 {
  color: rgb(25, 3, 104);
  font-size: 1rem;
  margin-bottom: 0rem;
  text-align: center;
  min-height: 3rem;
};

p {
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

@media (min-width: 768px) {
  flex-basis: 50%;
}

@media (min-width: 992px) {
  flex-basis: 20%;
  padding: 1rem;
}
`;

export default StyledRegion;
