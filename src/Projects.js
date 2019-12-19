import React from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	Grid,
	Paper,
	Button,
	CardActions
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import TopBar from "./layout/TopBar";
import SimpleSlider from "./SimpleSlider";
import ProjectContent from "./content/projectContent";
import { Link } from "react-router-dom";

let ProjectPage = () => {
	return (
		<Box className="projects-page" style={{ backgroundColor: green[100] }}>
			<TopBar />
			{ProjectContent.map(e => {
				return (
					<Grid container justify="center">
						<Grid item xs={12} md={6}>
							<Card style={{ display: "relative" }} className="project-card">
								<CardContent className="card-content" className="box">
									<Box pr={4}>
										<Typography
											className="card-title"
											className="cascadia"
											variant="h4"
										>
											{e.name}
										</Typography>
										<Typography style={{ marginTop: "8px" }} variant="body1">
											Technology Used: <b>{e.tech}</b>
										</Typography>
										<Box mt={1} />
										<Typography variant="p">{e.desc}</Typography>
									</Box>
								</CardContent>
								<CardActions className="card-actions">
									<Box style={{ flexGrow: 1, overflow: "hidden" }}>
										<Button
											variant="contained"
											color="primary"
											className="src-button"
											href={e.link}
										>
											Source Code
										</Button>
									</Box>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				);
			})}
		</Box>
	);
};

export default ProjectPage;
