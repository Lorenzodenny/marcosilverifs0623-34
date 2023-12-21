import { Navbar, Nav } from "react-bootstrap";

const MyNav = () => (
	<Navbar bg="dark" variant="dark" className="p-2">
		<Navbar.Brand href="http://localhost:3000/">EpiBooks</Navbar.Brand>
		<Nav className="mr-auto">
			<Nav.Link href="http://localhost:3000/">Shop</Nav.Link>
			<Nav.Link href="#fantasy">Fantasy</Nav.Link>
			<Nav.Link href="#history">History</Nav.Link>
			<Nav.Link href="#horror">Horror</Nav.Link>
			<Nav.Link href="#romance">Romance</Nav.Link>
			<Nav.Link href="#scifi">Sci-Fi</Nav.Link>
		</Nav>
	</Navbar>
);

export default MyNav;
