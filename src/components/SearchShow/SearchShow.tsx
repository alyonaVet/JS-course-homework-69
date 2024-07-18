import React, {useState} from 'react';

const SearchShow = () => {
  const [searchString, setSearchString] = useState('');

  return (
    <div className="row mt-5">
      <label htmlFor="search" className="col-sm-2 col-form-label">Search for TV Show</label>
      <div className="col-sm-10">
        <input
          className="form-control w-50"
          type="text"
          name="search"
          id="search"
          onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {setSearchString(ev.target.value)}}
          value={searchString}
        />
      </div>
    </div>
  );
};

export default SearchShow;