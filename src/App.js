import Home from './components/Home'
import Hero from './components/Hero'
import Card from './components/Cards'
import Practice from './components/Practice'
import Clients from './components/Clients'
import Team from './components/Team'
import FAQ from './components/FAQ'
import axios from 'axios';
import { useState,useEffect } from 'react'
function App() {
  const [clientsData, setClientsData] = useState([]);

  const performCall = async () => {
    try {
      const response = await axios.get("https://mocki.io/v1/d914cc82-ec05-41f9-ab1c-b57250e474a1");
      console.log(response.data);
      setClientsData(response.data);
    } catch (e) {
      throw console.error(e.response);
    }
  };

  useEffect(() => {
    performCall();
  }, []);
  return (
    <div>
      <Home />
      <Hero />
      <Card />
      <Practice/>
      <Clients clientsData ={clientsData}/>
      <Team clientsData = {clientsData}/>
      <FAQ/>
    </div>
  );
}

export default App;
