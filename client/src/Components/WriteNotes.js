import React from 'react';
import axios from 'axios';

class WriteNotes extends React.Component {
  state = {
    title : "",
    text : ""
  }

  _handleTitleChange = event => this.setState({ title : event.target.value });

  _handleTextChange = event => this.setState({ text : event.target.value });

  render(){
    return (
      <div className="WriteNotes">
        <form onSubmit={async(event)=>{
          await axios({
            method : 'post',
            url : '/notes',
            data: {
              title : this.state.title,
              text : this.state.text
          }
        })
        event.preventDefault()
      }
    }>
          <input onChange={this._handleTitleChange} name="title" type="text" placeholder="Title Here"></input>
          <textarea onChange={this._handleTextChange} name="text" placeholder="Content here"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default WriteNotes;
