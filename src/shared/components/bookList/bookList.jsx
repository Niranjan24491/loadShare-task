import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import './bookList.scss'

export default class bookList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedBook: ''
    }
  }

  onBookClick = (category) => {
    this.setState({
      selectedTile: category
    });
    // this.props.onCardTileClick(category);
  }

  renderBookList = () => {
    const cardData = this.props.bookList[0].bookList;
    console.log(cardData);
    const cardElements = cardData.map((ele, index) => {
      return (
        <Col lg={12}>
          <div
            className={`book-tile ${this.state.selectedBook === ele.name ? 'active' : ''}`}
            onClick={e => this.onBookClick(ele.name)}>
            <Row>
              <Col lg={6}>
                <h3 className="book-name">{ele.name}</h3>
                <h5 className="book-price">Price: <strong>{ele.price}</strong></h5>
              </Col>
              <Col lg={6} className='button-group'>
                <Button variant="outline-info">Edit</Button>
                <Button variant="outline-danger">Delete</Button>
              </Col>
            </Row>
          </div>
        </Col>
      );
    });
    return <Row className='book-tile-container'>
          <Col lg={12} className='create-category-container'>
            <Button variant="outline-success">Add Book</Button>
          </Col>
          {cardElements}
        </Row>
  }

  render() {
    return <div className='book-data-container'>{this.renderBookList()}</div>
  }
}