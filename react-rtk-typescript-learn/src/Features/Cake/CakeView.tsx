import { cakeActions } from './CakeSlice';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';
const CakeView = () => {
  const numberOfCakes = useAppSelector((state) => {
    return state.cake.numberOfCakes
  })
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of cakes : {numberOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered(1))}>Order 1 Cake</button>
      <button onClick={() => dispatch(cakeActions.restocked(1))}>Restock 1 Cake</button>
    </div>
  );
};

export default CakeView;
