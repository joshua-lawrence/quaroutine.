import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<nav>
				<div className="container">
					<ul>
						<li>
							<Link to="/">
								<img
									src={this.props.logo}
									alt="Logo"
									style={{ width: "200px" }}
								/>
							</Link>
						</li>
						<div className="right-align">
							{this.props.auth.isAuthenticated() ? (
								<>
									<li>
										<Link to="/profile">
											<span>View Profile</span>
										</Link>
									</li>
									<li>
										<button
											onClick={this.props.auth.logout}
											className="btn btn-dark"
										>
											Log Out
										</button>
									</li>
								</>
							) : (
								<button
									onClick={this.props.auth.login}
									className="btn btn-dark"
								>
									Log In
								</button>
							)}
						</div>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
