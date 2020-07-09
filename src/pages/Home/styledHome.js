import styled from 'styled-components';

export const Image = styled.img ` 
    margin: 0 auto;
    width: 100%;
    height: 40%;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const Paragraph = styled.p `
    padding: 20px 5px;
    line-height: 20px;
    font-weight: 300;
    font-size: 20px;
`;

export const Display = styled.h1 `
    margin-top: 30px;
    text-align: center;    
`;

export const SubTopics = styled.div `
    background: #DCDCDC;
    margin-top: 15px;
    padding: 10px;
    height: 100%;
    width:100%;

    display: grid;
    grid-gap: 15px;
    grid-template-columns: auto auto;
    grid-template-rows: repeat(3, 40vh);

`;

export const LocImage = styled(Image) `
    margin-top: 10px;
    width: 20%;
    height: 50%;
`;

export const DisplySub = styled(Display) `
    margin-top: 5px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.05em;
`;

export const ParagraphSub = styled.p `
    text-align: center;
    margin-top: 3px;
    font-size: 19px;
    font-weight: 300;
    letter-spacing: -0.05em;
`;