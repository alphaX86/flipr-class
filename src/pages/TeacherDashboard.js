import '../App.css';
import HeaderS from '../components/HeaderS';
import MenuT from '../components/MenuT';
import DashboardT from '../components/DashboardT';
import FooterS from '../components/FooterS';

function TeacherDashboard() {
  return (
    <div class="wrapper">
      <HeaderS />
      <MenuT/>
      <DashboardT/>
      <FooterS/>
    </div>
  );
}

export default TeacherDashboard;
