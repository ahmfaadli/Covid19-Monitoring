import styled, {css} from "styled-components";

const Button = styled.button`
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: poppins, sans-serif;
    text-decoration: none;

//default padding & font-size
font-size: ${(props) => props.theme.sizes.md.fontSize};
padding: ${(props) => props.theme.sizes.md.padding};

//props full
${(props) => props.full && css`
    display: block;
    width: 100%;
`}

//props size
${(props) => props.size && css`
    font-size: ${(props) => props.theme.sizes[props.size].fontSize};
    padding: ${(props) => props.theme.sizes[props.size].padding};
`}
`;
export default Button;