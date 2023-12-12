import React, {Component} from "react"

class FirstComponent extends Component{
    render()
    {
        return(
            <div>
                <form>
             {this.props.initialText}   <input text="deneme"></input>
                <button>{this.props.buttontext}</button>
                </form>
            </div>
        )
    }
}
export default FirstComponent;
