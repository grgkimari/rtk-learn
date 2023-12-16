import {useDispatch, useSelector} from 'react-redux'
import { cakeActions } from './CakeSlice';
const CakeView = () => {
  const numberOfCakes = useSelector((state) => {
    return state.cake.numberOfCakes
  })
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes : {numberOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered(1))}>Order 1 Cake</button>
      <button onClick={() => dispatch(cakeActions.restocked(1))}>Restock 1 Cake</button>
    </div>
  );
};

export default CakeView;
