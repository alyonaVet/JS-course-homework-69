import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../app/store';
import {fetchShows} from '../../containers/showsSlice';
import {useLocation, useNavigate} from 'react-router-dom';

const SearchShow = () => {
  const [searchString, setSearchString] = useState('');

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchShows(searchString));
  }, [dispatch, searchString]);

  const changeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    setSearchString(ev.target.value);
  };

  return (
    <div className="row mt-5">
      <label htmlFor="search" className="col-sm-2 col-form-label fw-semibold">Search for TV Show</label>
      <div className="col-sm-10">
        <input
          className="form-control w-50"
          type="text"
          name="search"
          id="search"
          onChange={changeHandler}
          value={searchString}
        />
      </div>
    </div>
  );
};

export default SearchShow;