import React, {Component} from "react"
import {Button} from 'react-bootstrap';
class Calculator extends Component{
    constructor(props)
    {
        super(props);
        this.state={
        result:0,
        resultEvenOdd:'none',
        resultList:'none',
        resultRandom:0,
        num1:0,
        num2:0
    }
    this.handlenum1Change=this.handlenum1Change.bind(this);
    this.handlenum2Change=this.handlenum2Change.bind(this);
    }
    handlenum1Change(evt)
    {
        this.setState({num1:Number(evt.target.value)});
    }
    handlenum2Change(evt)
    {
        this.setState({num2:Number(evt.target.value)});
    }   
    
    addAction=()=>{
        this.setState({result:this.state.num1+this.state.num2})
    }

    evenOdd=()=>{
      var rst="";
      if (this.state.num1%2==0)
      {
          rst=rst+"First Number is even";
      }
      else
      {
        rst=rst+"First Number is odd";
      }

      if (this.state.num2%2==0)
      {
          rst= rst+ ", Second number is even";
      }
      else
      {
          rst=rst + ", Second number is odd";
      }
      this.setState({resultEvenOdd:rst});
    }


    listNumbers=()=>{
       var rst="";
       var n1=this.state.num1;
       var n2=this.state.num2;
       var temp=0;
       if(n1>n2)
       {
        temp=n1;
        n1=n2;
        n2=temp;
       }

       for(temp=n1; temp<=n2; temp++)
       {
           rst=rst+"-" +temp;
       }
       this.setState({resultList:rst});
    }
    randomTry=()=>{
        var x=(Math.floor(Math.random()*100));        
        this.setState({resultRandom:x});
    }
    render()
    {
        return(
            <div className="calculator">  
<br></br>
First number: <input onChange={this.handlenum1Change}></input>
<br></br><br></br>
Second Number number: <input onChange={this.handlenum2Change}></input>
<br></br><br></br>
<input type="button" value="Calculate the sum!" onClick={this.addAction}></input>
Result: {this.state.result}
<br></br>
<br></br>
<input type="button" value="Even or odd" onClick={this.evenOdd}></input>
{this.state.resultEvenOdd}

<br></br>
<br></br>
<input type="button" value="List all numbers between given numbers" onClick={this.listNumbers}></input>
{this.state.resultList}

<br></br>
<br></br>
<input type="button" value="Random number between 0 and 100" onClick={this.randomTry}></input>
{this.state.resultRandom}


</div>
        )
    }
}
export default Calculator;
