import React,{useState} from "react";
import "./InputField.css"

const InputField =(props)=>{
    const [day ,setDay] = useState()
    const [month ,setmonth] = useState()
    const [year ,setYear] = useState()

    const getDay=(event)=>{
        setDay(event.target.value)
    }
    const getMonth=(event)=>{
        setmonth(event.target.value)
    }
    const getYear=(event)=>{
        setYear(event.target.value)
    }

    const showData =()=>{
        if(day=== undefined || month === undefined || year === undefined){
            alert("Give me all the numbers ")
        }
        else{
            props.getFinlYear(finalYear)
            props.getFinalMonth(finalMonth)
            props.getFinalDay(finalDay)
        }
    }

    const today = new Date();
    let finalYear = today.getFullYear() - year; 
    let finalMonth = (today.getMonth())+1 - month; 
    let finalDay = today.getDate() - day;
    
    if(finalMonth <0 || (finalMonth<0 && finalDay<0)){
        finalYear--;
        finalMonth += 12;
    }
    if(finalDay<0){
        finalDay+= new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    return(
        <div>
            {/* <h1>Enter your birth date:</h1> */}

            <div className="form">
                <div className="dayInput">
                    <label htmlFor="day">Day </label>
                    <input id="day" type="number" placeholder="DD" min="1" max="31" onChange={getDay} value={day}/>
                </div>

                <div className="monthInput">
                    <label htmlFor="month">Month </label>
                    <input id="month" type="number" placeholder="MM" min="1" max="12" onChange={getMonth} value={month}/>
                </div>

                <div className="yearInput">
                    <label htmlFor="year">Year </label>
                    <input id="year" type="number" placeholder="YYYY"  min="1900" onChange={getYear} value={year} />
                </div>
            </div>
                    <div className="buttonSection">
                        <div className="Divider"></div>
                            <div >
                                <button className="CalculateButton" onClick={showData}>Count</button>
                            </div>
                    </div>

        </div>
    )
}

export default InputField;