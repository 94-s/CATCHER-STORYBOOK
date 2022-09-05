import { useState } from "react";
import styled from "styled-components";
import Colors from "../../../themes/color";
import headerLogo from "../../Icon/vectors/headerLogo.svg";
import Button from "../../Button/Button";
import InputText from "../../input/InputText";
const HeaderStyle = styled.header`
  height: 72px;
  /* background-color: teal; */
  .headerInner {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: inherit;
    border-bottom: 1px solid ${Colors.Gray300};
    background-color: #fff;

    .headerContents {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 960px;
      margin: 0 auto;
      > div {
        display: flex;
        align-items: center;
      }
      .left {
        .logo {
          cursor: pointer;
        }
        .menu {
          a {
            font-size: 16px;
            font-weight: 500;
            color: ${Colors.Gray800};
            margin-left: 64px;
            cursor: pointer;
          }
        }
      }
      .right {
        .searchBox {
          margin-right: 16px;
          width: 400px;
        }
        > button {
          width: 120px;
          font-weight: 400;
          border: 1px solid #e6e6e6;
        }
      }
    }
  }
`;

function Header() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <HeaderStyle>
        <div className="headerInner">
          <div className="headerContents">
            <div className="left">
              <div className="logo">
                <a href="/">
                  <img src={headerLogo} alt="헤더 로고" />
                </a>
              </div>
              <div className="menu">
                <a href="/">Shop</a>
                <a href="/">Chatting</a>
              </div>
            </div>
            <div className="right">
              <div className="searchBox">
                <InputText
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="찾는 상품이 있으신가요?"
                  search
                />
              </div>
              <Button color="sub">Sign In</Button>
            </div>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}

export default Header;
