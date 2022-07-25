/*
 * <pre>
 * @title LoginForm.js
 * @desc auth 컨테이너 생성
 * </pre>
 *
 * @author yunrap
 * @since 2022.07.25 22:39:34
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2022.07.25.  yunrap  최초작성
 */

import React, { useEffect } from "react";
import AuthForm from "../../components/auth/AuthForm";
import { useDispatch } from "react-redux";

const onChange = (e) => {
  const { name, value } = e.target;
  console.log(name);
  console.log(value);
};

useEffect(() => {
  dispatch(initial);
}, [dispatch]);

const LoginForm = () => {
  return <AuthForm type="login" onChange={onChange}></AuthForm>;
};

export default LoginForm;
