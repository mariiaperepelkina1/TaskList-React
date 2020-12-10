import React, { useState } from "react"; 

const styles = {
    form: {
        marginBottom: "15px", 
    }
}



const InputTask = ({onCreate}) => {
    const [value, setValue] = useState(""); 
    
    const submitHandler = (e) => {
        e.preventDefault(); 
        if (value.trim()) {
            onCreate(value)
            setValue("")
        }
    }
    return(
        <form style={styles.form} onSubmit={submitHandler}>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <button type="submit" style={{marginLeft: "15px"}}>Submit</button>
        </form>
    )
}

export default InputTask; 