/*
 * <pre>
 * @title RegisterPage.js
 * @desc 등록화면
 * </pre>
 *
 * @author yunrap
 * @since 2022.07.18 20:39:52
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2022.07.18.  yunrap  최초작성
 */
import AuthTemplate from "../components/auth/AuthTemplate";
import AuthForm from "../components/auth/AuthForm";
export default function RegisterPage() {
  return (
    <AuthTemplate>
      <AuthForm type="register"></AuthForm>
    </AuthTemplate>
  );
}
