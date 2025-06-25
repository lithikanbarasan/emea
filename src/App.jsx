import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 
import IconListPage from "./pages/IconListPage/IconListPage";
import FeatureGrid from "./components/FeatureGrid/featureGrid.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";


function App() {
  return (
    <div>
      <Header/>
      <MainPage/>
      <IconListPage 
        title="Example Icon List Page"
      
      />

      <FeatureGrid
      />
      
      
      <Footer/>
    </div>
  );
}

export default App;
