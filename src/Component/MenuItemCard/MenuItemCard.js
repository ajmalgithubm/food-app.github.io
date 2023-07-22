import React from 'react'
import './MenuItemCard.css'
function MenuItemCard({obj}) {
  return (
        <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={obj.strMealThumb} alt="Card image cap" />
              <div class="card-body">
                    <h5 class="card-title">{obj.strMeal}</h5>
                  <a href="#" class="btn btn-primary card-btn-more">More Detail</a>
              </div>
        </div>
  )
}

export default MenuItemCard
