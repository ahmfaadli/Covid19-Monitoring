import GlobalStyle from "./Global.styled";

function Global(props) {
  const { global } = props; // global berisi data status dan total

  return (
    <GlobalStyle status={global.status}> {/* Hanya passing status di sini */}
      <div className="status-column">
        <h3>{global.status}</h3>
        <h2>{global.total.toLocaleString()}</h2>
      </div>
    </GlobalStyle>
  );
}

export default Global;
