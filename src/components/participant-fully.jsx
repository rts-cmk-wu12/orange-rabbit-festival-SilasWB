import '../style/participant.css'
import Participant from './participant'

export default function ParticipantFully({ participants = [] }) {
    return (
        <>
            <p>YOUR PARTICIPANTS</p>
            <h2>{participants.length} participant{participants.length !== 1 ? 's' : ''}</h2>
            {participants.map((participant, index) => (
                <Participant  key={index} formData={participant} />
            ))}
            <button type="submit">Submit</button>
        </>
    )
}
