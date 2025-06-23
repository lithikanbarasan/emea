import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 
import IconList from "./components/IconList/IconList";

import BankIcon from './assets/ListEntryIcons/BankIcon.png'
import ClockIcon from './assets/ListEntryIcons/ClockIcon.png'
import DocumentIcon from './assets/ListEntryIcons/DocumentIcon.svg'
import DownloadIcon from './assets/ListEntryIcons/DownloadIcon.jpg'
import InfoIcon from './assets/ListEntryIcons/InfoIcon.png'

const listItems = [
  {
    icon: ClockIcon,
    text: "Ahorra tiempo optimizando la facturación de tu negocio",
    subtext: "La automatización de tus facturas te permitirá reducir el tiempo que dedicas a tu facturación y emplearlo para mejorar tu negocio."
  },
  {
    icon: DocumentIcon,
    text: "Programa recibos y facturas recurrentes",
    subtext: "Solo asigna un día de emisión, un intervalo de tiempo, y se irán enviando automáticamente."
  },
  {
    icon: DownloadIcon,
    text: "Centraliza tus gastos en el Inbox",
    subtext: "Inbox es el buzón en el que podrás organizar y clasificar todos los archivos que recibas."
  },
  {
    icon: InfoIcon,
    text: "Permite a tus clientes acceder a toda su información",
    subtext: "A través del Portal del Cliente tus contactos podrán consultar la información que compartas con ellos: presupestos, facturas..."
  },
  {
    icon: BankIcon,
    text: "Mantente al día de la legislación con la facturación electrónica",
    subtext: "Con Holded puedes emitir facturas electrónicas a organismos públicos."
  }
]

const title = "Mucho más que \"facturas que se hacen solas\""

function App() {
  return (
    <div>
      <Header/>
      <IconList
        listItems={listItems}
        title={title}
      />
      <Footer/>
    </div>
  );
}

export default App;
