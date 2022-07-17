/*
 * <pre>
 * @title store.js
 * @desc 리듀서에 반환된 state를 store로 관리하는곳
 * </pre>
 *
 * @author yunrap
 * @since 2022.07.17 18:15:29
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2022.07.17.  yunrap  최초작성
 */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
