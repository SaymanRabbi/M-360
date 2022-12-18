import { Card, Col, Row } from "antd";
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
  return (
    <div style={{ marginTop: "50px" }}>
      <Row style={{ width: "80%", margin: "0 auto" }} gutter={10}>
        {launches.map((launch: any) => (
          <Col span={8}>
            <Card
              style={{
                borderRadius: "10px",
                border: "1px solid #ccc",
                margin: "5px 0px",
                padding: "10px",
              }}
              cover={
                <img
                  style={{
                    width: "50%",
                    height: "50%",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    margin: "0 auto",
                  }}
                  src={launch.links.mission_patch_small}
                />
              }
            >
              <Card.Meta
                style={{ textAlign: "center", padding: "0 10px" }}
                title={launch.mission_name}
                description={`${
                  launch?.details?.length > 20
                    ? launch.details?.slice(0, 30)
                    : launch.details || "No Details"
                }...`}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
