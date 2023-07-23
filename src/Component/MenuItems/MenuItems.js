import React, { useContext, useEffect, useState } from 'react'
import { menuCategoryContext } from '../../App'
import './MenuItems.css';
import Card from '../Card/Card';
import MenuItemCard from '../MenuItemCard/MenuItemCard';
function MenuItems() {
    let [catogoryList, setCategoryList] = useState();
    let data = useContext(menuCategoryContext);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.menuCategory}`).then((response) => response.json() ).then((data) => {
            setCategoryList(data.meals)
        })
    },[])
    return (
        <div>
            <div className="menu-item-content">
                <div className="menu-category-head">
                    <h1>{data.menuCategory}</h1>
                </div>
                <div className="menu-category-list">
                    { catogoryList&&
                        catogoryList.map((obj) => {
                            return(
                                <MenuItemCard obj={obj}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MenuItems
