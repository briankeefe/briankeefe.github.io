import React from "react";
import logo from "./logo.svg";
import { Box, Typography, Paper } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import "style.scss";

function App() {
	return (
		<Box className="home-page" style={{ backgroundColor: blue[100] }}>
			<Paper></Paper>
		</Box>
	);
}

export default App;
