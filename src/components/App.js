import React, {Component, useState} from "react";
import Flames from "./Flames";
import Form from "./Form";
import '../styles/App.css';

class App extends Component {
    state = {
        loveScore: undefined
      };
    
      getLoveScore = score => {
        this.setState({
          loveScore: score
        });
      };
    render() {

        return(
            <div id="main">
               <Form getLoveScore={this.getLoveScore} />
               <Flames loveScore={this.state.loveScore} />
            </div>
        )
    }
}


export default App;
