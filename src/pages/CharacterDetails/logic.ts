import { useParams } from "react-router-dom";
import { request } from "../../axios/request";
import { useEffect, useState } from "react";
import { Character } from "../../types/character";

const getCharacterData = async (characterId: number) => {
    const res = await request.get(`/characters/${characterId}`)
    return res.data?.data?.results[0]
}

const useLogic = () => {
    const { id }: any = useParams();
    const [ characterData, setCharacterData ] = useState<Character>()

    const loadCharacterData = async (characterId: number) => {
        await getCharacterData(characterId).then((data) => {
            setCharacterData(data);
        });
    }

    useEffect(() => {
        loadCharacterData(id)
    }, [id])

    return {
        characterData
    }
}

export default useLogic;
