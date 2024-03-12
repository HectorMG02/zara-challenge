import CharacterData from "../../components/CharacterData/CharacterData"
import useLogic from "./logic"


const CharacterDetails = () => {

  const { characterData } = useLogic()

  return (
    <>
      {
        characterData && (
          <CharacterData character={characterData} />)
      }
    </>
  )
}

export default CharacterDetails