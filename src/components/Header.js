import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
        <Navbar expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand >TODO LIST</Navbar.Brand>
            </Container>
        </Navbar>
    </div>
  );
}

export default Header;