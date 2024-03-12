import { useEffect, useState } from "react";
import { request } from '../../axios/request'
import { Character } from "../../types/character";

const getCharacters = async (characterName: string) => {
    const res = await request.get('/characters', {
        params: {
            limit: 50,
            nameStartsWith: characterName || undefined
        }
    })

    return {
        total: res.data?.data?.total,
        characters: res.data?.data?.results
    }
}

const useLogic = () => {
    const [characterName, setCharacterName] = useState<string>('')
    const [total, setTotal] = useState<number>(0)
    const [characters, setCharacters] = useState<Character[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    
    const loadCharacters = async (nameStartsWith = "") => {
        setLoading(true);
        await getCharacters(nameStartsWith).then((data) => {
            setCharacters(data.characters);
            setTotal(data.total);
        }).finally(() => {
            setLoading(false);
        });
    };
    

    useEffect(() => {
       loadCharacters()
    }
    , [])
  

    const handleSearch = (value: string) => {
        setCharacterName(value)
        loadCharacters(value)
    }

   
    return {
        characterName,
        handleSearch,
        characters,
        total,
        loading, 
    };
    
}

export default useLogic;