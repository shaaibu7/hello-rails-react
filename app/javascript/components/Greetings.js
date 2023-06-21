import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/GreetingSlice/greetingSlice";

const Greetings = () => {
  const dispatch = useDispatch();
  const { isLoading, greeting } = useSelector((state) => state.greetings.greetingstore);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{(greeting && greeting) || "Hello world"}</h1>
      <button onClick={() => dispatch(fetchGreeting())}>change greeting</button>
    </div>
  );
};
export default Greetings;
