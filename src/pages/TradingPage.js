import React from "react";
import { Row, Col, Container } from "reactstrap";
import StockTrackrButton from "../Components/StockTrackrButton";
import StockTrackrMultiOptSwiitch from "../Components/StockTrackrMultiOptSwitch";
import StockPriceGraph from "../Components/StockPriceGraph";
import StockPriceCandles from "../Components/StockPriceCandles";

export default class TradingPage extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            selectedView: "Graph View"
        }
        this.tradingView = ["Graph View", "Candle View"]
    }

    render() {
        return(
            <Col style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "20px", 
            boxShadow: "inset rgb(241 233 233 / 20%) -1px -3px 20px 0px" }} className="p-4">
                <Row style={{ justifyContent: "space-between" }}>
                    <h2 className="SoraSemibold" style={{ width: "max-content", color: "white" }}>Transact Stocks/Cryptos</h2>
                    <StockTrackrMultiOptSwiitch availableGraphDurationOptions={this.tradingView} maxWidth={"300px"}
                        selectedOption={this.state.selectedView} onClick={(option) => this.setState({ selectedView: option })} />
                </Row><br /><br/>
                <Col lg={8} className="m-auto">
                    {
                        this.state.selectedView == this.tradingView[0] 
                        ? <StockPriceGraph />
                        : <StockPriceCandles />
                    }
                </Col>
            </Col>
        )
    } 

}