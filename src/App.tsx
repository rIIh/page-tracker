import React from 'react';
import './styles/app.css';
import './styles/blocks/page.scss';
import {Header} from "./components/header";
import { Route, Switch } from 'react-router-dom';
import {Index} from "./pages";
import {SignIn, SignUp} from "./pages/authentication";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main className="page">
        <Switch>
            <Route exact path="/" component={Index}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
