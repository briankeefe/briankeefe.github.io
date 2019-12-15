import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import TopBar from "./layout/TopBar";
import SimpleSlider from "./SimpleSlider";
let ProjectPage = () => {
	return (
		<Box className="projects-page" style={{ backgroundColor: green[100] }}>
			<TopBar />
			<Grid container justify="center" direction="column" alignItems="center">
				<Grid item xs={12} sm={10} md={6}>
					<Card>
						<CardContent>
							<SimpleSlider />
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProjectPage;
