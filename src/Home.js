import React, { Component } from "react";
import HeaderBar from "./HeaderBar";

class Home extends Component {
	render() {
		return (
			<div className="Home">
				{this.props.auth.isAuthenticated() ? (
					<>
						<HeaderBar
							height="50px"
							color="#6da34d"
							title="Welcome to Quaroutine"
						/>
					</>
				) : (
					<></>
				)}
			</div>
		);
	}
}

export default Home;
