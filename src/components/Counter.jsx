import { useSelector } from "react-redux";
function Counter() {
  const color = useSelector(state=>state.color.value)
  return (
    <div className="counter">
      <h2 style={{color}}>Counter</h2>

      <button>Increase</button>
      <button>Decrease</button>
    </div>
  );
}

export default Counter;
