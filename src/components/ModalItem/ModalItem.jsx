import React, {useState, useEffect} from 'react'
import { MoneyAPI } from '../../Api/Api'
import classes from './ModalItem.module.scss'
import classNames from 'classnames'
import { Skeleton } from 'primereact/skeleton';

const ModalItem  = (props) => {
    const [state, setState] = useState({valute: {}, isData:false})
    const [isLodaing, setLoading] = useState(false)
    const cachedDate = localStorage.getItem(props.date);
    const diffPer = -1*(((state.valute[props.valute]?.Previous * 100) / state.valute[props.valute]?.Value) -  100)
    const diffColor = diffPer>=0 ? 'green': 'red'
    const diffS = diffPer>=0? '+': ''

    useEffect(()=>{
        if(cachedDate){
            setState(prev=>JSON.parse(cachedDate))
            setLoading(true)
            return
        }
        setTimeout(()=>{
            MoneyAPI.getRateActualAndPrevForDate(props.date)
                .then((res)=>{
                    setState(prev=>({ valute: res.data.Valute, isData: true}))
                    console.log(res.data.Valute)
                    localStorage.setItem(props.date, JSON.stringify({valute: res.data.Valute, isData: true}))
                    setLoading(true)
                })
                .catch((error)=>{
                    setLoading(true)
                    setState(prev=>({valute: {}, isData: false}))
                    localStorage.setItem(props.date, JSON.stringify({valute: {}, isData: false}))
                })
        }, props.time)
        
    },[])
    if (!(isLodaing)){
        return (
            <div className={classes.item}>
                <Skeleton width="100%" height="100%" />
            </div>
        )
      }
    if (!(state.isData)){
      return (
      <div className={classes.item}>
          Данных нет
      </div>)
    }
    return (
      <div className={classes.item}>
        <div className={classNames(classes.item_date, classes.item_block)}>
            {props.date}
        </div>
        <div className={classes.item_block}>
            {state.valute[props.valute]?.Value.toFixed(2)+'₽'}
        </div>
        <div className={classes.item_block} style={{color: diffColor}}>
          {diffS + diffPer.toFixed(2)}
          <i className="pi pi-percentage" style={{marginLeft: '5px'}}></i>
        </div>
      </div>
    )
    }

export default ModalItem