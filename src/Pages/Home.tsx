import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLaunches } from "../features/launches/launchesSlices";

const Home = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state: any) => state.launches.launches);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setLaunches(data));
      });
  }, []);
  return <div></div>;
};

export default Home;
