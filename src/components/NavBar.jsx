import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(props) {
    return (
        <Navbar sticky='top' expand="lg">
            <Container>
                <Navbar.Brand href="#home" >Sithum Dilshan</Navbar.Brand>
                <Nav className="me-auto m-lg-1 m-sm-2" >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#sklls">Skills</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}