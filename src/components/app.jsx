import React from 'react';
import ViewCards from './view-cards';
import ReviewCards from './review-cards';
import CreateCard from './create-card';
import Nav from './nav';
import Modal from './modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'view-cards',
      cards: [],
      activeCard: '',
      index: '',
      modalOn: false
    };
    this.setView = this.setView.bind(this);
    this.getView = this.getView.bind(this);
    this.saveCards = this.saveCards.bind(this);
    this.addCard = this.addCard.bind(this);
    this.setActiveCard = this.setActiveCard.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.delete = this.delete.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  setView(newView) {
    this.setState({ view: newView });
  }

  setActiveCard(index) {
    this.setState({
      index: index,
      activeCard: this.state.cards[index]
    });
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
        return <ViewCards cards={this.state.cards} setActiveCard={this.setActiveCard} onDelete={this.onDelete}/>;
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

  onDelete(index) { // toogle modal => click modal confirm to call real delete func
    this.setActiveCard(index);
    this.setState({ modalOn: true });

  }

  delete(index) {
    const newCards = this.state.cards.slice();
    newCards.splice(index, 1);
    this.setState({
      cards: newCards,
      modalOn: false
    });

  }

  cancel() {
    this.setState({ modalOn: false });
  }

  render() {
    return (
      <div>
        <Nav setView={this.setView} />
        {this.getView()}
        <Modal on={!!this.state.modalOn} activeCard={this.state.activeCard} cancel={this.cancel} delete={this.delete} index={this.state.index}/>
      </div>
    );
  }
}

export default App;
