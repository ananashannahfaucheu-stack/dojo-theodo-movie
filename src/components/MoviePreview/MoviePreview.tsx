import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({ movie }: { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };
  const imageUrl = `${POSTER_URL_PREFIX}${movie.poster_path}`;
  const rating = movie.vote_average.toFixed(1);
  return (
    <div className={styles.movieCard} onClick={goToMovieDetails}>
      {/* 1. L'image du film */}
      <img 
        src={imageUrl} 
        alt={`Affiche du film ${movie.title}`} 
        className={styles.moviePoster} // Pensez à styliser cette classe en CSS
      />

      {/* 2. Le titre (optionnel mais recommandé pour savoir ce qu'on clique) */}
      <div className={styles.movieInfo}>
        <h3>{movie.title}</h3>
      </div>
      <div className={styles.ratingContainer}>
          <span className={styles.ratingStar}>⭐</span>
          <span className={styles.ratingValue}>{rating} / 10</span>
      </div>
    </div>
  )
};

export default MoviePreview;
