import React from "react"

const d = new Date();
let year = d.getFullYear();

function Footer() {
    return (
        <p>Copyright {year} - React Keeper App</p>
    )
}

export default Footer