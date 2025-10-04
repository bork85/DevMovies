import { useEffect, useState } from "react";
import api from "../../services/api";
import { Background, Container, ContainerButtons, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
//import Modal from "../../components/Modal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topPeople, setTopPeople] = useState();

  useEffect(() => {
    async function getMovies() {
      const { data: { results } } = await api.get('/movie/popular')
      setMovies(results[0]);
    }
    async function getTopMovies() {
      const { data: { results } } = await api.get('/movie/top_rated')
      setTopMovies(results);
    }
    async function getTopSeries() {
      const { data: { results } } = await api.get('/tv/top_rated')
      setTopSeries(results);
    }
    async function getPopularSeries() {
      const { data: { results } } = await api.get('/tv/popular')
      setPopularSeries(results);
    }
    async function getTopPeople() {
      const { data: { results } } = await api.get('/person/popular')
      setTopPeople(results);
    }
    getMovies();
    getTopMovies();
    getTopSeries();
    getPopularSeries();
    getTopPeople();
  }, [])
  return (
    <>
      {movies && (
        <Background img={getImages(movies.backdrop_path)}>
          {showModal && <Modal movieid={movies.id} setShowModal={setShowModal}/>}
          <Container>
            <Info>
              <h1>{movies.title}</h1>
              <p>{movies.overview}</p>
              <ContainerButtons>
                <Button type='red'>Assista Agora</Button>
                <Button 
                  type='white' 
                  onClick={ () => setShowModal(true)} >
                    Assista o Trailer
                </Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movies.poster_path)} alt='poster-filme' />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && (<Slider info={topMovies} titleCategory={'Top Filmes'} />)}
      {topSeries && (<Slider info={topSeries} titleCategory={'Top Séries'} />)}
      {popularSeries && (<Slider info={popularSeries} titleCategory={'Séries Populares'} />)}
      {topPeople && (<Slider info={topPeople} titleCategory={'Top Artistas'} />)}
    </>
  );
}
export default Home;
