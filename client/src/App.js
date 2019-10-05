import React from 'react';
import Routers from "./Router";
import GlobalStyles from "./GlobalStyles";


class App extends React.Component{
  render(){
    return(
      <div className = "App">
        <GlobalStyles/>
        <Routers/>
      </div>
    );
  }
}

export default App;