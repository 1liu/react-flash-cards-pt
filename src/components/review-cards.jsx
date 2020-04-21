import React from 'react';

export default class ReviewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      index: 0
    };
    this.nextCard = this.nextCard.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  nextCard() {
    this.setState({ hidden: true });
    this.setState(() => {
      if (this.state.index + 1 === this.props.cards.length) return ({ index: 0 });
      else return ({ index: this.state.index + 1 });
    }, () => { this.props.setActiveCard(this.state.index); });
  }

  previousCard() {
    this.setState({ hidden: true });
    this.setState(() => {
      if (this.state.index === 0) return ({ index: this.props.cards.length - 1 });
      else return ({ index: this.state.index - 1 });
    }, () => {
      this.props.setActiveCard(this.state.index);
    });

  }

  handleClick() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    this.props.setActiveCard(this.state.index);
  }

  render() {
    const activeCard = this.props.activeCard;
    if (activeCard === undefined) {
      return (
        <div><p>Please Add Card First</p></div>
      );
    } else {
      return (
        <div>
          <h1>Review Cards</h1>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="review-card d-flex align-items-center justify-content-center" onClick={this.handleClick}>
                <p>{this.state.hidden ? activeCard.question : activeCard.answer}</p>
              </div>
            </div>
            <i id="left" className="fas fa-chevron-left" onClick={this.previousCard}></i>
            <i id="right" className="fas fa-chevron-right" onClick={this.nextCard}></i>
          </div>
        </div>
      );
    }
  }
}
