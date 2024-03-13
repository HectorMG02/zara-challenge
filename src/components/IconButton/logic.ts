import { MouseEvent } from "react"

const useLogic = ({ onClick }: { onClick ?: (e: MouseEvent<HTMLButtonElement>) => void}) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick?.(e);
      };

      
    return {
        handleClick
    }
}

export default useLogic;