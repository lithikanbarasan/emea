import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 
import IconListEntry from "./components/IconListEntry/IconListEntry";
import FeatureGrid from "./components/FeatureGrid/featureGrid.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import Ceo from "./components/Ceo/Ceo.jsx";


function App() {
  return (
    <div>
      <Header/>
      <MainPage/>
      <Ceo
        // image={PilarImage}
        quote="Quote from Neema."
        name="Neema "
        title="CEO and Founder of EMEA Venture"
      
      />

      <FeatureGrid
      />

      <IconListEntry 
        text='Ahorra tiempo optimizando la facturación de tu negocio'
        subtext="La automatización de tus facturas te permitirá reducir el tiempo
        que dedicas a tu facturación y emplearlo para mejorar tu negocio"
      
      />  
      
      
      <Footer/>
    </div>
  );
}

export default App;
