import React, {Component} from "react"
import {Button} from 'react-bootstrap';
class List extends Component{
    render()
    {
        const {name, dept, gpa, buttontxt}=this.props;
        return(
            <div>
                <ul>
                    <li>Name: {name} </li>
                    <li>Department: {dept} </li>
                    <li>GPA: {gpa} </li>
                    <li>
                    <Button variant="warning">{buttontxt}</Button>{' '}
                    </li>
                </ul>
            </div>
        )
    }
}
export default List;
