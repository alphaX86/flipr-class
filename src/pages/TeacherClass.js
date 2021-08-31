import '../App.css';
import HeaderS from '../components/HeaderS';
import MenuS from '../components/MenuS';
import DashboardS from '../components/DashboardT';
import FooterS from '../components/FooterS';

function TeacherClass() {
  return (
    <div class="wrapper">
      <HeaderS />
      <MenuS/>
      <DashboardS/>
      <FooterS/>
    </div>
  );
}

export default TeacherClass;
