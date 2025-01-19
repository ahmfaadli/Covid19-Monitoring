import { Heading, Paragraph } from '../UI/Typography/Typography';
import { FooterStyled } from './Footer.styled';

function Footer() {
    return (
        <FooterStyled>
            <footer>
                <Heading>Covid ID</Heading>
                <Paragraph>Created by Fadli</Paragraph>
            </footer>
        </FooterStyled>
    );
}
export default Footer;