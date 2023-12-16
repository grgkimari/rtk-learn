import { IcecreamActions } from './IcecreamSlice';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';
const IcecreamView = () => {
  const numberOfIcecreams = useAppSelector((state) => {
    return state.icecream.numberOfIcecreams
  })
  const dispatch = useAppDispatch()
    return (
      <div>
        <h2>Number of Icecreams : {numberOfIcecreams}</h2>
        <button  onClick={() => dispatch(IcecreamActions.ordered(1))}>Order 1 Icecream</button>
        <button onClick={() => dispatch(IcecreamActions.restocked(3))}>Restock 3 Icecream</button>
      </div>
    );
  };
  
  export default IcecreamView;
  