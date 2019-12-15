import React from "react";
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
import { Link } from "react-router-dom";

let TopBar = () => {
	return (
		<AppBar className="AppBar" position="static">
			<Toolbar style={{ flexGrow: "1" }}>
				<Box style={{ flexGrow: "1" }} />
				<ButtonGroup id="buttons" variant="text">
					<Link className="link" to="/">
						<Button>Home</Button>
					</Link>

					<Button>Github</Button>
					<Link className="link" to="/projects">
						<Button>Projects</Button>
					</Link>
				</ButtonGroup>
			</Toolbar>
		</AppBar>
	);
};
export default TopBar;
