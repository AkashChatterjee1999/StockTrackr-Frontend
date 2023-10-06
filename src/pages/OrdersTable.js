import React from "react";
import { Table, Container, Row, Col } from "reactstrap";

export default class OrdersTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [{
                orderID: "AALPODDK123124A",
                assetName: "Apple Inc",
                assetType: "REGULAR", 
                volumne: 100.00,
                txnType: "DEBIT",
                txnStatus: "SUCCESS",
                txnAmount: 2134.56,
                buySellPrice: 2983.23,
                dateTime: new Date(Date.now())
            },{
                orderID: "AALPODDK123124A",
                assetName: "Apple Inc",
                assetType: "REGULAR", 
                volumne: 100.00,
                txnType: "DEBIT",
                txnStatus: "SUCCESS",
                txnAmount: 2134.56,
                buySellPrice: 2983.23,
                dateTime: new Date(Date.now())
            }]
        }
    }
    render() {
        return(
            <Container className="p-3"  style={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.9)", borderRadius: "20px" }}>
                <h2 className="SoraSemiBold">Your Orders</h2><br/>
                <Container className="overflowContainer" style={{ overflow: "scroll" }}>
                    <Table className="striped" style={{ color: "white", minWidth: "1000px", overflow: "scroll" }}>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Asset Name</th>
                            <th>Asset type</th>
                            <th>Volume</th>
                            <th>Txn Type</th>
                            <th>Txn Status</th>
                            <th>Txn Amount</th>
                            <th>Buy/Sell Price</th>
                            <th>Date & Time</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(orderData => {
                                return(
                                    <tr>
                                        <td>{orderData.orderID}</td>
                                        <td>{orderData.assetName}</td>
                                        <td>{orderData.assetType}</td>
                                        <td>{orderData.volumne}</td>
                                        <td>{orderData.txnType}</td>
                                        <td><b>{orderData.txnStatus}</b></td>
                                        <td>₹{orderData.txnAmount}</td>
                                        <td>₹{orderData.buySellPrice}</td>
                                        <td>{orderData.dateTime.toLocaleString()}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                </Container>
            </Container>
        )
    }

}