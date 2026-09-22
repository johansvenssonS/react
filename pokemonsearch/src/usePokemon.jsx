import { useEffect, useState } from "react";

function usePokemon(searchTerm) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const searched = searchTerm;
        let completeUrl = url + searched;
        console.log(completeUrl);
        const response = await fetch(completeUrl);
        if (response.status === 200) {
          setData(await response.json());
          console.log(data);
          setLoading(false);
          setError(false);
        } else {
          setError(true);
          setLoading(false);
        }
      } catch (e) {
        console.log("error", e);
      }
    };
    fetchData();
  }, [searchTerm]);

  return (data, loading, error);
}

export default usePokemon;
