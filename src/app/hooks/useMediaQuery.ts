import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    if (mediaQuery.matches !== matches) {
        setMatches(mediaQuery.matches);
    }

    const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
    }, [matches, query]);

    return matches;
};

export default useMediaQuery;