import React from 'react'
import './MenuItemCard.css';
import { useNavigate } from 'react-router-dom';
function MenuItemCard({ obj }) {
      let navigate = useNavigate();
      return (
            <div class="card menu-item-card" style={{ width: "18rem" }}>
                  <img class="card-img-top" src={obj.strMealThumb} alt="Card image cap" />
                  <div class="card-body">
                        <div>
                              <h5 class="card-title">{obj.strMeal}</h5>
                        </div>
                        <div>
                              <a href="#" class="btn btn-primary card-btn-more" onClick={() => navigate('/moredetail')}>More Detail</a>
                        </div>
                  </div>
            </div>
      )
}

export default MenuItemCard
