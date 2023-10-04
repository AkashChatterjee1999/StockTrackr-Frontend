import React from "react";
import { Row, Col, Container } from "reactstrap"

const tabInactiveColor = "#3e3e3e";
const tabActiveColor = "#ffffff";
const availableTabs = ["Dashboard", "OrderManagement", "stockManagement", "alertManagement", "UserManagement"]

export default class DefaultLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentOpenTab: "Dashboard"
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
                        { this.props.children }
                    </Container>
                </Col>
            </Row>
        //</Container>
        )
        
    }

}