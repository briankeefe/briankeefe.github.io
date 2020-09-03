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

let TerpTimer = () => (
    <Box px={5} style={{backgroundColor: green[300], height: "100vh"}}>
		<Box style={{paddingTop: "20%"}}>
			<Card>
				<Box p={3}>
					<Typography variant="h3">TerpTimer Privacy Policy</Typography>
					<Typography>We don't collect any data, and thus have no policy to handle imaginary data! Enjoy!</Typography>
				</Box>
			</Card>
		</Box>
    </Box>
)

export default TerpTimer;