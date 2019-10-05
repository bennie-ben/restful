import React from 'react';
import Note from "./Note";
import axios from 'axios';

class GetNotes extends React.Component{
  state = {
    notes : []
  }
  async componentDidMount(){
    await axios({ method : 'get', url : '/notes' })
      .then(res=>{
        const {
          data:{notes}
        } = res;
        this.setState({notes});
      })
      .catch(error=>console.log(error));
  }

  render(){
    return(
      <div className = "GetNotes">
        <Note notes={this.state.notes}/>
      </div>
    );
  }
}

export default GetNotes;