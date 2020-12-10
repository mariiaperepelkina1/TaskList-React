import React from "react"; 
import ListItem from "./ListItem";
import "./TaskList.css"; 
import InputTask from "./InputTask"; 


const styles = {
    ul: {
        listStyle: "none",
        margin: 0, 
        padding: 0, 
    },

    h1: {
        textTransform: "uppercase", 
    }

}




const TaskList = (props) => {

    return(
        <div className="wrapper">
            <h1 style={styles.h1}>Maria's Task List</h1>
            <InputTask onCreate={props.addTask}/>
            <ul style={styles.ul}>
                { props.tasks.map( (task, index) => {
                    return <ListItem task={task} key={task.id} index={index} onChange={props.onToggle}/>
                }) }
            </ul>
        </div>
    )
}


export default TaskList; 