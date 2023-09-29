import { Button, Card, Col, Row, Space, Typography } from "antd"

interface TaskBoxProps {
  title: string,
  list?: any[],
  onCreate?: () => void;
};

export const TaskBox = (props: TaskBoxProps) => {
  const { title, list, onCreate } = props;
  return (
    <Space direction="vertical" className="dashboardContainer">
      <Row justify="space-between" align="middle">
        <Col span={4}>
          <Typography.Title level={3}>
            {title}
          </Typography.Title>
        </Col>
        {
          !!onCreate
          && (
            <Col>
              <Button
                onClick={onCreate}>
                Create task
              </Button>
            </Col>
          )
        }
      </Row>
      <Space>
        <Card title="Default size card" extra={<Button>Edit</Button>} style={{ width: 300 }}>
          <p>Description:</p>
          <p>Text description</p>
          <p>Date: 21.06.2023</p>
        </Card>
      </Space>
    </Space>
  )
} 