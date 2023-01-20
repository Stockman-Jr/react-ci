import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: ''
         
      }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

  render() {
    return (
      <div>
        <h2>Please fill out the form</h2>
        <form>
            <div>
                <label htmlFor="id-name">Your name:</label>
                <input
                value={this.state.name} 
                onChange={this.handleNameChange}
                id="id-name" 
                name="name" 
                type="text" 
                />
            </div>
            <div>
                <label htmlFor="id-category">Query category</label>
                <select id="id-category" name="category">
                    <option value="website">Website Issue</option>
                    <option value="order">Order Issue</option>
                    <option value="general">General Inquiry</option>

                </select>
            </div>
            <div>
            <label htmlFor="id-comments">Comments:</label>
            <textarea id="id-comments" name="comments" />
            </div>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default ControlledForm