import React from "react";
import { Row, Col } from "reactstrap";
import Chart from "react-apexcharts";
import StockTrackrMultiOptSwiitch from "./StockTrackrMultiOptSwitch";

export default class StockPriceCandles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            availableGraphDurationOptions: ["1m", "30s", "10s", "5s"],
            selectedGraphDurationOption: "1m", theme: "light",
            chartData: {
                plotOptions: {
                    candlestick: {
                        colors: {
                            upward: '#55b848',
                            downward: '#ed403c'
                        },
                        wick: {
                            useFillColor: true,
                        }
                    }
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    tooltip: {
                        enabled: true,
                    }
                },
                tooltip: {
                    followCursor: false,
                    intersect: false,
                    inverseOrder: false,
                    custom: undefined,
                    fillSeriesColor: true,
                    theme: "light",
                    style: {
                        fontSize: '12px',
                        fontFamily: "SoraMedium"
                    },
                    x: {
                        show: true,
                        format: 'dd MMM',
                        formatter: undefined,
                    },
                    y: {
                        formatter: (value, { series, seriesIndex, dataPointIndex, w }) => 
                            `Open:&nbsp;&nbsp;&nbsp;$${this.state.series[seriesIndex].data[dataPointIndex][1][0]} <br/>`+ 
                            `High:&nbsp;&nbsp;&nbsp;&nbsp;$${this.state.series[seriesIndex].data[dataPointIndex][1][1]} <br/>` +
                            `Low:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$${this.state.series[seriesIndex].data[dataPointIndex][1][2]} <br/>` + 
                            `Close:&nbsp;&nbsp;$${this.state.series[seriesIndex].data[dataPointIndex][1][3]} <br/>`
                    },
                    z: {
                        formatter: undefined,
                        title: 'Size: '
                    },
                }
            },
            series: [{
                name: "",
                data: [
                    [Date.parse("2009-03-31"),[17.83,18.79,17.78,18.37,92095500,17.81]],
                    [Date.parse("2009-03-30"),[17.74,17.76,17.27,17.48,49633000,16.95]],
                    [Date.parse("2009-03-27"),[18.54,18.62,18.05,18.13,47670400,17.58]],
                    [Date.parse("2009-03-26"),[18.17,18.88,18.12,18.83,63775100,18.26]],
                    [Date.parse("2009-03-25"),[17.98,18.31,17.52,17.88,73927100,17.34]],
                    [Date.parse("2009-03-24"),[18.04,18.21,17.84,17.93,50044100,17.39]],
                    [Date.parse("2009-03-23"),[17.37,18.59,17.31,18.33,71600000,17.77]],
                    [Date.parse("2009-03-20"),[17.32,17.65,16.88,17.06,81725500,16.54]],
                    [Date.parse("2009-03-19"),[17.37,17.45,16.92,17.14,58994600,16.62]],
                    [Date.parse("2009-03-18"),[17.03,17.22,16.60,16.96,70710700,16.45]],
                    [Date.parse("2009-03-17"),[16.32,16.90,16.26,16.90,62481000,16.39]],
                    [Date.parse("2009-03-16"),[16.82,16.96,16.24,16.25,67028900,15.76]],
                    [Date.parse("2009-03-13"),[16.98,17.05,16.18,16.65,82965800,16.14]],
                    [Date.parse("2009-03-12"),[17.01,17.04,16.48,17.01,93694100,16.49]],
                    [Date.parse("2009-03-11"),[16.63,17.20,16.43,17.11,84522200,16.59]],
                    [Date.parse("2009-03-10"),[15.37,16.62,15.25,16.48,95184200,15.98]],
                    [Date.parse("2009-03-09"),[15.20,15.74,15.10,15.15,66479100,14.69]],
                    [Date.parse("2009-03-06"),[15.35,15.62,14.87,15.28,92821400,14.82]],
                    [Date.parse("2009-03-05"),[15.86,15.88,15.27,15.27,89708500,14.81]],
                    [Date.parse("2009-03-04"),[16.12,16.40,15.89,16.12,69285100,15.63]],
                    [Date.parse("2009-03-03"),[16.03,16.24,15.64,15.88,80476600,15.40]],
                    [Date.parse("2009-03-02"),[15.96,16.25,15.72,15.79,80602100,15.31]],
                    [Date.parse("2009-02-27"),[16.29,16.52,16.10,16.15,93428000,15.66]],
                    [Date.parse("2009-02-26"),[17.05,17.08,16.42,16.42,83219500,15.92]],
                    [Date.parse("2009-02-25"),[17.01,17.24,16.46,16.96,105894600,16.45]],
                    [Date.parse("2009-02-24"),[17.03,17.35,16.36,17.17,122674500,16.65]],
                    [Date.parse("2009-02-23"),[18.02,18.15,17.16,17.21,70803400,16.69]],
                    [Date.parse("2009-02-20"),[17.77,18.19,17.66,18.00,69413800,17.45]],
                    [Date.parse("2009-02-19"),[18.30,18.38,17.81,17.91,49195600,17.37]],
                    [Date.parse("2009-02-18"),[18.22,18.45,18.00,18.12,54946900,17.57]],
                    [Date.parse("2009-02-17"),[18.49,18.50,17.89,18.09,75853300,17.54]]
                ]
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
                        <StockTrackrMultiOptSwiitch availableGraphDurationOptions={this.state.availableGraphDurationOptions} width={"300px"}
                        selectedOption={this.state.selectedGraphDurationOption} onClick={(option) => this.setState({ selectedGraphDurationOption: option })} />
                    </Col>
                </Row>
                <div className="d-block m-auto" style={{ width: "max-content" }}>
                    <Chart options={this.state.chartData} series={this.state.series} type="candlestick" width={700} height={400} />
                </div>
            </>
        )
    }
}