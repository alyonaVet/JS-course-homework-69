import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {NavLink} from 'react-router-dom';

const Autocomplete = () => {

  const searchResults = useSelector((state: RootState) => state.shows.searchResults);

  return (
    <div className="list-group mt-4 w-50">
      {searchResults.map((result) => (
        <NavLink key={result.id} to={`/${result.id}`} className="list-group-item list-group-item-action">{result.name}</NavLink>
      ))}
    </div>
  );
};

export default Autocomplete;