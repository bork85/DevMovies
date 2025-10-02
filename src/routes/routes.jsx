import { Route, Routes } from 'react-router'
import Series from '../containers/Series';
import Movies from '../containers/Movies';
import Home from '../containers/Home'
import DefaultLayout from '../layouts/DefaultLayout';

function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/filmes' element={<Movies />} />
                <Route path='/series' element={<Series />} />
            </Route>
        </Routes>
    )
}
export default Router;