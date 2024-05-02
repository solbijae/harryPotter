import { 
    NavbarWrapper,
    NavbarList,
    ListItem 
} from './styles';

const Navbar = () => {
    return (
        <>
            <NavbarWrapper>
                <NavbarList>
                    <ListItem><a href="">character</a></ListItem>
                    <ListItem><a href="">spell</a></ListItem>
                </NavbarList>
            </NavbarWrapper>
        </>
    );
}

export default Navbar;