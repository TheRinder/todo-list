import { Button, Card, Col, Row, Space, Typography } from "antd";
import { Task } from "../../interface/Task";
import dayjs from "dayjs";
import { useAppDispatch } from "../../store";
import { taskChange } from "../../store/dashboard/dashboard";

interface TaskBoxProps {
  title: string;
  list?: Task[];
  onCreate?: () => void;
}

export const TaskBox = (props: TaskBoxProps) => {
  const { title, list, onCreate } = props;
  const dispatch = useAppDispatch();

  return (
    <Space direction="vertical" className="dashboardContainer">
      <Row justify="space-between" align="middle">
        <Col span={4}>
          <Typography.Title level={3}>{title}</Typography.Title>
        </Col>
        {!!onCreate && (
          <Col>
            <Button onClick={onCreate}>Create task</Button>
          </Col>
        )}
      </Row>
      <Space style={{ overflow: "auto", maxWidth: "100%" }}>
        {list &&
          list.map((item) => (
            <Card
              key={item.id}
              title={`Task: ${item.id}`}
              extra={
                <Button onClick={() => dispatch(taskChange(item))}>Edit</Button>
              }
              style={{ width: 300 }}
            >
              <p>Description:</p>
              <p>{item.description}</p>
              <p>Date: {`${dayjs(item.date, "YYYY-MM-DD")}`}</p>
            </Card>
          ))}
      </Space>
    </Space>
  );
};
