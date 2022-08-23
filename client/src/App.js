import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import Container from 'react-bootstrap/Container';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from "./Screens/ProductScreen";
import TestScreen from "./Screens/TestScreen";
function App() {
  return (
    < >
      <main className='py-3'>
        <Container>
          
          {/* <HomeScreen /> */}
          <Routes>
            <Route path="/" exact element={<HomeScreen />}/>
            <Route path="/product/:id" exact element={<ProductScreen />}/>
            <Route path="/test" exact element={<TestScreen />}/>
       </Routes>
        </Container>
      </main>
      
      <Footer/>
    </>
  );
}

export default App;
