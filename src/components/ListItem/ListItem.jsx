import React, {useRef} from 'react'
import classes from './ListItem.module.scss'
import classNames from 'classnames'
import Tooltip from '../Tooltip/Tooltip'


const Listitem = (props) => {
    const node = useRef()
    const diffPer = -1*(((props.item.Previous * 100) / props.item.Value) -  100)
    const diffColor = diffPer>=0 ? 'green': 'red'
    const diffS = diffPer>=0? '+': ''
  return (
    <div className={classes.item} ref={node} onClick={props.onClick}>
        <div className={classNames(classes.item_charCode,classes.item_block)}>
          {props.item.CharCode}
        </div>
        <div className={classes.item_block}>
          {props.item.Value.toFixed(2)+'₽'}
        </div>
        <div className={classes.item_block} style={{color: diffColor}}>
          {diffS + diffPer.toFixed(2)}
          <i className="pi pi-percentage" style={{marginLeft: '5px'}}></i>
        </div>
        <Tooltip node={node} message={props.item.Nominal+' '+props.item.Name}></Tooltip>
    </div>
  )
}

export default Listitem