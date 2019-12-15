import React from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	Grid,
	Paper
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import TopBar from "./layout/TopBar";
import SimpleSlider from "./SimpleSlider";

let projectNames = ["Flashcards", "Snowday", "Sample Coding"];

let ProjectPage = () => {
	return (
		<Box className="projects-page" style={{ backgroundColor: green[100] }}>
			<TopBar />
			{projectNames.map(e => {
				return (
					<Grid container justify="center">
						<Grid item xs={12} md={6}>
							<Paper className="project-card">
								<Box className="box">
									<Grid container justify="center">
										<Typography variant="h5">{e}</Typography>
									</Grid>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				);
			})}
		</Box>
	);
};

export default ProjectPage;
