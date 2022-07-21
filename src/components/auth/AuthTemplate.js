/*
 * <pre>
 * @title AuthTemplate.js
 * @desc 클래스 대한 설명
 * </pre>
 *
 * @author yunrap
 * @since 2022.07.18 20:23:08
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2022.07.18.  yunrap  최초작성
 */

import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link } from "react-router-dom";
const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radis: 2px;
`;

export default function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <AuthTemplateBlock>
        <WhiteBox>
          <div className="logo-area">
            <Link to="/">REACTERS</Link>
          </div>
          {children}
        </WhiteBox>
      </AuthTemplateBlock>
    </AuthTemplateBlock>
  );
}
