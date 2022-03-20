import { useEffect } from "react"
import MoleHill from './molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <button>Hole</button>
            <img style={{'width': '30vw'}} src={MoleHill} alt={props.MoleHill}/>
        </div>
    )
}
export default EmptySlot