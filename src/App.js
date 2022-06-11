import React from "react";
import Login from "./Login";
import HomeScreen from "./css/HomeScreen";
import { useSelector } from "react-redux";
import { selectCount } from "./features/userSlice";
function App() {
  const user = useSelector(selectCount);

  return <div className="App">{!user ? <Login /> : <HomeScreen />}</div>;
}

export default App;
