import "./style.scss";
import React from "react";
import logo from "./logo.svg";
import {
	Box,
	Typography,
	Paper,
	Grid,
	AppBar,
	Toolbar,
	Button,
	ButtonGroup
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import space from "./images/space.jpg";
import TopBar from "./layout/TopBar";
import { Link } from "react-router-dom";

function App() {
	return (
		<Box className="home-page" style={{ backgroundImage: `url(${space})` }}>
			<TopBar />
			<Box className="outer">
				<Grid container justify="center" direction="column" alignItems="center">
					<Typography className="cascadia" id="brian-keefe" variant="h2">
						Brian Keefe
					</Typography>
					<Typography className="cascadia margin-top" variant="h5">
						Junior Developer
					</Typography>
					<Typography className="cascadia" variant="p">
						Staples INC., Framingham MA
					</Typography>
					<Link className="link" to="/projects">
						<Button color="secondary" variant="contained" id="work-button">
							See Work
						</Button>
					</Link>

					<Grid item xs={10} sm={8} md={6} lg={4}>
						<Typography variant="h5" className="white-text about-text cascadia">
							"Highly motivated developer focused on ReactJS, .NET, and full
							stack solutions"
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default App;
