import PropTypes from "prop-types";

function MovieDetail({ title, coverImg, rating, genres, description }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={coverImg} alt={title} />
            <p>Rating : {rating}</p>
            <ul>
                {genres?.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>{description}</p>
        </div>
    );
}

MovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
};

export default MovieDetail;
