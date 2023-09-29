import { Page } from "../../components/Layout/Page";
import { TaskBox } from "../../components/TaskLine/TaskProgressBox";
import { useAppDispatch } from "../../store";
import { createTask } from "../../store/dashboard/dashboard";
import { ModalForm } from "./ModalForm";

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  return (
    <Page>
      <TaskBox
        title="TO DO"
        onCreate={() => {
          dispatch(createTask());
        }}
      />
      <TaskBox
        title="In Progress"
      />
      <TaskBox
        title="Done"
      />
      <ModalForm />
    </Page >
  );
}

export default DashboardPage;