import { Button, Modal } from "antd"
import { useAppDispatch, useAppSelector } from "../../store";
import { onClose, onSave, selectDashboardState } from "../../store/dashboard/dashboard";
import React from "react";
import { TaskForm } from "../../components/Forms/TaskForm";

export const ModalForm = () => {
  const { activeTask } = useAppSelector(selectDashboardState);
  const dispatch = useAppDispatch();
  const [error, setError] = React.useState<string | undefined>();

  const isOpenModal: boolean = React.useMemo(() => {
    if (!!activeTask) {
      return true;
    }
    return false;
  }, [activeTask])

  const handleOk = () => {
    if (activeTask && activeTask.description.length !== 0) {
      setError(undefined);
      dispatch(onSave(activeTask));
    }
    if (activeTask && activeTask.description.length === 0) {
      setError('Error! Description requred');
    }
  };

  const handleCancel = () => {
    dispatch(onClose());
  };
  return (
    <Modal
      open={!!isOpenModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk}>
          Save
        </Button>,
      ]}
    >{
        activeTask
        && <TaskForm
          data={activeTask}
          warning={error}
        />
      }

    </Modal>
  )
}