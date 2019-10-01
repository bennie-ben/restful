import React from 'react';
import WriteNotes from "./Components/WriteNotes";

class App extends React.Component{
  render(){
    return(
      <div className = "App">
        <WriteNotes/>
      </div>
    );
  }
}

export default App;