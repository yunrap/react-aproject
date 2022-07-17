/*
 * <pre>
 * @title Button.js
 * @desc Button 공통컴포넌트 생성
 * </pre>
 *
 * @author yunrap
 * @since 2022.07.17 17:28:10
 * @version 0.1.0
 * @see =================== 변경 내역 ==================
 *   날짜       변경자     내용
 *  2022.07.17.  yunrap  최초작성
 */

import styled from "styled-components";
import palette from "../../lib/styles/palette";
const StyledButton = styled.button`
  border: none;
  boder-radis: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

export default function Button(props) {
  return (
    <div>
      <StyledButton {...props}></StyledButton>
    </div>
  );
}
