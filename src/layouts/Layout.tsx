import { Layout, Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
const { Header, Content, Footer } = Layout;

export default function MainLayout() {
  const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={[
            { key: "/", label: <Link to="/">Trang chủ</Link> },
            { key: "/about", label: <Link to="/about">Giới thiệu</Link> },
          ]}
        />
      </Header>
      <Content style={{ padding: "24px" }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Kids Doctor © {new Date().getFullYear()}
      </Footer>
    </Layout>
  );
}
