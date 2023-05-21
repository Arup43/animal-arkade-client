import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `AnimalArkade | ${title}`;
    }, [title]);
};

export default useTitle;