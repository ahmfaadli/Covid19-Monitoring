import StyledRegion from './Region.styled';

function Region(props) {
  const { region } = props;

  return (
    <StyledRegion>
      <h2>{region.name}</h2>
      <p>Confirmed: {region.numbers.confirmed.toLocaleString()}</p>
      <p>Recovered: {region.numbers.recovered.toLocaleString()}</p>
      <p>Deaths: {region.numbers.death.toLocaleString()}</p>
    </StyledRegion>
  );
}

export default Region;