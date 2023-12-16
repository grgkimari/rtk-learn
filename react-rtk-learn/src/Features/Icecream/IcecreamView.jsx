import {useDispatch, useSelector} from 'react-redux'
import { IcecreamActions } from './IcecreamSlice';
const IcecreamView = () => {
  const numberOfIcecreams = useSelector((state) => {
    return state.icecream.numberOfIcecreams
  })
  const dispatch = useDispatch()
    return (
      <div>
        <h2>Number of Icecreams : {numberOfIcecreams}</h2>
        <button  onClick={() => dispatch(IcecreamActions.ordered(1))}>Order 1 Icecream</button>
        <button onClick={() => dispatch(IcecreamActions.restocked(3))}>Restock 3 Icecream</button>
      </div>
    );
  };
  
  export default IcecreamView;
  