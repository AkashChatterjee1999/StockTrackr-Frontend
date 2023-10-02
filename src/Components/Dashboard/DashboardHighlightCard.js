import React from "react";

export default class DashboardHighlightCard extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div className="SoraRegular" style={{ backgroundColor: "transparent", maxWidth: "150px" }}>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <p className="mb-1" style={{ fontWeight: 500, color: "#858585", fontSize: "13px" }}>{this.props.cardName}</p>
                    {
                        this.props.deltaChange >= 0
                        ? (
                        <span className="SoraBold" style={{ color: "#0ca97e", fontSize: "13px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" 
                            fill="none" stroke="#0ca97e" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" 
                            class="feather feather-chevron-up">
                                <polyline points="18 15 12 9 6 15"></polyline>
                            </svg>
                            {this.props.deltaChange + "%"}
                        </span>) 
                        : (<span className="SoraBold" style={{ color: "#c42829", fontSize: "13px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" 
                            stroke="#ff453c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" 
                            class="feather feather-chevron-down">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                            {this.props.deltaChange + "%"}
                        </span>)
                    }
                </div>
                <h2 style={{ color: "white", fontSize: "25px", marginTop: "5px" }}>
                    <span className="mx-1" style={{ fontWeight: "600", fontSize: "18px", color: "#858585" }}>₹</span>
                    {parseFloat(this.props.deltaAmount).toLocaleString("en-IN")}
                </h2>
            </div>
        )
    }

}