import CharacterData from "../../components/CharacterData/CharacterData"
import ShieldSpinner from "../../components/ShieldSpinner/ShieldSpinner"
import useLogic from "./logic"
import { S } from "./styles"


const CharacterDetails = () => {

  const { characterData } = useLogic()

  return (
    <S.Container>
      {
        characterData ? (
          <CharacterData character={characterData} />) : (<S.SpinnerContainer>
            <ShieldSpinner />
          </S.SpinnerContainer>)
      }
    </S.Container>
  )
}

export default CharacterDetails