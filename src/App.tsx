import Toolbar from './components/Toolbar/Toolbar';
import SearchShow from './components/SearchShow/SearchShow';
import Autocomplete from './components/Autocomplete/Autocomplete';
import {Route, Routes} from 'react-router-dom';
import ShowInfo from './components/ShowInfo/ShowInfo';

const App = () => {
    return (
        <>
          <header>
            <Toolbar />
          </header>
          <main className="container">
            <SearchShow />
            <Routes>
              <Route path="/" element={<Autocomplete />} />
              <Route path="/:id" element={<ShowInfo />} />
            </Routes>
          </main>
        </>
    );
};

export default App;
