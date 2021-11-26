import { useEffect, useState } from "react";

const useNavbarClick = (ref) => {
    const [isClicked, setIsClicked] = useState();

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsClicked(true);
            } else {
                setIsClicked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    return isClicked;
}

export default useNavbarClick;
