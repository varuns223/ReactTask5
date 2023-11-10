import React, {useState} from "react";
import "./MainField.css"
import "../ResultField/Result.css"
import InputField from "../InputField/InputField";
import Result from "../ResultField/Result";
const MainField =()=>{
    const [rDay, setrDay]= useState("--")
    const [rMonth, setrMonth]= useState("--")
    const [rYear, setrYear]= useState("--")
    // const [nextBirthday, setnextBirthday]= useState("--")
    const finalYear =(data)=>{
        // console.log(data)
        setrYear(data)
    }
    const finalMonth =(data)=>{
        // console.log(data)
        setrMonth(data)
    }
    const finalDay =(data)=>{
        // console.log(data)
        setrDay(data)
    }

    const monthDays =[31, 28, 31, 30, 31, 30,31, 31, 30, 31, 30, 31]
    let monthtoDay= 0
    for (let i = 0; i < rMonth; i++) {
        monthtoDay += monthDays[i];
        console.log(monthtoDay)
        
    }
    let totalDays = monthtoDay
    if (rDay>0){
         totalDays = monthtoDay + rDay
         console.log("totalDays: "+ totalDays)

    }
    let nextBirthday = 0
    nextBirthday = (365 - totalDays);
    console.log(nextBirthday)
    return(
        <div className="mainField">
            <InputField getFinlYear={finalYear} getFinalMonth={finalMonth} getFinalDay={finalDay}/>
            <div className="result">
            <h1><span className="resultYear">{rYear}</span>Years</h1>
            <h1><span className="resultMonth">{rMonth}</span>Months</h1>
            <h1><span className="resultDay">{rDay}</span>Days</h1>
            
            
        </div>
        </div>
    )
}

export default MainField;
