import { PropTypes } from "./types";

const RELEASE_DATE = 'onsaleDate';

const useLogic = ({ comic }: PropTypes) => {
    const releaseDate = comic.dates.find((date) => date.type === RELEASE_DATE);
    const releaseYear = releaseDate && new Date(releaseDate?.date).getFullYear();
  
    return {
        releaseYear,
    }
}

export default useLogic;