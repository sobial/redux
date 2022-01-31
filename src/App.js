import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const authState = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!authState && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
