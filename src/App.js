import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactUs from "./components/ContactUs/ContactUs";
import Homepage from "./containers/Homepage/Homepage";
import Layout from "./containers/Layout/Layout";
import Playground from "./containers/Playground/Playground";

const App = () => {

  return (
		<BrowserRouter>
			<Layout>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path='/' component={Homepage} />
						<Route path='/contact-us' exact component={ContactUs} />
						<Route
							exact
							path='/playground'
							component={Playground}
						/>
					</Switch>
				</Suspense>
			</Layout>
		</BrowserRouter>
  );
}

export default App;