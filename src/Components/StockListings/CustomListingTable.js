import React from "react";
import { Row, Col, Container } from "reactstrap";

export default class CustomListingTable extends React.Component {

    rows = [{

    }];
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { companyName: "Apple Inc", stockPrice: "2456.87", deltaChange: 23.1 },
                { companyName: "Amazon India pvt Ltd.", stockPrice: "1415.47", deltaChange: -18.1 },
                { companyName: "Alphabet Inc", stockPrice: "1734.34", deltaChange: -34.1 },
                { companyName: "JP Morgan & Chase", stockPrice: "2512.35", deltaChange: 15.1 },
                { companyName: "Apple Inc", stockPrice: "2456.87", deltaChange: 23.1 },
                { companyName: "Amazon India pvt Ltd.", stockPrice: "1415.47", deltaChange: -18.1 },
                { companyName: "Alphabet Inc", stockPrice: "1734.34", deltaChange: -34.1 },
                { companyName: "JP Morgan & Chase", stockPrice: "2512.35", deltaChange: 15.1 },
                { companyName: "Alphabet Inc", stockPrice: "1734.34", deltaChange: -34.1 },
                { companyName: "JP Morgan & Chase", stockPrice: "2512.35", deltaChange: 15.1 },
                { companyName: "Apple Inc", stockPrice: "2456.87", deltaChange: 23.1 },
                { companyName: "Amazon India pvt Ltd.", stockPrice: "1415.47", deltaChange: -18.1 },
            ]
        }
    }

    render() {
        return(
            <table className="px-2 mx-3 d-flex" style={{ color: "white" }}>
                <tbody className="SoraRegular" style={{ width: "-webkit-fill-available" }}>
                    {
                        this.state.data.map(data => { 
                            return (
                                <tr className="my-3" style={{ height: "60px", width: "10%", borderBottom: "1px solid #2b2b2b" }}>
                                    <td className="mx-3" style={{ width: "50px" }}>
                                        <div style={{ height: "38px", width: "38px", borderRadius: "19px", backgroundColor: "red" }}></div>
                                    </td>
                                    <td className="mx-3" style={{ width: "60%" }}>
                                        <p className="m-auto" style={{ width: "max-content" }}>{ data.companyName }</p>
                                    </td>
                                    <td className="SoraSemiBold mx-3" style={{ width: "10%" }}>
                                        <p className="m-auto" style={{ width: "max-content" }}>₹{ data.stockPrice }</p>
                                    </td>
                                    <td className="SoraSemiBold" style={{ width: "20%" }}>
                                        {
                                            data.deltaChange >= 0
                                            ? ( <span className="SoraBold d-block m-auto" style={{ color: "#0ca97e", fontSize: "16px", width: "max-content" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
                                                fill="none" stroke="#0ca97e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" 
                                                class="feather feather-chevron-up mx-1">
                                                    <polyline points="18 15 12 9 6 15"></polyline>
                                                </svg>
                                                {data.deltaChange}%
                                            </span>)
                                            : (
                                            <span className="SoraBold d-block m-auto" style={{ color: "#c42829", fontSize: "16px", width: "max-content" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" 
                                                stroke="#ff453c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" 
                                                class="feather feather-chevron-down mx-1">
                                                    <polyline points="6 9 12 15 18 9"></polyline>
                                                </svg>
                                                { Math.abs(data.deltaChange) }%
                                            </span>
                                            )
                                        }
                                    </td>
                                    <td className="SoraSemiBold mx-3" style={{ width: "10%" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                        class="feather feather-plus-circle d-block m-auto">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        )
    }

}