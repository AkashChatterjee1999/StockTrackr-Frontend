import React from "react";
import { Row, Col, Container } from "reactstrap"
import StockTrackrButton from "../Components/StockTrackrButton";
import DashboardHighlightCard from "../Components/Dashboard/DashboardHighlightCard";
import StockPriceGraph from "../Components/StockPriceGraph";
import DefaultLayout from "../layouts/DefaultLayout"

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            portfolioStats: [
                {
                    cardName: "My Balance",
                    deltaChange: 42, 
                    deltaAmount: 42369.91
                }, {
                    cardName: "Investment",
                    deltaChange: 28, 
                    deltaAmount: 20619.95
                }, {
                    cardName: "Total Gain",
                    deltaChange: 22, 
                    deltaAmount: 8664.92
                }, {
                    cardName: "Total Loss",
                    deltaChange: -20, 
                    deltaAmount: 1212.24
                },  
            ]
        }
    }

    render() {
        return (
            <Row className="px-4">
                <Col md={8}>
                    <div className="d-flex flex-column p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", 
                    borderRadius: "20px", boxShadow: "inset rgb(241 233 233 / 20%) -1px -3px 20px 0px" }}>
                        <Row style={{ justifyContent: "space-between" }}>
                            <div style={{ width: "max-content", fontWeight: "600", color: "white" }}>
                                <h3 className="SoraSemiBold">Overall Portfolio</h3>
                            </div>
                            <div className="d-flex" style={{ width: "max-content" }}>
                                <StockTrackrButton isDimmedButton={true}>Withdraw</StockTrackrButton>
                                <StockTrackrButton>Purchase</StockTrackrButton>
                            </div>
                        </Row>
                        <Row className="mt-4" style={{ justifyContent: "space-around" }}>
                            {
                                this.state.portfolioStats.map(stat => {
                                    return(
                                        <Col md={3} sm={6}>
                                            <DashboardHighlightCard cardName={stat.cardName} 
                                                deltaChange={stat.deltaChange} deltaAmount={stat.deltaAmount} />
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </div>
                    <div className="d-flex flex-column p-4 mt-3" style={{ backgroundColor: "rgba(10, 10, 10, 0.8)", 
                    borderRadius: "20px", boxShadow: "rgba(241, 233, 233, 0.2) 0px 5px 8px 0px inset" }}>
                        <Row style={{ justifyContent: "space-between" }}>
                            <div style={{ width: "max-content", fontWeight: "600", color: "white" }}>
                                <h3 className="SoraSemiBold">Overall Statistics</h3>
                            </div>
                            <div className="d-flex" style={{ width: "max-content" }}>
                                <StockTrackrButton isDimmedButton={true}>

                                </StockTrackrButton>
                            </div>
                        </Row>
                        <StockPriceGraph />
                    </div>
                </Col>
                <Col md={4} className="px-4">
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", 
                    borderRadius: "20px", height: "400px" }}></div>
                </Col>
            </Row>
        )
        
    }

}