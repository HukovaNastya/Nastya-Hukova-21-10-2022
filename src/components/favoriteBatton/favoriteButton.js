import React, {useMemo} from 'react';
import { Button } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite, removeFromFavorite} from "../../store/actions/favouritesActions";

const FavoriteButton = ({ currentCityKey }) => {
    const dispatch = useDispatch()
    const { favoriteForecasts } = useSelector((store) => store.favorites)
    const { searchedForecast } = useSelector(state => state.weather);
    const { selectedCity } = useSelector(state => state.cities);

    const isCityExist = useMemo(
      () => favoriteForecasts.some(item => item.city.key === currentCityKey),
      [favoriteForecasts, currentCityKey]
    )

    const handleButtonClick = () => {
      if (isCityExist) {
        dispatch(removeFromFavorite(currentCityKey))
        return
      }

      dispatch(addToFavorite({
        weather: JSON.parse(JSON.stringify(searchedForecast)),
        city: { ...selectedCity },
      }))
    }

    return (
      <div className="container">
        <Button type="primary" style={{margin: '40px 130px 50px 0px'}} danger={isCityExist} size="large" onClick={handleButtonClick}>
          {
            isCityExist ? "Remove from Favorites" :  "Add to Favorites"
          }
        </Button>
      </div>
    );
}

export default FavoriteButton;