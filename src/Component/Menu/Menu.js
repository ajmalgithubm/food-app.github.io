import React, {  useEffect, useState } from 'react'
import './Menu.css'
import Card from '../Card/Card';


function Menu() {
    let [menu, setMenu] =useState();
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php').then((response) => response.json()).then((data) =>{
            setMenu(data.categories);
            console.log('Function is Running..')
        })
    },[])
    return (
            <div className="menu-content">
                <div className="menu-body">
                    {
                        menu && (
                            menu.map((obj) => {
                                return (
                                    <Card key={obj.id} obj ={obj}/>
                                )
                            })
                        )
                    }

                </div>
            </div>

    )
}

export default Menu
