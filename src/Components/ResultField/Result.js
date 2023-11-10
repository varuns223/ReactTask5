import React, {useState} from "react";
import "./Result.css"

const Result =(props)=>{
    const [nextBirthday, setnextBirthday]=  useState(props.showDay)
    setnextBirthday (365 - props.monthtoDay)
    
    return(
        <div className="result">
            <div className="divider"></div>
            <h1>Next B.day in<span className="resultDay">{nextBirthday}</span></h1>
        </div>
    )
}

export default Result;