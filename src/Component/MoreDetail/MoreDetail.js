import React, { useEffect, useState } from 'react'
import  YouTube ,{YouTubeProps} from 'react-youtube'
import './MoreDetail.css'
import { useContext } from 'react';
import { menuCategoryContext } from '../../App';
function MoreDetail() {
    let [menuDetailObj, setMenuDetailObj] =useState();
    let [youtubeId, setYoutubeId] =useState();
    let data = useContext(menuCategoryContext);
    const opts = {
        height:'400',
        width:'90%',
        playerVars: {
            autoplay: 0,
        },
    };
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data.menuDetail}`).then((response) => response.json()).then((data) => {
            setMenuDetailObj(data.meals[0])
            let youtubeLink = data.meals[0].strYoutube;
            let id = youtubeLink.slice(32);
            setYoutubeId(id);
        })
    },[])

    const onPlayerReady = (event) => {
        console.log('Player is ready:', event.target);
    };
    return (
        <div>
            {
                menuDetailObj && (<div className="more-detail">
                    <div className="more-detail-head">
                        <h1>{menuDetailObj.strMeal}</h1>
                    </div>
                    <div className="more-detail-img">
                        <img src={menuDetailObj.strMealThumb} alt="" />
                    </div>
                    <div className="more-detail-prepare">
                        <h1>Recipe</h1>
                        <p>{menuDetailObj.strInstructions}</p>
                    </div>
                    <div className="more-detail-ingrediants">
                        <h1>Ingrediants</h1>
                        {
                            [0,1,2,3,4,5,6,7,8].map((item) => {
                                return(
                                    <li></li>
                                )
                            })
                        }
                        <li>Sugar - 1/2 cup</li>
                        <li>Rice - 1/2 cup</li>
                    </div>
                    <div className="more-detail-youtube">
                        <YouTube videoId={youtubeId} opts={opts} onReady={onPlayerReady} />
                    </div>
                </div>)
            }
        </div>
    )
}

export default MoreDetail
