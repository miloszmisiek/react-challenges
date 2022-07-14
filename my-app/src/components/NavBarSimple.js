import React from "react"
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Hello, guest!",
            logging: "log in"
        }
    }
    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous state: ", prevState);
            console.log("Previous props:", prevProps);
            return {
                name: prevState.name === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                logging: prevState.logging === "log in" ? "log out" : "log in"
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.name}</span>
                    <button onClick={() => this.handleClick()}>{this.state.logging}</button>
                </div>
            </div >
        );
    }
}

export default NavBarSimple;