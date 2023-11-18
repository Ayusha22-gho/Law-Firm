import Home from './components/Home'
import Hero from './components/Hero'
import Card from './components/Cards'
import Practice from './components/Practice'
import Clients from './components/Clients'
import axios from 'axios';
import { useState,useEffect } from 'react'
function App() {
  const [clientsData, setClientsData] = useState([]);

  const performCall = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users/");
      console.log(response.data.data);
      setClientsData(response.data.data);
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
    </div>
  );
}

export default App;
