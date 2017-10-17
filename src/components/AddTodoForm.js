import React, { Component } from 'react';

export default class AddTodoForm extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    };
  };

  render() {
    const { todos, handleSubmit } = this.props

    return (
      <section>
        <form onSubmit= { (e) => {
          e.preventDefault();
          console.log('component event')
          handleSubmit(this.state.text, todos.length);
        }
        }>
          <input type='text'
                 value={this.state.text}
                 onChange={(e) => {
                   console.log('setting component state')
                   this.setState({text: e.target.value})}}
          />
          <input type='submit'/>
        </form>
      </section>
    )
  };
};
