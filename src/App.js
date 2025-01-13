import "./App.css";
import HeaderFile from "./components/header/HeaderFile";
import Hero from "./components/hero/Hero";
import EmployeesSupport from "./components/employee-support/EmployeeSupport";
import ClientTestimonials from "./components/testimonials/ClientTestimonials";
import Testimonials from "./components/testimonials/Testimonials";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import AutoPopupForm from "./components/forms/AutoPopupForm";
import PartnerForm from "./components/forms/PartnerForm";

function App() {
  return (
    <div className="App">
      <HeaderFile />
      <AutoPopupForm />
      <Hero />
      <EmployeesSupport />
      <ClientTestimonials />
      <Testimonials />
      <PartnerForm />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
