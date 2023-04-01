import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
  state={str1:"",
str2:"",
op:0,
opMap:{
  0: "Siblings",
  1: "Friends",
  2: "Love",
  3: "Affection",
  4: "Marriage",
  5: "Enemy"
}};
 Clear=()=>{
  this.setState({...this.state,str1:"",str2:""})
 }
 calculateRelation=()=>{
 const mapper1={};
 const mapper2={};
 const resMapper={};
 for(let i=0;i<this.state.str1.length;i++)
 {
  if(mapper1[this.state.str1[i]])
  mapper1[this.state.str1[i]] +=1;

  else
  mapper1[this.state.str1[i]]=1;
    
 }
 for(let i=0;i<this.state.str2.length;i++)
 {
  if(mapper2[this.state.str2[i]])
  mapper2[this.state.str2[i]] +=1;

  else
  mapper2[this.state.str2[i]]=1;
    
 }

 for(let i in mapper1)
 {
  if(Object.keys(mapper2).includes(i))
  {
    resMapper[i]=mapper1[i]+mapper2[i]-1;
  }
 }
 let sum = 0;

 for (let i in resMapper) {
   sum += parseInt(resMapper[i]);
 }
 console.log({ mapper1, mapper2, resMapper, sum }, sum % 6);
 this.setState({...this.state,op:sum%6})

 }
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               Str1:
               <input type='text' value={this.state.str1} data-testid="input1" onChange={(event)=>{
                this.setState({str1:event.target.value.toLocaleLowerCase()})
               }} /> <br />
               Str2:
                <input type='text' value={this.state.str2} data-testid="input2" onChange={(event)=>{
                this.setState({str2:event.target.value.toLocaleLowerCase()})
              }} />
              <button data-testid="calculate_relationship" onClick={this.calculateRelation}>Calculate Relationship Future</button>
               <h3>{this.state.opMap[this.state.op]}</h3>
              <button data-testid="clear" onClick={this.Clear}>Clear</button>
            </div>
        )
    }
}


export default App;