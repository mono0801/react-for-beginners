import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [movieDetails, setmovieDetails] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setmovieDetails(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <MovieDetail
                        key={movieDetails.id}
                        title={movieDetails.title}
                        coverImg={movieDetails.medium_cover_image}
                        rating={movieDetails.rating}
                        genres={movieDetails.genres}
                        description={movieDetails.description_intro}
                    />
                </div>
            )}
        </div>
    );
}

export default Detail;
