import { useEffect, useState } from "react";
import { Background, Container } from "./styles";
import api from "../../services/api";

function Modal({ movieid, setShowModal }) {
    const [movie, setMovie] = useState();
    useEffect(() => {
        async function getMovies() {            
            const { data: { results } } = await api.get(`/movie/${movieid}/videos`)
            setMovie(results[0]);
        }
        getMovies(movie)
    }, [])
    return (
        <Background onClick={() => setShowModal(false)}> 
            {movie && (
                <Container>
                    <p onClick={()=> setShowModal(false)}>Fechar[X]</p>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title='Youtube Video Player'
                        height="500px"
                        width="100%" />
                </Container>
            )}
        </Background>
    )
}
export default Modal;