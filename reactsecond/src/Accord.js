import React, {Component} from "react"
import {Accordion, Form, Label, Button,Container, Row, Col} from 'react-bootstrap';
class Accord extends Component{
    render()
    {
        const {name, dept, gpa, buttontxt}=this.props;
        return(
            <div>
<Container>
<Row>
    <br></br>
    <br></br>
</Row>
  <Row>
    <Col xs> <div style={{width:'300px', height:'180px', align:'center', margin:'auto'}}>
                <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    The first text: <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>The second text</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
</Form>
</div></Col>
    <Col xs>
<div style={{width:'300px', height:'180px', align:'center', margin:'auto'}}>
    <br></br>
<Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Find length of the text!</Accordion.Header>
    <Accordion.Body>
    
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Reverse the text!</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Get index of the text in second text input!</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Check the existance of each element of second text in first text!</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>Shuffle the text!</Accordion.Header>
    <Accordion.Body>
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</div></Col>
  </Row>
</Container>
   

            </div>
        )
    }
}
export default Accord;
