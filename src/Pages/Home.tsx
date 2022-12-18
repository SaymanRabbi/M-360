import { Card, Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLaunches } from "../features/launches/launchesSlices";

const Home = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state: any) => state.launches.launches);
  console.log(launches);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setLaunches(data));
      });
  }, []);
  return (
    <div>
      <Row style={{ width: "80%", margin: "0 auto" }} gutter={10}>
        {launches.map((launch: any) => (
          <Col span={8}>
            <Card
              cover={
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    backgroundPosition: "center",
                  }}
                  src={launch.links.mission_patch_small}
                />
              }
            >
              <Card.Meta
                title={launch.mission_name}
                description={launch.details?.slice(0, 30) + "..."}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
