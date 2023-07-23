import React, { createContext, useContext, useState } from 'react'
import './Card.css';
import { menuCategoryContext } from '../../App';
import { useNavigate } from 'react-router-dom';
function Card({obj}) {
    let navigate = useNavigate();
    let data = useContext(menuCategoryContext);
  return (
      <div class="card menu-card" style={{ width: '18rem' }} >
          <img class="card-img-top" src={obj.strCategoryThumb} alt="Card image cap" />
          <div class="card-body">
              <h5 class="card-title">{obj.strCategory}</h5>
              <a href="#" onClick={() => {
                  data.setMenuCategory(obj.strCategory);
                  navigate('/menuitem')

              }} class="btn btn-primary menu-btn text-dark">More</a>
          </div>
      </div>
  )
}

export default Card
