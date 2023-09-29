import { Button, Modal } from "antd"
import { useAppDispatch, useAppSelector } from "../../store";
import { onClose, onSave, selectDashboardState } from "../../store/dashboard/dashboard";
import React from "react";
import { Task } from "../../interface/Task";

export const ModalForm = () => {
  const { activeTask } = useAppSelector(selectDashboardState);
  const dispatch = useAppDispatch();

  const [initialData, setInitialData] = React.useState<Task | undefined>()

  const isOpenModal: boolean = React.useMemo(() => {
    if (!!activeTask) {
      return true;
    }
    return false;
  }, [activeTask])

  const handleOk = () => {
    if (initialData) {
      dispatch(onSave(initialData));
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
    >

    </Modal>
  )
}