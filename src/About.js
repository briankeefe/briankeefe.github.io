import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import TopBar from "./layout/TopBar";
import internships from "./content/internships";
import Profile from "./images/Burger.jpg";
import colors from "./content/colors";
let AboutPage = () => {
	return (
		<Box className="about-page" style={{ backgroundColor: `${colors.light}` }}>
			<TopBar />
			<Box p={2}>
				<Grid container spacing={2} justify="flex-end">
					<Grid item xs={12}>
						<Typography
							className="cascadia"
							style={{ textAlign: "center" }}
							variant="h4"
						>
							About me
						</Typography>
					</Grid>
					<Grid item xs={12} md={4}>
						<Card>
							<CardContent>
								<Typography variant="h5">Education</Typography>
								<Typography variant="body1">
									University of Massachusetts Amherst
								</Typography>
								<Typography variant="body1">Graduated 2020</Typography>
							</CardContent>
						</Card>
						<Box style={{ width: 'inherit', overflow: 'hidden' }}>
							<Card style={{
								marginTop: "16px",
								width: 'inherit',
								float: 'right'
							}}>
								<Box
									style={{
										height: "400px",
										width: "inherit",
										float: "right",
										overflow: 'hidden',
									}}
								>
									<img
										style={{ height: "inherit", width: "inherit" }}
										src={Profile}
									/>
								</Box>
							</Card>
						</Box>
					</Grid>
					<Grid item xs={12} md={8}>
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
