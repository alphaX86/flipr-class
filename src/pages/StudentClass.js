import '../App.css';
import HeaderS from '../components/HeaderS';
import MenuS from '../components/MenuS';
import ClassX from '../components/Class';
import FooterS from '../components/FooterS';

function StudentClass() {
  return (
    <div class="wrapper">
      <HeaderS />
      <MenuS/>
      <ClassX/>
      <FooterS/>
    </div>
  );
}

export default StudentClass;
