import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.large};
    font-weight: bold;
`;

export const NavbarList = styled.ul`
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 30px 50px 0px 0px
`;

export const ListItem = styled.li`
    
`;