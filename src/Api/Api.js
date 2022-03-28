import axios from "axios"
import jsonp from "jsonp";

const instance = axios.create({
	withCredentials: false,
	baseURL: `https://www.cbr-xml-daily.ru/`,
});

export const MoneyAPI = {
    getRateActualAndPrev(){
		return instance.get(`daily_json.js`)
	},
	getRateActualAndPrevForDate(date){
		return instance.get(`archive/${date}/daily_json.js`)
	}
}
