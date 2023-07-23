import React, { useContext } from 'react'
import './MenuItemCard.css';
import { useNavigate } from 'react-router-dom';
import { menuCategoryContext } from '../../App';
function MenuItemCard({ obj }) {
      let data = useContext(menuCategoryContext);
      let navigate = useNavigate();
      return (
            <div class="card menu-item-card" style={{ width: "18rem" }}>
                  <img class="card-img-top" src={obj.strMealThumb} alt="Card image cap" />
                  <div class="card-body">
                        <div>
                              <h5 class="card-title">{obj.strMeal}</h5>
                        </div>
                        <div>
                              <a href="#" class="btn btn-primary card-btn-more" onClick={() => {
                                    data.setMenuDetail(obj.strMeal);
                                    navigate('/moredetail');
                              }}>More Detail</a>
                        </div>
                  </div>
            </div>
      )
}

export default MenuItemCard
