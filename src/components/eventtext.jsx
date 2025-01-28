import { CgCalendarDates } from "react-icons/cg"
import "../style/inputfield.css"
import { CiMap } from "react-icons/ci"


export default function InputText() {
    
    return  (
        <div className="text-container">
        <h3>SIGNUP FOR THE EVENT</h3>
        <h1>Orange Rabbit Festival 2023</h1>
        <p><CgCalendarDates /> 24 June 2025 - 1 July 2025 </p>
        <p><CiMap /> Bunny Avenue 22, 2300, Rabbitkilde</p>
        </div>
    )
}