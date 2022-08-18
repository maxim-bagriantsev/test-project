import { IProduct } from '../../models/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CoursesStateType = {
  isCoursesLoading: boolean
  courses: IProduct[]
  error: string
}


const initialState: CoursesStateType = {
  isCoursesLoading: false,
  courses: [],
  error: '',
};

export const mbaSlice = createSlice({
  name: 'mba',
  initialState,
  reducers: {
    getCourses(state: CoursesStateType, action: PayloadAction<IProduct[]>) {
      state.courses = action.payload;
    },
  },
  extraReducers: {
    // [getCourses.pending.type]: (state: CoursesStateType) => {
    //   state.isCoursesLoading = true;
    // },
    // [getCourses.fulfilled.type]: (state: CoursesStateType, action: PayloadAction<IProduct[]>) => {
    //   state.courses = action.payload
    //   state.error = ''
    //   state.isCoursesLoading = true;
    // },
    // [getCourses.reject.type]: (state: CoursesStateType, action: PayloadAction<string>) => {
    //   state.error = action.payload
    //   state.isCoursesLoading = false
    // },
  },
});

export const mbaActions = mbaSlice.actions;
export const mbaReducer = mbaSlice.reducer;