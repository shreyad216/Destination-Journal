import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import AllPlaces from './pages/AllPlaces';
import NewPlaces from './pages/NewPlaces';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<AllPlaces />} />
        <Route path='/add-place' element={<NewPlaces />} />
      </Routes>
    </Layout>
  );
}

export default App;