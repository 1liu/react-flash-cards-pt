import React from 'react';

export default class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
    this.handleQuestionChange = this.handleQuestionChange.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleQuestionChange(event) {
    this.setState({
      question: event.target.value
    });
  }

  handleAnswerChange(event) {
    this.setState({
      answer: event.target.value
    });
  }

  handleSave(event) {
    event.preventDefault();
    const newCard = this.state;
    this.props.addCard(newCard);
    this.reset();
  }

  reset() {
    this.setState({
      question: '',
      answer: ''
    });
    this.props.setView('view-cards');
  }

  render() {
    return (
      <form className="gradeForm col-sm-4" onSubmit={this.handleSave}>
        <div>
          <h3 className="formTitle">Create New Card</h3>
        </div>
        <div className="row">
          <div className="mb-3">
            <div>Question:</div>
            <textarea type="text" id="question" name="question" rows="4" cols="50" value={this.state.question} placeholder="" size="30" onChange={this.handleQuestionChange} />
          </div>
          <div className="mb-3">
            <div>Answer:</div>
            <textarea type="text" id="answer" name="answer" rows="4" cols="50" value={this.state.answer} placeholder="" size="30" onChange={this.handleAnswerChange} />
          </div>
          <div className="button row">
            <div className="ml-3">
              <button id="cancelButton" type="reset" className="btn btn-light" onClick={this.reset}>Cancel</button>
            </div>
            <div className="ml-3">
              <button id="addButton" type="submit" className="btn btn-success">Save</button>
            </div>

          </div>
        </div>
      </form>

    );
  }
}
