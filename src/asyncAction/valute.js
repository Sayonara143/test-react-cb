import { MoneyAPI } from "../Api/Api"
import { addListValute } from "../store/reducers/valuteSlice"
import moment from "moment"

export const getListValutes = () => (dispatch) => {
    const cachedEndDate = localStorage.getItem('cachedEndDate')
    const todayInfo = localStorage.getItem('todayInfo')
    if(todayInfo && cachedEndDate &&  new Date(cachedEndDate) > new Date())
    {
        dispatch(addListValute(JSON.parse(todayInfo)))
        console.log('ll', todayInfo && cachedEndDate && new Date(cachedEndDate) > new Date()) 
        return
    }
    console.log('22')
    localStorage.clear()
    localStorage.setItem('cachedEndDate', moment().add(60, 'second'))
    // MoneyAPI.getRateActualAndPrevForDate(moment().format('L').split('/').reverse().join('/'))
    MoneyAPI.getRateActualAndPrev()
    .then(async (response)=> {
        localStorage.setItem('todayInfo', JSON.stringify(response.data.Valute))
        dispatch(addListValute(response.data.Valute))     
    })
}