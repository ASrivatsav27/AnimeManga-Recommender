
import { useEffect, useState } from "react";

const useAniManga = (type="",query = "") => {
 
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (!type) {
    setMedia([]);
    setLoading(false);
    return;
}

        const fetchMedia = async () => {
          
            try {
                setLoading(true);
                setError(null);


                const baseUrl = `https://api.jikan.moe/v4/${type}`; // type sets the parameter if we want either manga or anime
                const url = query
                    ? `${baseUrl}?q=${query}&limit=10` : `https://api.jikan.moe/v4/top/${type}?limit=15`;
            
                const res = await fetch(url);
                const data = await res.json();

        
                setMedia(data.data || []);


            
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }


        };


         
        fetchMedia();







    }, [type, query])
    



    return { media, loading, error };


















};

export default useAniManga