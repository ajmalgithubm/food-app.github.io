import React from 'react'
import  YouTube ,{YouTubeProps} from 'react-youtube'
import './MoreDetail.css'
import { useContext } from 'react';
import { menuCategoryContext } from '../../App';
function MoreDetail() {
    let data = useContext(menuCategoryContext);
    const opts = {
        height:'400',
        width:'90%',
        playerVars: {
            autoplay: 0,
        },
    };

    const onPlayerReady = (event) => {
        console.log('Player is ready:', event.target);
    };
    return (
        <div>
            <div className="more-detail">
                <div className="more-detail-head">
                    <h1>{data.menuDetail}</h1>
                </div>
                <div className="more-detail-img">
                    <img src="" alt="" />
                </div>
                <div className="more-detail-prepare">
                    <h1>Recipe</h1>
                    <p>Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.Drain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.</p>
                </div>
                <div className="more-detail-ingrediants">
                    <h1>Ingrediants</h1>
                    <li>Sugar - 1/2 cup</li>
                    <li>Rice - 1/2 cup</li>
                </div>
                <div className="more-detail-youtube">
                    <YouTube videoId="2g811Eo7K8U"  opts={opts} onReady={onPlayerReady} />
                </div>
            </div>
        </div>
    )
}

export default MoreDetail
