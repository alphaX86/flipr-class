import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import StudentLogin from './pages/Studentlogin';
import TeacherLogin from './pages/Teacherlogin';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <nav>
          <Link to="/student-login">Student</Link> <br/>
          <Link to="/teacher-login">Teacher</Link>
        </nav>
      </div>
    <Switch>
      <Route path="/student-login">
        <StudentLogin />
      </Route>

      <Route path="/teacher-login">
        <TeacherLogin />
      </Route>
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
