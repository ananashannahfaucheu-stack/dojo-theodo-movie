import styles from "./MovieCatalog.module.css";

import GenreList from "../GenreList/GenreList";
import MoviePreview from "../MoviePreview/MoviePreview";
import { mockMovie } from "../../mock/mockMovie";
import { useInfiniteQuery } from 'react-query';
import { getMovies } from "../../services/movieService";



export const MovieCatalog = ({ text }: { text: string }) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["getMovies"],
    queryFn: ({ pageParam = 1 }) => getMovies(pageParam),
    
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
  return (
    <>
      <GenreList />
      <div className={styles.layout}></div>
      {data?.pages.map((page) => (
          // 2. Pour chaque page, on boucle sur les films
          page.map((movie) => (
            <MoviePreview key={movie.id} movie={movie} />
          ))
        ))}
      </>
  );
};


