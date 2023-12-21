import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';
import books from '../data/books.json';

class BookList extends React.Component {
	state = { searchQuery: '' };
    
	render() {
		return (
			<>
				<Row>
					<Col>
						<Form.Group>
							<Form.Label>Cerca un libro</Form.Label>
							<Form.Control
								type="text"
								placeholder="Scrivi un titolo o parte di esso"
								value={this.state.searchQuery}
								onChange={e => {
									this.setState({
										searchQuery: e.target.value.toLowerCase(),
									});
								}}
							/>
						</Form.Group>
					</Col>
				</Row>
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
					{books.fantasy
						.filter(book =>
							book.title
								.toLowerCase()
								.includes(this.state.searchQuery)
						)
						.map(book => (
							<Col xs={12} md={4} key={book.asin}>
								<SingleBook book={book} />
							</Col>
						))}
				</Row>
				<Row>
					<Col>
						<h3>
							<a href="#">Torna su</a>
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
					{books.history
						.filter(book =>
							book.title
								.toLowerCase()
								.includes(this.state.searchQuery)
						)
						.map(book => (
							<Col xs={12} md={4} key={book.asin}>
								<SingleBook book={book} />
							</Col>
						))}
				</Row>
				<Row>
					<Col>
						<h3>
							<a href="#">Torna su</a>
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
					{books.horror
						.filter(book =>
							book.title
								.toLowerCase()
								.includes(this.state.searchQuery)
						)
						.map(book => (
							<Col xs={12} md={4} key={book.asin}>
								<SingleBook book={book} />
							</Col>
						))}
				</Row>
				<Row>
					<Col>
						<h3>
							<a href="#">Torna su</a>
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
					{books.romance
						.filter(book =>
							book.title
								.toLowerCase()
								.includes(this.state.searchQuery)
						)
						.map(book => (
							<Col xs={12} md={4} key={book.asin}>
								<SingleBook book={book} />
							</Col>
						))}
				</Row>
				<Row>
					<Col>
						<h3>
							<a href="#">Torna su</a>
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
						<h2 className="text-center">Sci-fi books</h2>
					</Col>
				</Row>
				<Row>
					{books.scifi
						.filter(book =>
							book.title
								.toLowerCase()
								.includes(this.state.searchQuery)
						)
						.map(book => (
							<Col xs={12} md={4} key={book.asin}>
								<SingleBook book={book} />
							</Col>
						))}
				</Row>
				<Row>
					<Col>
						<h3>
							<a href="#">Torna su</a>
						</h3>
					</Col>
				</Row>
			</>
		);
	}
}

export default BookList;
