import { Route, Routes } from 'react-router'
import Series from '../containers/Series';
import Movies from '../containers/Movies';
import Home from '../containers/Home'

function Router(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/filmes' element={<Movies />} />
            <Route path='/series' element={<Series />} />
        </Routes>
    )
}
export default Router;