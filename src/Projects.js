import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import TopBar from "./layout/TopBar";
import SimpleSlider from "./SimpleSlider";

let projectNames = ["Flashcards", "Snowday", "Sample Coding"];

let ProjectPage = () => {
	return (
		<Box className="projects-page" style={{ backgroundColor: green[100] }}>
			<TopBar />
			<Grid container justify="center" direction="column" alignItems="center">
				{projectNames.map(e => {
					return (
						<Grid item xs={12} sm={9} md={6}>
							<Card style={{ height: "60vh" }}>
								<Grid container justify="center">
									<Typography variant="h5">{e}</Typography>
								</Grid>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default ProjectPage;
