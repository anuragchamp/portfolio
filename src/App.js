import logo from './logo.svg';
import './App.css';
import MyNavs from './components/MyNavs';
import Banner from './components/Banner';
import Skills from './skills/Skill';
import ContactUs from './contactus/ContactUs';
import AboutUs from './aboutus/AboutUs';


function App() {
  return (
    <>
      <MyNavs />
      <Banner />
      <AboutUs />
      <Skills />
      <ContactUs />
    </>

  );
}

export default App;
