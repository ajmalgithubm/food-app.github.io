import ContentBody from "./Component/ContentBody/ContentBody";
import MainPage from "./Component/MainPage/MainPage";
import NavBar from "./Component/NavBar/Navbar";
import Menu from "./Component/Menu/Menu";
import { createContext,useState } from "react";
import MenuItems from "./Component/MenuItems/MenuItems";
export const menuCategoryContext = createContext();

function App() {
  let [menuCategory, setMenuCategory] = useState();
  console.log(menuCategory)
  return (
   <menuCategoryContext.Provider value={{menuCategory:menuCategory,setMenuCategory:setMenuCategory}}>
      <div className="App">
        <NavBar />
        <MenuItems/>
      </div>
   </menuCategoryContext.Provider>
  );
}

export default App;
