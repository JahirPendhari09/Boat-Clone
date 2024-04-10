import React from 'react'

const NavbarTop = () => {
  return (
    <div className="text-xs bg-sky-50 p-2.5 max-w-[1440px] m-auto">
      Playback: 150 Hrs | Sound: Sublime | Price: 
        <span className="font-bold"> ₹1199 </span>
        <span className="line-through"> ₹1499 </span>
        | Shop <span className="font-bold">Rockerz Trinity </span>
        using: <span className="font-bold">TAKE300</span>
    </div>
  )
}

export default NavbarTop
