import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import TopBar from "./layout/TopBar";
import internships from "./content/internships";
let AboutPage = () => {
	return (
		<Box className="about-page" style={{ backgroundColor: blue[50] }}>
			<TopBar />
			<Box p={2}>
				<Grid container spacing={2} justify="center">
					<Grid item xs={12}>
						<Typography
							className="cascadia"
							style={{ textAlign: "center" }}
							variant="h4"
						>
							About me
						</Typography>
					</Grid>
					<Grid item xs={4}>
						<Card>
							<CardContent>
								<Typography variant="h5">Education</Typography>
								<Typography variant="body1">
									University of Massachusetts Amherst
								</Typography>
								<Typography variant="body1">Graduating Class: 2020</Typography>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={8}>
						<Card>
							<CardContent>
								<Typography variant="h5"> Professional Experience</Typography>
								{internships.map(e => {
									return (
										<Box>
											<Typography variant="p">
												<b>{e.name}</b>
											</Typography>
											<Typography variant="p"> - {e.position}</Typography>
											<Typography display="block" variant="p">
												{e.desc}
											</Typography>
											<Box mb={2} />
										</Box>
									);
								})}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default AboutPage;
