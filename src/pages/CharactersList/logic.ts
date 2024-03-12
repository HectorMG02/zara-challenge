import { useState } from "react";


const useLogic = () => {
    const [characterName] = useState<string>('')
    const [characters, ] = useState([
        {
            name: "Iron Man",
            description: "Tony Stark is an industrialist and genius inventor who created a powered suit of armor to save his own life and escape captivity. Later, Stark augments his suit with weapons and other technological devices he designed through his company, Stark Industries.",
            thumbnail: {
                path: "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
                extension: "jpg"
            }
        }
    ])
    
  


    
    return {
        characterName,
        characters,
    };
}

export default useLogic;