import React from "react";
import { Box, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import TopBar from "./layout/TopBar";
let ResumePage = () => {
	return (
		<Box className="resume-page" style={{ backgroundColor: blue[100] }}>
			<TopBar />
			<Typography>Testing</Typography>
		</Box>
	);
};

export default ResumePage;
