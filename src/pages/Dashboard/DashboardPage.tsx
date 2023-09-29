import { Page } from "../../components/Layout/Page";
import { TaskBox } from "../../components/TaskLine/TaskProgressBox";

const DashboardPage = () => {
  return (
    <Page>
      <TaskBox
        title="TO DO"
        onCreate={() => {
          console.log('create');
        }}
      />
      <TaskBox
        title="In Progress"
      />
      <TaskBox
        title="Done"
      />
    </Page >
  );
}

export default DashboardPage;