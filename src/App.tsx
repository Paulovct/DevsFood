
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

//pages
import Home from "./pages/Home";
import Tela2Screen from "./pages/Tela2Screen";

//components
import PrivateRoute from "./components/PrivateRoute";
import { Container , Menu , PageBody } from "./AppStyleds";
import { MenuItem } from "./components/MenuItem";
import { Cart } from "./components/Cart";

const App = ()=>{

  

  

  return(
    
      <BrowserRouter>
          <Container>
               <Menu>
                    <MenuItem title="Loja" icon="img/store.png" link="/" />
                    <MenuItem title="Pedidos" icon="img/order.png" link="/orders" />
                    <MenuItem title="Meu Perfil" icon="img/profile.png" link="/profile" />
               </Menu>
               <PageBody>
                    <Routes>
                         <Route  path="/" element={<Home />} />
                         <Route  path="/profile" element={<PrivateRoute />} />
                         <Route  path="/orders" element={<PrivateRoute />} />
                         <Route path="/tela2/:nome" element={<Tela2Screen />} />
                    </Routes>  
               </PageBody>
               <Cart />
               <Tooltip id="tip-top" place="top"  />
               <Tooltip id="tip-right" place="right" />
          </Container>
     </BrowserRouter>
    
  );
}


export default App;