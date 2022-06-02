import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import NavigationComponent from "./components/NavigationComponent";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import RequestsLogComponent from "./components/RequestsLogComponent";
import LoginComponent from "./components/LoginComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import Profile from "./components/profile";


function App() {
	return (
		<Router>
			<div>
				<HeaderComponent/>
				<div className="container">
					<NavigationComponent/>
				</div>
				{/*<div className="container">*/}

				{/*</div>*/}


				{/*</div>*/}
				<FooterComponent/>


			</div>

		</Router>

	);
}

export default App;
