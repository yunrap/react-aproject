/*
 * <pre>
 * @title auth.js
 * @desc auth 모듈생성 (redux toolkit적용 ), counterSlice api사용
 * </pre>
 *
 * @author yunrap
 * @since 2022.07.17 17:27:11
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2022.07.17.  yunrap  최초생성
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    sample_action: (state) => {
      state.action = "auth/SAMPLE_ACTION";
    },
    initialize_form: (state, { payload: form }) => ({
      ...state,
      [form]: initialState(form),
    }),
  },
});

export const { sample_action, initialize_form } = authSlice.actions;

export default authSlice.reducer;
