import React from "react";
import { Row, Col } from "reactstrap";

export default class StockTrackrMultiOptSwiitch extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props) { this.render(); }
    }

    render() {
        return (
            <Row className="p-2 mx-3" style={{ borderRadius: "7px", color: "gray", maxWidth: this.props.maxWidth ?? "",
                backgroundColor: "black", justifyContent: "space-between", width: this.props.width ?? "" }}>
                {
                    this.props.availableGraphDurationOptions ? 
                    this.props.availableGraphDurationOptions.map((option, ind) => {
                        return (
                            <Col key={ind} xs={Math.ceil(12/this.props.availableGraphDurationOptions.length)-1} 
                                className="SoraSemiBold pt-1 mx-1" style={{ borderRadius: "7px", 
                                textAlign: "center", height: "30px", fontSize: "13px", cursor: "pointer",
                                color: this.props.selectedOption === option ? "white" : "gray",
                                backgroundColor: this.props.selectedOption !== option ? "rgb(10, 10, 10)" : "",
                                backgroundImage: this.props.selectedOption === option 
                                ? "linear-gradient(to bottom right, #ff5d31, #fd423a)" : ""
                            }} onClick={(e) => this.props.onClick(option)}>
                                { option }
                            </Col>
                        )
                    }) : <></>
                }
            </Row>
        )
    }
}