import { Button, Layout } from "antd"
import { useAppDispatch } from "../../store";
import { logout } from "../../store/auth/authStore";

export const Page = ({ children }: { children: React.ReactNode }) => {
  const { Header, Content, Footer } = Layout;
  const dispatch = useAppDispatch();

  return (
    <Layout className="layoutContainer">
      <Header>
        <Button
          type="primary"
          ghost
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </Button>
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>
        <p>
          ©2023 Created by Rinder
        </p>
      </Footer>
    </Layout>
  )
}