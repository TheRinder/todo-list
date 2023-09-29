import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../interface/Task";
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
      state.taskList = [...state.taskList, action.payload];
      state.activeTask = undefined;
    },
  },
  extraReducers: (builder) => {},
});

export const { taskChange, createTask, onClose, onSave } =
  dashboardSlice.actions;

export const selectDashboardState = (state: RootState) => state.dashboard;

export default dashboardSlice.reducer;
