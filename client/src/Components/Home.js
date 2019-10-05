import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  render(){
    return(
      <div>
        <nav>
          <ul>
            <li><Link to ="/">HOME</Link></li>
            <li><Link to ="/users">JOIN</Link></li>
            <li><Link to ="/notes">NOTES</Link></li>
            <li><Link to ="/drafts">WRITE DRAFT</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Home;
