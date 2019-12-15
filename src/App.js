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
	Button
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import space from "./images/space.jpg";

function App() {
	return (
		<Box className="home-page" style={{ backgroundImage: `url(${space})` }}>
			<AppBar className="AppBar" position="static">
				<Toolbar style={{ flexGrow: "1" }}>
					<Box style={{ flexGrow: "1" }} />
					<Button>Github</Button>
					<Button>Social</Button>
					<Button>Projects</Button>
				</Toolbar>
			</AppBar>
			<Box className="outer">
				<Grid container justify="center">
					<Grid item xs={12}>
						<Typography className="cascadia" id="brian-keefe" variant="h2">
							Brian Keefe
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography className="cascadia" variant="h4">
							Developer
						</Typography>
					</Grid>
					<Button color="secondary" variant="contained" id="work-button">
						See Work
					</Button>
				</Grid>
			</Box>
		</Box>
	);
}

export default App;
