import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../redux/GreetingSlice/greetingSlice";

const Greetings = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.greetingstore) || [];
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
   
  return <div>{greeting.length > 0 && <h1>{greeting[0].message || 'hello world'}</h1>}</div>;
};
export default Greetings;
