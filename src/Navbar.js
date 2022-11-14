import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'

function Navbar() {
    const [openModal, setOpenModal] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => {
    setDropdown(!dropdown)
    setOpenModal(true)
    }
  return (
    <div className="navbar">
        <Link to="/"><img src="../img/Group.jpg" alt="this is the website logo" className="web_logo"/></Link>
        <ul className="list" style={dropdown !== false ? {height: '100vh', left: 0} : {left: '-100%', overflow: 'hidden'}}>
            <li>
                <Link to="/" onClick={() => setDropdown(!dropdown)}>Home</Link>
            </li>
            <li>
                <Link to="/place" onClick={() => setDropdown(!dropdown)}>Place to stay</Link>
            </li>
            <li>
                <Link to="/" onClick={() => setDropdown(!dropdown)}>NFTs</Link>
            </li>
            <li>
                <Link to="/" onClick={() => setDropdown(!dropdown)}>Community</Link>
            </li>
            <button className="connect_btn this" onClick={handleClick} >Connect wallet</button>
        </ul>
        <button className="connect_btn" onClick={() => setOpenModal(true)}>Connect wallet</button>
        <img onClick={() => setDropdown(!dropdown)} src="./img/sandwich.svg" alt="open menu" className="menu"/>
        {openModal ? <Modal closeModal={setOpenModal}/> : null}
    </div>
  )
}

export default Navbar
