import { Input, Layout, Menu } from "antd";

const { Header } = Layout;
// const {} = Grid;
const Navbar = () => {
  return (
    <Layout className="mainLayout">
      <Header style={{ width: "80%", margin: "0 auto" }}>
        {/* <div className="container-fluid"> */}
        {/* <div className="header">
            <div className="logo">
              <a href="">launchTeamX</a>
            </div> */}
        <Menu
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="0">launchTeamX</Menu.Item>
          <Input.Search
            style={{ width: "60%" }}
            placeholder="input search text"
            enterButton
          />
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Cart</Menu.Item>
          <Menu.Item key="3">Dashboard</Menu.Item>

          {/* <Input.Search placeholder="input search text" enterButton /> */}
        </Menu>
        {/* </div>
        </div> */}
      </Header>
    </Layout>
  );
};

export default Navbar;
