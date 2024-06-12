import { useDispatch, useSelector } from "react-redux";
import { decrease_count, increase_count } from "./redux/counter/counterSlice";

function Counter() {
  const color = useSelector(state=>state.color.value)
  const count = useSelector(state=>state.count.value)
  const dispatch =useDispatch()

  const increment=()=>{
    dispatch(increase_count())
  }
  const decrement=()=>{
    dispatch(decrease_count())
  }

  return (
    <div className="counter">
      <h2 style={{color}}>Counter : {count}</h2>

      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default Counter;
