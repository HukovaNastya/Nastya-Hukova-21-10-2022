import {SEARCH_CITY_ERROR, SEARCH_CITY_IN_PROGRESS, SEARCH_CITY_SUCCESS, SET_SELECTED_CITY} from "../types";
import api from "../../plugins/axios/axios";

export const searchCities = (search) =>  async (dispatch) => {
  dispatch({ type: SEARCH_CITY_IN_PROGRESS })
    try {
        const res = await api.get(`locations/v1/cities/autocomplete?q=${search}`)
        dispatch({ type: SEARCH_CITY_SUCCESS, payload: res.data || [] })
    } catch (err) {
        console.log(err)
        dispatch({ type: SEARCH_CITY_ERROR })
    }
}

export const setSelectedCity = (city) => (dispatch) => {
  dispatch({ type: SET_SELECTED_CITY, payload: city })
}