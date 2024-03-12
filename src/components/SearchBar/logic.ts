import { useEffect, useState } from "react";

const useLogic = ({ value }: { value : string }) => {
    const [inputValue, setInputValue] = useState<string>(value);

    useEffect(() => {
      setInputValue(value);
    }, [value]);
  

    return {
        inputValue,
        setInputValue,
    };
}

export default useLogic;
