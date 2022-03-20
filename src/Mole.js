import moleImg from './mole.png'
import { useEffect } from 'react'


export const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
    })

    return (
        <div>
            <button onClick={props.handleClick}>Mole</button>
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} alt={props.moleImg}/>
        </div>
    )}
