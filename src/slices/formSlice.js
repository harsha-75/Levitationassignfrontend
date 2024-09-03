import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  step1: {},
  step2: [],
  step3: [],
  isCompleted: false,
  submissions: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep1: (state, action) => {
      state.step1 = action.payload;
    },
    setStep2: (state, action) => {
      state.step2 = action.payload;
    },
    setStep3: (state, action) => {
      state.step3 = action.payload;
    },
    setIsCompleted: (state, action) => {
      state.isCompleted = action.payload;
    },
    setSubmissions: (state, action) => {
      state.submissions = action.payload;
    },
    addSubmission: (state, action) => {
      state.submissions.push(action.payload);
    },
  },
});

export const { setStep1, setStep2, setStep3, setIsCompleted, setSubmissions, addSubmission } = formSlice.actions;

export const submitForm = (formData) => async (dispatch) => {
  try {
    await axios.post('/api/form/submit', formData);
    dispatch(setIsCompleted(true));
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

export const fetchSubmissions = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/form/submissions');
    dispatch(setSubmissions(response.data));
  } catch (error) {
    console.error('Error fetching submissions:', error);
  }
};

export default formSlice.reducer;
