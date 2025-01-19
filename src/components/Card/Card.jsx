import { Heading, Paragraph } from "../UI/Typography/Typography";
import { StyledCard, CardStyle, CardGrid } from "./Card.styled";
import Global from "../Global/Global";
import Region from "../Region/Region";
import IndonesiaCard from "../Indonesia/Indonesia";

function Card(props) {
    const { data, title, subtitle, type } = props;

    return (
        <StyledCard>
            <Heading>{title}</Heading>
            <Paragraph>{subtitle}</Paragraph>
            <CardStyle>
                <CardGrid>
                    {type === "global" && data.map((item, index) => (
                        <Global key={index} global={item} />
                    ))}
                    {type === "region" && data.map((item, index) => (
                        <Region key={index} region={item} />
                    ))}
                    {type === "indonesia" && data.map((item, index) => (
                        <IndonesiaCard key={index} indonesia={item} />
                    ))}
                </CardGrid>
            </CardStyle>
        </StyledCard>
    );
}

export default Card;