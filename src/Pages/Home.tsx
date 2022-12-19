import type { MenuProps } from "antd";
import { Button, Card, Col, Dropdown, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, setUpcoming } from "../features/launches/FilterSlices";
import { setLaunches } from "../features/launches/launchesSlices";

const Home = () => {
  const dispatch = useDispatch();
  const { launches } = useSelector((state: any) => state.launches);
  const filter = useSelector((state: any) => state.filter);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => {
        dispatch(setLaunches(data));
      });
  }, []);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span>Last Week</span>,
    },
    {
      key: "2",
      label: <span>Last Month</span>,
    },
    {
      key: "3",
      label: <span>Last Year</span>,
    },
  ];
  return (
    <div style={{ marginTop: "20px" }}>
      <div
        style={{
          width: "32%",
          marginLeft: "auto",
          display: "flex",
          gap: "10px",
        }}
      >
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <Button type="primary">Launch Date</Button>
        </Dropdown>
        <Button
          type={filter?.status && "primary"}
          onClick={() => dispatch(setStatus(""))}
        >
          Status
        </Button>
        <Button type="primary" onClick={() => dispatch(setUpcoming(""))}>
          upcoming?
        </Button>
      </div>
      <Row style={{ width: "80%", margin: "10px auto" }} gutter={10}>
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
                    ? launch.details?.slice(0, 35)
                    : launch.details || "No Details"
                }...`}
              />
              <div>
                <p>{}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
