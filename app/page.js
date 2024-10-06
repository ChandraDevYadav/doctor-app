import AppointmentForm from "./components/AppointmentForm/AppointmentForm";
import CounterSec from "./components/CounterSec/CounterSec";
import Deep from "./components/Deep/Deep";
import FeedbackPage from "./components/FeedBack/FeedBack";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/hero";
import Marquee from "./components/Marquee/Marquee";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import OurDepartment from "./components/OurDepartment/OurDepartment";
import ProfDoctor from "./components/ProfDoctor/ProfDoctor";
import Services from "./components/Services/Services";
import WeOffer from "./components/weOffer/WeOffer";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WeOffer/>
      <OurDepartment/>
      <CounterSec/>
      <Services/>
      <ProfDoctor/>
      <AppointmentForm/>
      <FeedbackPage/>
      <Marquee/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}
