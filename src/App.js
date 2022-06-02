import './App.css';
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import NavigationComponent from "./components/NavigationComponent";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import JsonComponent from "./components/JsonComponent";
import LoginComponent from "./components/LoginComponent";
import ChangePasswordComponent from "./components/ChangePasswordComponent";
import Profile from "./components/profile/profile";


function App() {
	return (
		<Router>
			<div>
				<HeaderComponent/>
				<div className="container">
					{/*<NavigationComponent/>*/}
					{/*<JsonComponent/>*/}
					<Profile/>

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
