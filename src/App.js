import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Nav from "./Nav";
import Auth from "./Auth/Auth";
import Callback from "./Callback";
import Logo from "./resources/black-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.auth = new Auth(this.props.history);
	}
	render() {
		return (
			<div>
				<Nav auth={this.auth} logo={Logo} />
				<Route
					path="/callback"
					render={(props) => <Callback auth={this.auth} {...props} />}
				/>
				<Route
					path="/"
					exact
					render={(props) => <Home auth={this.auth} {...props} />}
				/>
				<Route path="/profile" component={Profile} />
			</div>
		);
	}
}

export default App;
