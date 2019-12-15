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

function App() {
	return (
		<Box className="home-page" style={{ backgroundImage: `url(${space})` }}>
			<AppBar className="AppBar" position="static">
				<Toolbar style={{ flexGrow: "1" }}>
					<Box style={{ flexGrow: "1" }} />
					<ButtonGroup id="buttons" variant="text">
						<Button>Github</Button>
						<Button>Social</Button>
						<Button>Projects</Button>
					</ButtonGroup>
				</Toolbar>
			</AppBar>
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
					<Button color="secondary" variant="contained" id="work-button">
						See Work
					</Button>
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
