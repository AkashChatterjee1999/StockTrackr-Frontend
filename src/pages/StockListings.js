import React, { Component } from "react";
import StockTrackrButton from "../Components/StockTrackrButton";
import { Row, Col, Container } from "reactstrap";
import CustomListingTable from "../Components/StockListings/CustomListingTable";

export default class StockListings extends React.Component {

    constructor(props){ 
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Col style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "20px", 
            boxShadow: "inset rgb(241 233 233 / 20%) -1px -3px 20px 0px" }} className="p-4">
                <Row style={{ justifyContent: "space-between" }}>
                    <h2 className="SoraSemibold" style={{ width: "max-content", color: "white" }}>Diversity Pricing</h2>
                    <div className="d-flex mb-5" style={{ width: "max-content" }}>
                        <StockTrackrButton>Subscribe</StockTrackrButton>
                    </div>
                </Row>
                <Row>
                    <Col md={6}>
                        <h5 className="SoraRegular" style={{ color: "white" }}>Regular Stocks</h5>
                        <CustomListingTable />
                    </Col>
                    <Col md={6}>
                        <h5 className="SoraRegular" style={{ color: "white" }}>Crypto Exchanges</h5>
                        <CustomListingTable />
                    </Col>
                </Row>
            </Col>
        )
    }

}