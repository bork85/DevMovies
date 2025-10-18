import { useEffect, useState } from "react";
import { Background, Container } from "./styles";
import { getMovieVideos } from "../../services/getData";

function Modal({ movieid, setShowModal }) {
    const [movie, setMovie] = useState();
    useEffect(() => {
        async function getMovie() {
            setMovie(await getMovieVideos(movieid));
        }
        getMovie()
    }, [])
    return (
        <Background onClick={() => setShowModal(false)}> 
            {movie && (
                <Container>
                    <p onClick={()=> setShowModal(false)}>Fechar[X]</p>
                    <iframe
                        src={`https://www.youtube.com/embed/${movie[0].key}`}
                        title='Youtube Video Player'
                        height="500px"
                        width="100%" />
                </Container>
            )}
        </Background>
    )
}
export default Modal;