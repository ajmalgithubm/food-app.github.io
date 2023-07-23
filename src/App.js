import ContentBody from "./Component/ContentBody/ContentBody";
import MainPage from "./Component/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar/Navbar";
import Menu from "./Component/Menu/Menu";
import { createContext,useState } from "react";
import MenuItems from "./Component/MenuItems/MenuItems";
import MenuItemCard from "./Component/MenuItemCard/MenuItemCard";
import MoreDetail from "./Component/MoreDetail/MoreDetail";
export const menuCategoryContext = createContext();

function App() {
  let [menuCategory, setMenuCategory] = useState();
  let [menuDetail, setMenuDetail] = useState();
  console.log(menuCategory)
  return (
    
      <menuCategoryContext.Provider value={{ menuCategory: menuCategory, setMenuCategory: setMenuCategory, menuDetail:menuDetail, setMenuDetail:setMenuDetail }}>
       <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ContentBody/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/menuitem" element={<MenuItems/>}/>
            <Route path="/moredetail" element={<MoreDetail/>}/>
          </Routes>
        </div>
       </BrowserRouter>
      </menuCategoryContext.Provider>
   
  );
}

export default App;
