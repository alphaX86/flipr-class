import logo from './logo.svg';
import './App.css';
import { Pane, Button, ManualIcon } from "evergreen-ui";

import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './pages/welcome';
import StudentLogin from './pages/Studentlogin';
import TeacherLogin from './pages/Teacherlogin';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/student" component={StudentLogin} />
          <Route exact path="/teacher" component={TeacherLogin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
