import { useEffect, useState } from "react";
import {
  Background,
  Container,
  ContainerButtons,
  Info,
  Poster,
} from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router";
import {
  getMovies,
  getPopularSeries,
  getTopMovies,
  getTopPeople,
  getTopSeries,
} from "../../services/getData";
//import Modal from "../../components/Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllData() {
      Promise.all([
        getMovies(),
        getPopularSeries(),
        getTopMovies(),
        getTopPeople(),
        getTopSeries(),
      ])
        .then(([movies, popularSeries, topMovies, topPeople, topSeries]) => {
          setMovies(movies);
          setPopularSeries(popularSeries);
          setTopMovies(topMovies);
          setTopPeople(topPeople);
          setTopSeries(topSeries);
        })
        .catch((error) => console.error(error));
    }
    getAllData();
  }, []);
  return (
    <>
      {movies && (
        <Background img={getImages(movies.backdrop_path)}>
          {showModal && (
            <Modal movieid={movies.id} setShowModal={setShowModal} />
          )}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button
                  type="red"
                  onClick={() => navigate(`/detalhes/${movies.id}`)}
                >
                  Assista Agora
                </Button>
                <Button type="white" onClick={() => setShowModal(true)}>
                  Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movies.poster_path)} alt="poster-filme" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} titleCategory={"Top Filmes"} />}
      {topSeries && <Slider info={topSeries} titleCategory={"Top Séries"} />}
      {popularSeries && (
        <Slider info={popularSeries} titleCategory={"Séries Populares"} />
      )}
      {topPeople && <Slider info={topPeople} titleCategory={"Top Artistas"} />}
    </>
  );
}
export default Home;
