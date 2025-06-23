import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 
import IconListEntry from "./components/IconListEntry/IconListEntry";


function App() {
  return (
    <div>
      <Header/>
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
