import React from "react";
import { Button } from "reactstrap";

export default class StockTrackrButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <>{
                this.props.isDimmedButton 
                ? (
                    <Button className="mx-3" onClick={this.props.onClick} style={{ 
                        borderRadius: "12px", fontWeight: 100, fontSize: "15px",  padding: "5px 20px 5px 20px",
                        color: "#fd423a", border: "2px #b63f2b solid", backgroundColor: "transparent" }}>
                            {this.props.children}
                    </Button>
                ) 
                : (
                <Button onClick={this.props.onClick} style={{ 
                    borderRadius: "12px", fontWeight: 500, fontSize: "15px",
                    padding: "5px 20px 5px 20px",
                    backgroundImage: `linear-gradient(to bottom right, #ff5d31, #fd423a)` }}>
                        {this.props.children}
                </Button>
                )
            }
            </>
        )
    }

}