import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 
import IconListEntry from "./components/IconListEntry/IconListEntry";
import FeatureGrid from "./components/FeatureGrid/featureGrid.jsx";
import MainPage from "./components/MainPage/MainPage.jsx"


function App() {
  return (
    <div>
      <Header/>
      <MainPage/>
      <IconListEntry 
        text='Ahorra tiempo optimizando la facturación de tu negocio'
        subtext="La automatización de tus facturas te permitirá reducir el tiempo
        que dedicas a tu facturación y emplearlo para mejorar tu negocio"
      
      />

      <FeatureGrid
      />
      
      
      <Footer/>
    </div>
  );
}

export default App;
