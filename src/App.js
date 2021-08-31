import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './pages/welcome';
import StudentLogin from './pages/Studentlogin';
import TeacherLogin from './pages/Teacherlogin';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentAssess from './pages/StudentAssess';
import TeacherAssess from './pages/TeacherAssess';
import StudentClass from './pages/StudentClass';
import TeacherClass from './pages/TeacherClass';
import StudentTest from './pages/StudentTest';
import TeacherTest from './pages/TeacherTest';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route exact path="/student" component={StudentLogin} />
          <Route exact path="/teacher" component={TeacherLogin} />
          <Route exact path="/dashboard-student" component={StudentDashboard} />
          <Route exact path="/dashboard-teacher" component={TeacherDashboard} />
          <Route exact path="/student-assess" component={StudentAssess} />
          <Route exact path="/teacher-assess" component={TeacherAssess} />
          <Route exact path="/student-class" component={StudentClass} />
          <Route exact path="/teacher-class" component={TeacherClass} />
          <Route exact path="/student-test" component={StudentTest} />
          <Route exact path="/teacher-test" component={TeacherTest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
