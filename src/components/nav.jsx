import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleViewCards = this.handleViewCards.bind(this);
    this.handleReviewCards = this.handleReviewCards.bind(this);
    this.handleCreateCard = this.handleCreateCard.bind(this);
  }

  handleViewCards() {
    this.props.setView('view-cards');
  }

  handleReviewCards() {
    this.props.setView('review-cards');
  }

  handleCreateCard() {
    this.props.setView('create-card');
  }

  render() {
    return (
      <nav>
        <div onClick={this.handleViewCards}>View Cards</div>
        <div onClick={this.handleReviewCards}>Review Cards</div>
        <div onClick={this.handleCreateCard}>Create Card</div>
      </nav>
    );
  }
}
