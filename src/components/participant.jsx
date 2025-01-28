import '../style/participant.css'

export default function Participant({ formData = {} }) {
    return (
        <div>
            <div className="participant-box">
               <h5>{formData?.fullName}</h5> 
               <p>Birthdate: {formData?.birthdate}</p>
               <p>Email: {formData?.email}</p>
               <p>Phone number: {formData?.phone}</p>
            </div>
        </div>
    )
}
