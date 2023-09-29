import { DatePicker, Input, Select, Space, Typography } from "antd";
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import { Task, TaskStatus } from "../../interface/Task";
import { useAppDispatch } from "../../store";
import { dateHandler, descriptionHandler, statusHandler } from "../../store/dashboard/dashboard";
import warning from "antd/es/_util/warning";

export const TaskForm = (props: { data: Task, warning?: string }) => {
  const { date, description, status } = props.data
  const dispatch = useAppDispatch();

  const onChangeDate: DatePickerProps['onChange'] = (_, dateString) => {
    dispatch(dateHandler(dateString));
  };
  const onChangeDescription = (event: any) => {
    dispatch(descriptionHandler(event.target.value))
  }
  const handleChange = (event: TaskStatus) => {
    dispatch(statusHandler(event));
  }

  return (
    <Space direction="vertical" size="middle" style={{
      width: '100%',
      marginTop: 40
    }}>
      <Select
        defaultValue={status}
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: 'todo', label: 'ToDo' },
          { value: 'inProgress', label: 'In Progress' },
          { value: 'done', label: 'Done' },
        ]}
      />
      <Typography.Text type="secondary">Description</Typography.Text>
      <Input.TextArea
        required
        value={description}
        onChange={onChangeDescription}
        rows={4}
        autoSize={{ minRows: 5, maxRows: 5 }}
      />
      {
        props.warning
        && <Typography.Text type="warning">{props.warning}</Typography.Text>
      }

      <Typography.Text type="secondary">Date</Typography.Text>
      <DatePicker
        onChange={onChangeDate}
        defaultValue={dayjs(date, 'YYYY-MM-DD')}
      />
    </Space>
  )
}