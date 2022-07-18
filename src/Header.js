import React from "react"

export default function Header(){
    return(
        <div className = "header">
            <div className = "section-1">
                <figure className = "section-1-img">
                    <img className = "section-1-main-img" src = "https://pngimg.com/uploads/trollface/trollface_PNG48.png" alt = "Troll Face"></img>
                </figure>
                <h3 className = "section-1-title">Meme Generator</h3>
            </div>
            <div className = "section-2">
                <p className = "section-2-para">React Course - Project 3</p>
            </div>
        </div>
    )
}