import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.index);
  }

  render() {
    return (
      <div className="col mb-4">
        <div className="card">
          <div className="card-body">
            <div className="question">
              <h5 className="card-title">Question:</h5>
              <p className="card-title">{this.props.card.question}</p>
            </div>
            <div className="answer">
              <h5 className="card-text">Answer:</h5>
              <p className="card-text">{this.props.card.answer}</p>
            </div>
          </div>
          <div className="card-footer text-muted d-flex justify-content-center">
            <i className="fas fa-trash-alt text-center" onClick={this.onDelete}></i>
          </div>
        </div>
      </div>
    );
  }
}
