import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  background-color: #000;
  padding: 10px; 
`;

export const CardBlock = styled.div`
    border: 1px solid red;
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
`;

export const CardItem = styled.div<{ imageUrl: string }>`
    background-color: #111112;
    background-image: url(${props => props.imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    min-height: 250px;
    flex-basis: 200px;
    flex-grow: 1;
`

export const MoreButtonStyle = css`
  background-color: transparent;
  border: none;
  outline: none;
`;