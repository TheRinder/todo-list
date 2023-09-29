import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task, TaskStatus } from "../../interface/Task";
import { RootState } from "..";

interface DashboardState {
  taskList: Task[];
  activeTask?: Task;
}

const initialState: DashboardState = {
  taskList: [],
};

export const dashboardSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    taskChange: (state, action: PayloadAction<Task>) => {
      state.activeTask = action.payload;
    },
    createTask: (state) => {
      state.activeTask = {
        id: state.taskList.length,
        status: "todo",
        description: "",
        date: new Date().toISOString(),
      };
    },
    onClose: (state) => {
      state.activeTask = undefined;
    },
    onSave: (state, action: PayloadAction<Task>) => {
      if (
        state.taskList.filter((item) => item.id === action.payload.id)
          .length === 0
      ) {
        state.taskList = [...state.taskList, action.payload];
        state.activeTask = undefined;
      }

      if (
        state.taskList.filter((item) => item.id === action.payload.id)
          .length === 1
      ) {
        const index = state.taskList.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          const newArr = [...state.taskList];
          newArr[index] = action.payload;
          
          state.taskList = newArr;
          state.activeTask = undefined;
        }
      }
    },
    descriptionHandler: (state, action: PayloadAction<string>) => {
      if (state.activeTask) state.activeTask.description = action.payload;
    },
    dateHandler: (state, action: PayloadAction<string>) => {
      if (state.activeTask) state.activeTask.date = action.payload;
    },
    statusHandler: (state, action: PayloadAction<TaskStatus>) => {
      if (state.activeTask) state.activeTask.status = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  taskChange,
  createTask,
  onClose,
  onSave,
  descriptionHandler,
  dateHandler,
  statusHandler,
} = dashboardSlice.actions;

export const selectDashboardState = (state: RootState) => state.dashboard;

export default dashboardSlice.reducer;
