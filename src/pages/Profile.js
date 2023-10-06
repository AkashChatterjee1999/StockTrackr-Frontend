import React from "react";
import { Form, Row, Col, Input, InputGroup, Label, Container } from "reactstrap";

export default class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <Container style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "20px", color: "white", 
            boxShadow: "inset rgb(241 233 233 / 20%) -1px -3px 20px 0px" }} className="p-4">
                <h2 className="SoraBold">Profile Updation</h2>
                <br/><br/>
                <Form>
                    <Row className="SoraThin">
                        <Col md={3} sm={6}>
                            <InputGroup className="my-2">
                                <Label htmlFor="nameInput">Name</Label>
                                <Input className="mx-3" name="nameInput" type="text" minLength={3} />
                            </InputGroup>
                            <InputGroup className="my-2">
                                <Label htmlFor="addressInput">Address</Label>
                                <Input className="mx-3" name="addressInput" type="text" minLength={3} />
                            </InputGroup>
                        </Col>
                        <Col md={3} sm={6}>
                            <InputGroup className="my-2">
                                <Label htmlFor="phoneNoInput">Phone No</Label>
                                <Input className="mx-3" name="phoneNoInput" type="text" minLength={3} />
                            </InputGroup>
                            <InputGroup className="my-2">
                                <Label htmlFor="emailInput">Email</Label>
                                <Input className="mx-3" name="emailInput" type="text" minLength={3} />
                            </InputGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}