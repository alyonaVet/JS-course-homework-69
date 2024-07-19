import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';

const Toolbar = () => {
  const showLoading = useSelector((state: RootState) => state.show.loading);
  const searchResultsLoading = useSelector((state: RootState) => state.shows.loading);

  return (
    <nav className="navbar navbar-expand-lg bg-primary bg-gradient">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <NavLink to="/" className="navbar-brand text-white">
            TV Shows {(showLoading || searchResultsLoading) ? '- loading...' : ''}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;