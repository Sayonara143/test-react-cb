import React, {useEffect, useState} from 'react'
import { getListValutes } from '../../asyncAction/valute'

import { useDispatch, useSelector } from 'react-redux'
import ListItem from '../../components/ListItem/ListItem'
import classes from './Main.module.scss'
import moment from 'moment'
import ModalInfo from '../../components/ModalInfo/ModalInfo'



const Main = () => {
    document.title = 'Список валют'
    const dispatch = useDispatch()
    const [modal, setModal] = useState({isVisible: false, data: null})
    let valute = useSelector((state)=>  state.valute.list)
    useEffect(()=>{

        dispatch(getListValutes())
      }, [])
    const listItems = Object.keys(valute).map((item, index)=> 
      <ListItem
        onClick={()=>setModal({isVisible:true, data: valute[item]})}
        
        key={valute[item].ID} item={valute[item]} index={index}/>
    )
    return (
        <div className={classes.container}>
            <div className={classes.wrapper} style={{marginTop: '50px'}}>
                <div className={classes.wrapper_header}>
                    <span>Курсы валют</span>
                    <div>f</div>
                </div>
                <div className={classes.wrapper_content} style={{marginTop: '30px'}}>
                    {listItems}
                </div>
            </div>
            {modal.isVisible &&
                <ModalInfo item={modal.data} closeModal={()=> setModal({isVisible:false, data: null})}></ModalInfo>
            }
            
        </div>
    )
}

export default Main
