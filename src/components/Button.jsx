import React from 'react'

export default function Button({ label }) {
    return (
        <a className="bg-custom-200 text-white font-sans font-normal px-6 py-2 rounded-2xl hover:bg-white hover:text-black" href="#">{label}</a>
    )
}