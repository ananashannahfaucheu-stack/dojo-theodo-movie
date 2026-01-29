import styles from "./MovieCatalog.module.css";

import GenreList from "../GenreList/GenreList";
import MoviePreview from "../MoviePreview/MoviePreview";
import { mockMovie } from "../../mock/mockMovie";

export const MovieCatalog = ({ text }: { text: string }) => {
  return (
    <>
      <GenreList />
      <div className={styles.layout}></div>
      <MoviePreview movie={mockMovie}/>
    </>
  );
};
