import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, HashRouter as Router } from "react-router-dom";
import CopyApp from "./CopyApp.js";
import Projects from "./Projects.js";
import About from "./About.js";
const routing = (
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
		</Switch>
	</Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
