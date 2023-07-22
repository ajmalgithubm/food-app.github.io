import ContentBody from "./Component/ContentBody/ContentBody";
import MainPage from "./Component/MainPage/MainPage";
import NavBar from "./Component/NavBar/Navbar";
import Menu from "./Component/Menu/Menu";
import { createContext,useState } from "react";
export const menuCategoryContext = createContext();

function App() {
  let [menuCategory, setMenuCategory] = useState();
  console.log(menuCategory)
  return (
   <menuCategoryContext.Provider value={{menuCategory:menuCategory,setMenuCategory:setMenuCategory}}>
      <div className="App">
        <NavBar />
        <Menu />
      </div>
   </menuCategoryContext.Provider>
  );
}

export default App;
