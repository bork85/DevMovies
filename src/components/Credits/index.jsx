import { getImages } from "../../utils/getImages"
import { Container, Title } from "./styles"

const Credits = ({credits}) => {
  return (
    <>
        <Title>Créditos</Title>
        {credits && (
            <Container>
                {credits.slice(0, 5).map((artist) => (
                    <div key={artist.id}>
                        <img src={getImages(artist.profile_path)} alt={`imagem de ${artist.name}`} />
                        <p>{artist.name}</p>
                    </div>
                ))}
            </Container>)}
    </>
  )
}

export default Credits