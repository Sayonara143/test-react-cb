import React, {useRef, useState, useEffect} from 'react'
import classes from './Tooltip.module.scss'

const Tooltip = (props) => {
    useEffect(() => {
        document.addEventListener('mousemove', handleClick);
        return () => {
            document.removeEventListener('mousemove', handleClick);
        };
    }, []);
    const [isVisible, setVisible] = useState(false);
    const [points, setPoints] = useState({x:0, y:0});
    const handleClick = (e) => {
        if (props.node.current.contains(e.target)) {
            setPoints({x:e.pageX,y:e.pageY})
            setVisible(true);
            return;
        }
    setVisible(false);
    };
  return (
    <div ref={props.node} className={classes.tooltip}>
        {isVisible &&
            <div
            className={classes.tooltip_container}
            style={{
                left: isVisible? points.x+'px': 0,
                top: isVisible? points.y+'px': 0
            }}
            >
                {props.message}
            </div>
        }
    </div>
  )
}

export default Tooltip