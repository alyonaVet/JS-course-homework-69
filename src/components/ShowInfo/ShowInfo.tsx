import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import {useEffect} from 'react';
import {fetchShow} from '../../containers/oneShowSlice';

const ShowInfo = () => {
  const {id} = useParams();
  const show = useSelector((state: RootState) => state.show.show);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchShow(id));
    }
  }, [dispatch]);

  const filmDescription = show.summary;

  return (
    <div className="containe d-flex mt-4">
      <div>
        <img src={show.image?.medium} alt={show.name}/>
      </div>
      <div className="ms-5">
        <div>
          <h3 className="">{show.name}</h3>
          <span>Country: {show.network?.country?.name || 'Unspecified'}</span>
        </div>
        <div className="mt-3 text-primary-emphasis">
          <span>Type: {show.type || 'Unspecified'}</span>
          <span className="ms-5">Language: {show.language || 'Unspecified'}</span>
          <span className="ms-5">Rating: {show.rating?.average || 'Unspecified'}</span>
        </div>
        <div className="mt-3">
          <div
            dangerouslySetInnerHTML={{__html: filmDescription}}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;