import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './landing.scss';

import bookData from '../../shared/bookData';
import CardData from '../../shared/components/cardData/cardData';
import BookList from '../../shared/components/bookList/bookList';


export default class landingComponent extends Component {
  constructor() {
    super();
    this.state = {
      shopHeader: 'Welcome to our Public Library',
      bookData: bookData,
      selectedBookList: []
    };
  }

  bannerComponent = () => {
    return (
      <Row>
        <Col lg={12} className="banner">
          <h1 className="title">Load Share</h1>
        </Col>
      </Row>
    )
  }

  onCardTileClick = (selectedTile) => {
    const { bookData } = this.state.bookData;
    this.setState({
      selectedBookList: bookData.filter((ele, index) => ele.category === selectedTile)
    });
  }

  render () {
    return (
      <Container fluid>
        {this.bannerComponent()}
        <h2>{this.state.shopHeader}</h2>
        <div className='create-category-container'>
          <Button variant="outline-success">Create Category</Button>
        </div>
        <CardData cardData={this.state.bookData} onCardTileClick={this.onCardTileClick}/>
        {(this.state.selectedBookList).length > 0 && (
          <BookList bookList={this.state.selectedBookList} />
        )}
      </Container>
    )
  }
};