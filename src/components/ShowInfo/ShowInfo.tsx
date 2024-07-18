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
    if(id !== undefined) {
      dispatch(fetchShow(id));
    }
  }, [dispatch]);


  return (
    <div className="container">
      <h4>{show.name}</h4>
      <img src={show.image.medium} alt="" />
    </div>
  );
};

export default ShowInfo;