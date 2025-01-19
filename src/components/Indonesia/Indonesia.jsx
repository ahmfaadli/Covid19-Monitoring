
import IndonesiaStyle from "./Indonesia.styled";

function IndonesiaCard(props) {

    const {indonesia } = props

    return (
        <IndonesiaStyle status={indonesia.status}>
            <h2>{indonesia.total.toLocaleString()}</h2>
            <h3>{indonesia.status}</h3>
        </IndonesiaStyle>
    );
}

export default IndonesiaCard;