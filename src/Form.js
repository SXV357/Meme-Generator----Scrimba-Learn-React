import React, {useState, useEffect} from "react"

export default function Form(){
 
    const [meme, setMeme] = useState({ // stores object with default meme image and text values
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImages, setAllMemeImages] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(db => setAllMemeImages(db.data.memes))
    }, []) // we have no state changes so we don't need any dependencies

    function getMemeImage(){ 
        let index = Math.floor(Math.random() * allMemeImages.length);
        setMeme((previousMeme)=>{
            return{
                ...previousMeme, randomImage: allMemeImages[index].url
            }
        }) // need to retain top + bottom text properties so spread in meme and overwrite random img property
    }

    function updateText(event){
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme, 
                [name]: value
            }
        })
    }

    return(
        <div className = "main">
            <div className = "meme-form">
            <input
            className = "meme-form-input1" 
            type = "text" 
            placeholder = "Enter first part of text"
            value = {meme.topText}
            onChange = {updateText}
            name = "topText">

                    </input>
            <input 
            className = "meme-form-input2" 
            type = "text" 
            placeholder = "Enter last part of text"
            value = {meme.bottomText}
            onChange = {updateText}
            name = "bottomText">

                    </input>
                <button onClick = {getMemeImage} className = "meme-form-button">Get a new meme image 🤣</button>
        </div>
        <div className = "meme-image">
        <img className = "meme" src = {meme.randomImage} alt = "Meme Image"></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        </div>
    )
}