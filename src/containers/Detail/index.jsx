import { useEffect, useState } from "react";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { Background, Container, ContainerMovies, Cover, Info } from "./styles";
import { useParams } from "react-router";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slider from "../../components/Slider"

function Detail() {
  const [movieDetail, setMovieDetail] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  const { id } = useParams();

  useEffect(() => {
    async function getDetailData() {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, videos, credits, similar]) => {
          setMovieDetail(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));
    }
    getDetailData();
  }, []);

  return (
    <>
      {movieDetail && (
        <>
          <Background image={getImages(movieDetail.backdrop_path)} />
          <Container>
            <Cover>
              <img
                src={getImages(movieDetail.poster_path)}
                alt="poster-filme"
              />
            </Cover>
            <Info>
              <h2>{movieDetail.title}</h2>
              <SpanGenres genres={movieDetail.genres} />
              <p>{movieDetail.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h4>{video.name}</h4>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  />
                </div>
              ))}
          </ContainerMovies>
          {movieSimilar && <Slider info={movieSimilar} titleCategory={"Filmes similares recomendados"} />}
        </>
      )}
    </>
  );
}

export default Detail;
