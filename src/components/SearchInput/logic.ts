import { ChangeEvent } from "react";
import { PropTypes } from "./types";

const useLogic = ({ onChange }: PropTypes) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
      };
    
    return {handleChange};
}

export default useLogic;
