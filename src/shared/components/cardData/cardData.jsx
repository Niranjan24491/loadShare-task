import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './cardData.scss'

export default class cardData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTile: ''
    }
  }

  onCardClick = (category) => {
    this.setState({
      selectedTile: category
    });
    this.props.onCardTileClick(category);
  }

  renderCardData = () => {
    const cardData = this.props.cardData.bookData;
    const cardElements = cardData.map((ele, index) => {
      return (
        <Col lg={12 / cardData.length}>
          <div
            className={`card-tile ${this.state.selectedTile === ele.category ? 'active' : ''}`}
            onClick={e => this.onCardClick(ele.category)}>
            <h3>{ele.category}</h3>
            <h5>Available books count: <strong>{ele.bookList.length}</strong></h5>
          </div>
        </Col>
      );
    });
    return <Row className='card-tile-container'>{cardElements}</Row>
  }

  render () {
    return <div className='card-data-container'>{this.renderCardData()}</div>
  }
}
