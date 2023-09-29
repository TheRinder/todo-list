import { Card, Space } from "antd";
import { useAppDispatch } from "../../store";
import { setFaikToken } from "../../store/auth/authStore";
import { FieldAuthType } from "../../interface/Forms";
import { AuthForm } from "../../components/Forms/AuthForm";

export const AuthPage = () => {
  const dispatch = useAppDispatch();

  const onFinish = (values: FieldAuthType) => {
    if (values.password === "admin" && values.username === "admin") {
      localStorage.setItem("token", "123456789");
      dispatch(setFaikToken("123456789"));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <div className={'formAuthContainer'}
      >
        <Card>
          <AuthForm
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          />
        </Card>
      </div>
    </Space>
  );
};
