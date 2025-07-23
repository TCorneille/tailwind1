
import './App.css'
import Head from './Components/Head'
import Home from './Components/Home'
import Offer from './Components/Offer'
import Cards from './Components/Cards'
import About from './Components/About'
import Benefits from './Components/Benefits'
import Services from './Components/Services'
import Mission from './Components/Mission'
import ContactUs from './Components/ContactUs'
import Contacts from './Components/Contacts'
import Button from './Components/Button'
import ContactMessage from './hooks/ContactMessage'
import Summary from './Components/Summary'


function App() {
 

  return (
    <>
    <div>
       <Head/>
    
    </div>
    <div>
         <Home/>
    </div>
    
     <div>
     <Offer/>
    </div> 
    <div>
      <Cards/>
    </div> 
     <div>
      <About/>
     </div>
     <div>
      <Benefits/>
     </div>
     <div>
       <Services/>
     </div>
     <div>
      <Mission/>
     </div>
     <div>
      <ContactUs/>
     </div>
      <div>
      <Contacts/>
     </div> 
     {/* <div>
      <Button/>
     </div> */}
     <div>
      <Summary/>
     </div>
    </>
    
  )
}

export default App
