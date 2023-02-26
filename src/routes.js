import PaginaPadrao from 'components/PaginaPadrao';
import Rodape from 'components/Rodape';
import ScrollToTop from 'components/ScrollToTop';
import NotFound from 'pages/NotFound';
import Post from 'pages/Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './pages/Inicio'
import SobreMim from './pages/SobreMim'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <Menu />

        <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path='sobremim' element={<SobreMim />} />
        </Route>

          <Route path='posts/:id/*' element={<Post />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>

        <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
