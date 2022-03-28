import React, { useEffect, useState } from 'react'
import classes from './ModalInfo.module.scss'
import moment from 'moment'
import ModalItem from '../ModalItem/ModalItem'


const ModalInfo = (props) => {
    const [count, setCount] = useState(0)

    const createListDate = () => {
        let list = []
        for (let i = 0; i < 10; i++) {
          list.push(moment().add((-1*(i)), 'days').format('L').split('/').reverse().join('/')) 
        }
        return list
    }

    const listData = createListDate()
    useEffect(() => {
      
      // let counter = count;
      // if(!(localStorage.length > 10)) {
      //   const interval = setInterval(() => {
      //     if (counter >= listData.length) {
      //       clearInterval(interval);
      //     } else {
      //       setCount(count => count + 1);
      //       counter++;
      //     }
      //   }, 350);
      //   return () => clearInterval(interval);
      // }
      // else{
      //   setCount(count=> 10)
      // }
    }, [listData]);

    const listItems = listData.map((item, index)=>
        <ModalItem key={item} date={item} time={400 *(index+1)} index={index} valute={props.item.CharCode}/>
    )
    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.wrapper_header}>
                    <span>{props.item.Name}</span>
                    <i className="pi pi-times" onClick={props.closeModal} style={{marginLeft: '10pxц'}}></i>
                </div>
                <div className={classes.wrapper_content}>
                    {listItems}
                </div>
            </div>
        </div>
    )
}

export default ModalInfo