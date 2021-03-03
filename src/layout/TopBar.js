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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons"

let TopBar = () => {
	return (
		<AppBar className="AppBar" position="static">
			<Toolbar style={{ flexGrow: "1" }}>
				<Box style={{ flexGrow: "1" }} />
				<ButtonGroup id="buttons" variant="text">
					<Link className="link" to="/">
						<Button>
							<FontAwesomeIcon size="2x" icon={faHome}/>
						</Button>
					</Link>
					<Link className="link" to="/about">
						<Button>
							<FontAwesomeIcon size="2x" icon={faUser}/>
						</Button>
					</Link>
					<Button href="http://www.github.com/briankeefe">
						<FontAwesomeIcon size="2x" icon={faGithub}/>
					</Button>
					<Link className="link" to="/projects">
						<Button>
							<FontAwesomeIcon size="2x" icon={faBriefcase} />
						</Button>
					</Link>
				</ButtonGroup>

			</Toolbar>
		</AppBar>
	);
};
export default TopBar;
