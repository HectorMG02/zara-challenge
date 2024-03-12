import CharacterData from "../../components/CharacterData/CharacterData"
import ComicsList from "../../components/ComicsList/ComicsList"
import ShieldSpinner from "../../components/ShieldSpinner/ShieldSpinner"
import useLogic from "./logic"
import { S } from "./styles"


const CharacterDetails = () => {
  const { characterData, comics, loading } = useLogic()

  return (
    <S.Container>
      {
        !!characterData && !loading ? (
          <>
            <CharacterData character={characterData} />
            <ComicsList comics={comics} />
          </>
          ) : (<S.SpinnerContainer>
            <ShieldSpinner />
          </S.SpinnerContainer>)
      }
    </S.Container>
  )
}

export default CharacterDetails