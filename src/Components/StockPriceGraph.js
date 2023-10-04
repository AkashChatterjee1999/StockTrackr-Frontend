import React from "react";
import { Row, Col } from "reactstrap";
import Chart from 'react-apexcharts'

export default class StockPriceGraph extends React.Component {
    constructor(props) { 
        super(props) 
        this.state = { 
            availableGraphDurationOptions: [ "1M", "1W", "1D", "1Y", "5Y" ],
            selectedGraphAggreagte: "1M",
            chartData: {
                chart: {
                    id: 'apexchart-example',
                    foreColor: 'gray',
                    dropShadow: {
                        enabled: false,
                        enabledOnSeries: undefined,
                        top: 3, left: 1, blur: 14, 
                        color: '#000000', opacity: 0.9
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth', lineCap: 'butt',
                    colors: undefined, width: 5, dashArray: 0, 
                },
                xaxis: {
                    axisTicks: { show: false },  axisBorder: { show: false },
                    categories: [ "1/11", "2/11", "3/11", "4/11", "5/11", "6/11", "7/11", "8/11", "9/11", "10/11", "11/11", "12/11" ]
                },
                grid: {
                    show: true,
                    borderColor: '#2d3840',
                    strokeDashArray: 1,
                    position: 'back',
                    xaxis: { lines: { show: true } },   
                    yaxis: { lines: { show: true } },
                    row: {
                        colors: undefined, opacity: 0.2
                    },  
                    column: {
                        colors: undefined,
                        opacity: 0.2
                    },  
                    padding: {
                        top: 0, right: 25,
                        bottom: 0, left: 15
                    },  
                },
                fill: {
                    colors: undefined,
                    opacity: 0.55,
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: undefined,
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 33, 66, 100],
                        colorStops: [[
                            { offset: 37, color: '#DE3B73', opacity: 1 },
                            { offset: 30, color: '#EC4A60', opacity: 1 },
                            { offset: 76, color: '#CC1AA7',  opacity: 1 },
                            { offset: 40, color: '#E24461', opacity: 1 },
                        ]]
                    },
                }
                },
            series: [{
                name: 'series-1',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5]
            }]
        }
    }

    render() {
        return(
            <>
                <Row className="mt-3 px-3" style={{ justifyContent: "space-between" }}>
                    <Col md={5}>
                        <Row>
                            <div style={{ width: "50px", height: "50px", borderRadius: "10px", backgroundColor: "red" }}></div>
                            <div className="d-flex flex-column" style={{ width: "max-content" }}>
                                <p className="mb-1" style={{ fontWeight: 500, color: "#858585", fontSize: "13px" }}>Paypal Corporation Pvt ltd.</p>
                                <span className="d-flex" style={{ justifyContent: "space-between" }}>
                                    <h2 class="SoraBold" style={{ color: "white", fontSize: "20px", marginTop: "5px" }}>
                                        <span className="mx-1" style={{ fontWeight: "600", fontSize: "18px", color: "#858585" }}>₹</span>
                                        45,928.92
                                    </h2>
                                    <span className="SoraBold mx-2" style={{ color: "#c42829", fontSize: "11px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" 
                                        stroke="#ff453c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" 
                                        class="feather feather-chevron-down">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                        42%
                                    </span>
                                </span>
                            </div>
                        </Row>
                    </Col>
                    <Col md={5} className="my-auto">
                        <Row className="px-3 py-2" style={{ borderRadius: "7px", color: "gray",
                            backgroundColor: "black", justifyContent: "space-between" }}>
                            {
                                this.state.availableGraphDurationOptions.map(option => {
                                    return (
                                        <Col xs={2} className="SoraSemiBold pt-1" style={{ borderRadius: "7px", 
                                            textAlign: "center", height: "30px", fontSize: "13px",
                                            color: this.state.selectedGraphAggreagte === option ? "white" : "gray",
                                            backgroundColor: this.state.selectedGraphAggreagte !== option ? "rgb(10, 10, 10)" : "",
                                            backgroundImage: this.state.selectedGraphAggreagte === option 
                                            ? "linear-gradient(to bottom right, #ff5d31, #fd423a)" : ""
                                        }}>
                                            { option }
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Col>
                </Row>
                <Chart options={this.state.chartData} series={this.state.series} type="line" width={700} height={400} />
            </>
        )
    }

}