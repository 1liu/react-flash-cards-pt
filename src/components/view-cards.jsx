import React from 'react';
import Card from './card';
export default class ViewCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      index: 0
    };
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(index) {
    this.props.onDelete(index);
  }

  render() {
    return (
      <div>
        <h1>My Cards</h1>
        <div className="row row-cols-1 row-cols-md-3">
          {
            this.props.cards.map((card, index) => {
              return (
                <Card key={index} index={index} card={card} onDelete={this.onDelete}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}
