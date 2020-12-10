import React, { useContext }  from 'react'; 
import "./ListItem.css"
import Context from "../Context"; 

const styles = {
    li: {
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        border: '1px solid #fff', 
        padding: '10px',
        marginBottom: '10px', 
        fontSize: '20px',
        
    },

    input: {
        marginRight: '10px', 
    }
}

const ListItem = ({ task, index, onChange }) => {
    const {removeTask} = useContext(Context); 
    const classes = []; 
    if(task.done) {
        classes.push('completed'); 
    }
    return(
            <li style={styles.li}>
                <span className={classes.join(' ')}>
                    <input type="checkbox"
                    checked={task.done}
                    style={styles.input} 
                    onChange={() => onChange(task.id)}/>
                    {index + 1}
                    &nbsp; {task.title}
                </span>
                <button onClick={() => removeTask(task.id)}>&times;</button>
            </li>
    )
}


export default ListItem; 