import { Card, Col, Row } from 'react-bootstrap';
import books from '../data/books.json';

const AllTheBooks = () => {
	console.log(books);

	return (
		<div>
			<Row id="fantasy">
				<Col>
					<p>&nbsp;</p>
					<br />
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="text-center">Fantasy books</h2>
				</Col>
			</Row>
			<Row>
				{books.fantasy.map(book => {
					return (
						<Col xs={12} md={4} key={book.asin}>
							<Card className="book-cover">
								<Card.Img variant="top" src={book.img} />
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			<Row>
				<Col>
					<h3>
						<a href="http://localhost:3000/">Torna su</a>
					</h3>
				</Col>
			</Row>
			<Row id="history">
				<Col>
					<p>&nbsp;</p>
					<br />
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="text-center">History books</h2>
				</Col>
			</Row>
			<Row>
				{books.history.map(book => {
					return (
						<Col xs={12} md={4} key={book.asin}>
							<Card className="book-cover">
								<Card.Img variant="top" src={book.img} />
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			<Row>
				<Col>
					<h3>
						<a href="http://localhost:3000/">Torna su</a>
					</h3>
				</Col>
			</Row>
			<Row id="horror">
				<Col>
					<p>&nbsp;</p>
					<br />
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="text-center">Horror books</h2>
				</Col>
			</Row>
			<Row>
				{books.horror.map(book => {
					return (
						<Col xs={12} md={4} key={book.asin}>
							<Card className="book-cover">
								<Card.Img variant="top" src={book.img} />
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			<Row>
				<Col>
					<h3>
						<a href="http://localhost:3000/">Torna su</a>
					</h3>
				</Col>
			</Row>
			<Row id="romance">
				<Col>
					<p>&nbsp;</p>
					<br />
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="text-center">Romance books</h2>
				</Col>
			</Row>
			<Row>
				{books.romance.map(book => {
					return (
						<Col xs={12} md={4} key={book.asin}>
							<Card className="book-cover">
								<Card.Img variant="top" src={book.img} />
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			<Row>
				<Col>
					<h3>
						<a href="http://localhost:3000/">Torna su</a>
					</h3>
				</Col>
			</Row>
			<Row id="scifi">
				<Col>
					<p>&nbsp;</p>
					<br />
				</Col>
			</Row>
			<Row>
				<Col>
					<h2 className="text-center">Sci-Fi books</h2>
				</Col>
			</Row>
			<Row>
				{books.scifi.map(book => {
					return (
						<Col xs={12} md={4} key={book.asin}>
							<Card className="book-cover">
								<Card.Img variant="top" src={book.img} />
								<Card.Body>
									<Card.Title>{book.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					);
				})}
			</Row>
			<Row>
				<Col>
					<h3>
						<a href="http://localhost:3000/">Torna su</a>
					</h3>
				</Col>
			</Row>
		</div>
	);
};

export default AllTheBooks;
