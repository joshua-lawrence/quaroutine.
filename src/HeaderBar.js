import React, { Component } from "react";

const HeaderBar = (props) => {
	return (
		<div
			className="container-fluid welcome-header"
			style={{ padding: props.height, background: props.color }}
		>
			<h1>{props.title}</h1>
		</div>
	);
};

export default HeaderBar;
