import logo from './logo.svg';
import './App.css';
import { Pane, Button, ManualIcon } from "evergreen-ui";

import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './pages/welcome';
import StudentLogin from './pages/Studentlogin';
import TeacherLogin from './pages/Teacherlogin';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/student" component={StudentLogin} />
          <Route exact path="/teacher" component={TeacherLogin} />
          <Route exact path="/dashboard-student" component={StudentDashboard} />
          <Route exact path="/dashboard-teacher" component={TeacherDashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
