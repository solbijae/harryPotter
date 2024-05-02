import styled, { css } from "styled-components";

export const MainWrapper = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 80vh;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)) ,url(${props => props.imageUrl});
  background-size: cover;  
`;


export const MoreButtonStyle = css`
  background-color: transparent;
  border: none;
  outline: none;
`;