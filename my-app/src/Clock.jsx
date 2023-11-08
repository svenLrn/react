import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";

export function Clock() {
    const [date, setDate] = useState(new Date())
    useEffect(()=>{
       const intervalId = setInterval(() => {
            setDate((c)=> new Date())
        }, 1000)
        
        return()=>{
            clearInterval(intervalId)
        }
    }, [])

    const { selectedLanguage } = useLanguage();
    const clockTitle = () => {
        switch (selectedLanguage) {
          case "en":
            return "Clock";
          case "it":
            return "Orologio";
          
          default:
            return "Clock";
        }
      };

    return(
        <div>
            <h1>{clockTitle()}</h1>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}