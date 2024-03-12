import { useEffect, useState } from "react";
import { request } from '../../axios/request'
import { Character } from "../../types/character";

const getCharacters = async () => {
    const res = await request.get('/characters', {
        params: {
            limit: 50
        }
    })

    return {
        total: res.data?.data?.total,
        characters: res.data?.data?.results
    }
}

const useLogic = () => {
    const [characterName] = useState<string>('')
    const [total, setTotal] = useState<number>(0)
    const [characters, setCharacters] = useState<Character[]>([])
    
    useEffect(() => {
        getCharacters().then((data) => {
            setCharacters(data.characters)
            setTotal(data.total)
        })
    }
    , [])
  

   
    return {
        characterName,
        characters,
        total
    };
}

export default useLogic;