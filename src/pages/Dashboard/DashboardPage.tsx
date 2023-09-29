import { Page } from "../../components/Layout/Page";
import { TaskBox } from "../../components/TaskLine/TaskProgressBox";
import { useAppDispatch, useAppSelector } from "../../store";
import { createTask, selectDashboardState } from "../../store/dashboard/dashboard";
import { ModalForm } from "./ModalForm";

const DashboardPage = () => {
  const { taskList } = useAppSelector(selectDashboardState)
  const dispatch = useAppDispatch();
  return (
    <Page>
      <TaskBox
        title="TO DO"
        onCreate={() => {
          dispatch(createTask());
        }}
        list={taskList.filter(item => item.status === 'todo')}
      />
      <TaskBox
        title="In Progress"
        list={taskList.filter(item => item.status === 'inProgress')}

      />
      <TaskBox
        title="Done"
        list={taskList.filter(item => item.status === 'done')}
      />
      <ModalForm />
    </Page >
  );
}

export default DashboardPage;