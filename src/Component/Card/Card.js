import React, { createContext, useContext, useState } from 'react'
import './Card.css';
import { menuCategoryContext } from '../../App';

function Card({obj}) {
    let data = useContext(menuCategoryContext);
  return (
      <div class="card menu-card" style={{ width: '18rem' }} onClick={() => data.setMenuCategory(obj.strCategory)}>
          <img class="card-img-top" src={obj.strCategoryThumb} alt="Card image cap" />
          <div class="card-body">
              <h5 class="card-title">{obj.strCategory}</h5>
              <a href="#" class="btn btn-primary menu-btn text-dark">More</a>
          </div>
      </div>
  )
}

export default Card
