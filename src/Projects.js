import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import TopBar from "./layout/TopBar";
import SimpleSlider from "./SimpleSlider";
let ProjectPage = () => {
	return (
		<Box className="projects-page" style={{ backgroundColor: green[100] }}>
			<TopBar />
			<Grid container justify="center">
				<Grid item xs={12} sm={9} md={6}>
					<Card style={{ height: "60vh" }}>
						<Grid container justify="center">
							<Box style={{ height: "30vh", width: "30vw" }}>
								<SimpleSlider />
							</Box>
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProjectPage;
