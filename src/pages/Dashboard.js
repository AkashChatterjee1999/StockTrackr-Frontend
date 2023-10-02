import React from "react";
import { Row, Col, Container } from "reactstrap"
import StockTrackrButton from "../Components/StockTrackrButton";
import DashboardHighlightCard from "../Components/Dashboard/DashboardHighlightCard";
import StockPriceGraph from "../Components/StockPriceGraph";

const tabInactiveColor = "#3e3e3e";
const tabActiveColor = "#ffffff";
const availableTabs = ["Dashboard", "OrderManagement", "stockManagement", "alertManagement", "UserManagement"]

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentOpenTab: "Dashboard",
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
        //<Container className="m-0">
            <Row className="m-0 p-0" style={{ 
                backgroundColor: "black", backgroundPosition: "center top", backgroundRepeat: "no-repeat", backgroundSize: "100vw 25vh",
                backgroundImage:  `url("${process.env.PUBLIC_URL}/assets/images/dashboardBackgroundHQ.png")`, overflowX: "hidden" }}>
                <Col xs={1} className="p-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", height: "100vh", maxWidth: "80px" }}>
                    <img className="mt-3 mx-auto d-block" src={`${process.env.PUBLIC_URL + "/assets/images/brand-img.svg"}`} />
                    <Col style={{ marginTop: "20vh" }}>
                        <div className="p-1 my-3 d-block mx-auto" style={{ width: "max-content" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 24 24" fill="none" 
                                stroke={this.state.currentOpenTab === availableTabs[0] ? tabActiveColor : tabInactiveColor }
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                        </div>
                        <div className="p-1 my-3 d-block mx-auto" style={{ width: "max-content" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 24 24" fill="none" 
                                stroke={this.state.currentOpenTab === availableTabs[1] ? tabActiveColor : tabInactiveColor } 
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart">
                                <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                            </svg>
                        </div>
                        <div className="p-1 my-3 d-block mx-auto" style={{ width: "max-content" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 24 24" fill="none" 
                            stroke={this.state.currentOpenTab === availableTabs[2] ? tabActiveColor : tabInactiveColor }
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart">
                                <line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line>
                                <line x1="6" y1="20" x2="6" y2="16"></line>
                            </svg>
                        </div>
                        <div className="p-1 my-3 d-block mx-auto" style={{ width: "max-content" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 24 24" fill="none" 
                            stroke={this.state.currentOpenTab === availableTabs[3] ? tabActiveColor : tabInactiveColor }
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <div className="p-1 my-3 d-block mx-auto" style={{ width: "max-content" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="32" viewBox="0 0 24 24" fill="none" 
                                stroke={this.state.currentOpenTab === availableTabs[4] ? tabActiveColor : tabInactiveColor }
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                    </Col>
                </Col>
                <Col xs={11} className="px-3 py-3 mx-auto">
                    <Row className="px-3" style={{ justifyContent: "space-between" }}>
                        <div className="d-flex my-4" style={{ width: "max-content", }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock my-auto">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <p className="mx-3 my-auto" style={{ color: "#faf6f6", fontSize: "13.5px" }}>Sunday, 2 Oct 2023</p>
                        </div>
                        <div className="d-flex my-4" style={{ width: "max-content" }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: "20px", backgroundColor: "red" }}></div>
                            <div className="d-flex flex-column" style={{ width: "max-content" }}>
                                <p className="mx-3 my-auto" style={{ fontWeight: "500", color: "#faf6f6", fontSize: "13.5px" }}>Akash Chatterjee</p>
                                <p className="mx-3 my-auto" style={{ fontWeight: "100", color: "#faf6f6", fontSize: "13.5px" }}>akashchatterjee1000@gmail.com</p>
                            </div>
                        </div>
                    </Row>
                    <Container>
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
                    </Container>
                </Col>
            </Row>
        //</Container>
        )
        
    }

}