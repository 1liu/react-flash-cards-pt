import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: [],
      activeCard: ''
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
  }

  setView(newView) {
    this.setState({ view: newView });
  }

  setActiveCard(index) {
    this.setState({ activeCard: this.state.cards[index] });
  }

  getView() {
    switch (this.state.view) {
      case 'create-card':
        return (
          <CreateCard addCard={this.addCard} setView={this.setView}/>
        );
      case 'review-cards':
        return <ReviewCards cards={this.state.cards} activeCard={this.state.activeCard} setActiveCard={this.setActiveCard}/>;
      case 'view-cards':
        return <ViewCards cards={this.state.cards}/>;
      default:
        return null;
    }
  }

  saveCards() {
    localStorage.setItem('flash-cards', JSON.stringify(this.state.cards));
  }

  addCard(newCard) {
    const newCards = this.state.cards.concat(newCard);

    this.setState(() => ({ cards: newCards }), this.saveCards);

  }

  render() {
    console.log('Cards From App:', this.state.cards);
    return (
      <div>
        <Nav setView={this.setView} />
        {this.getView()}
      </div>
    );
  }
}

export default App;
