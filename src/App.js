import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Task from "./components/Tasks";
import RequestsDataComponent, {RequestsDataTest} from "./noncomponents/RequestsDataComponent";
import NavApp from "./nav/NavApp";
import ScrollViewApp from "./scrollview/ScrollViewApp";
import {AxiosTest} from "./noncomponents/AxiosTest";
import NavigationComponent from "./components/NavigationComponent";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import JsonComponent from "./components/JsonComponent";
import LoginComponent from "./components/LoginComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";


function App() {
	return (
		<Router>
			<div>
				<HeaderComponent/>
				<div className="container">
					{/*<NavigationComponent/>*/}
					<JsonComponent/>

				</div>
				{/*<div className="container">*/}
				{/*	<ScrollViewApp/>*/}
				{/*<LoginComponent/>*/}
				{/*<ChangePasswordComponent/>*/}

				{/*</div>*/}
				{/*<div>*/}
				{/*	<RequestsDataComponent/>*/}
				{/*	<RequestsDataTest/>*/}
				{/*	<Task/>*/}
				{/*	<NavApp/>*/}
				{/*	<AxiosTest/>*/}
				{/*	<NavigationComponent/>*/}

				{/*</div>*/}
				<FooterComponent/>


			</div>

		</Router>

	);
}

export default App;
