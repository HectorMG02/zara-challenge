import { useParams } from "react-router-dom";
import { request } from "../../axios/request";
import { useEffect, useState } from "react";
import { Character } from "../../types/character";
import { Comic } from "../../types/comic";

const getCharacterData = async (characterId: number) => {
    const res = await request.get(`/characters/${characterId}`)
    return res.data?.data?.results[0]
}

const getCharacterComics = async (characterId: number) => {
    const res = await request.get(`/characters/${characterId}/comics`)
    return res.data?.data?.results
}

const useLogic = () => {
    const { id }: any = useParams();
    const [ characterData, setCharacterData ] = useState<Character>()
    const [ comics, setComics ] = useState<Comic[]>([])

    const loadCharacterData = async (characterId: number) => {
        await getCharacterData(characterId).then((data) => {
            setCharacterData(data);
        });
    }

    const loadComics = async (characterId: number) => {
        await getCharacterComics(characterId).then((data: Comic[]) => {
            setComics(data);
        });
    }

    useEffect(() => {
        loadCharacterData(id)
        loadComics(id)
    }, [id])

    return {
        characterData,
        comics
    }
}

export default useLogic;
