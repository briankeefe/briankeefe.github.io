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

let TopBar = () => {
	return (
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
	);
};
export default TopBar;
