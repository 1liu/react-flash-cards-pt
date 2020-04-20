import React from 'react';

export default class ViewCards extends React.Component {

  render() {
    return (
      <div>
        <h1>My Cards</h1>
        <div className="row row-cols-1 row-cols-md-3">
          {
            this.props.cards.map(card => {
              return (
                <div key={card.question} className="col mb-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="question">
                        <h5 className="card-title">Question:</h5>
                        <p className="card-title">{card.question}</p>
                      </div>
                      <div className="answer">
                        <h5 className="card-text">Answer:</h5>
                        <p className="card-text">{card.answer}</p>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}
