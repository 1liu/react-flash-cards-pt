import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  delete() {
    this.props.delete(this.props.index);
  }

  cancel() {
    this.props.cancel();
  }

  render() {
    const activeCard = this.props.activeCard;
    if (activeCard === undefined) {
      return (
        <div className="d-none"><p>This is my modal</p></div>
      );
    } else {
      return (
        <div id="myModal" className={this.props.on ? 'modal d-block' : 'modal d-none'}>
          <div className="modal-content d-flex justify-content-center">
            <h5>Are you sure you want to delete this card?</h5>
            <p><span className="font-weight-bold">Q: </span>{this.props.activeCard.question}</p>
            <p><span className="font-weight-bold">A: </span>{this.props.activeCard.answer}</p>
          </div>
          <div className="button row">
            <div className="ml-3">
              <button type="reset" className="btn btn-light" onClick={this.cancel}>Cancel</button>
            </div>
            <div className="ml-3">
              <button type="submit" className="btn btn-success" onClick={this.delete}>Confirm</button>
            </div>
          </div>
        </div>
      );

    }
  }
}
