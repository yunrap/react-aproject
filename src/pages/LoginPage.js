/*
 * <pre>
 * @title LoginPage.js
 * @desc 로그인화면
 * </pre>
 *
 * @author yunrap
 * @since 2022.07.18 20:39:29
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2022.07.18.  yunrap  최초작성
 */

import AuthTemplate from "../components/auth/AuthTemplate";
import LoginForm from "../containers/auth/LoginForm";
export default function LoginPage() {
  const onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(name);
  };

  return (
    <AuthTemplate>
      <LoginForm></LoginForm>
    </AuthTemplate>
  );
}
