import styled from 'styled-components';
import Colors from '../../../themes/color';
import notionLogo from '../../Icon/vectors/notionLogo.svg';
import headerLogo from '../../Icon/vectors/headerLogo.svg';

const FooterStyle = styled.footer`
  height: 40px;
  .footerInner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: inherit;
    padding: 0 40px;
    border-top: 1px solid ${Colors.Gray400};
    background-color: #fff;
    > div {
      display: flex;
      align-items: center;
    }
    .left {
      a {
        font-size: 12px;
        color: ${Colors.Gray700};
        &:not(:last-of-type) {
          margin-right: 32px;
        }
      }
    }
    .right {
      a {
        display: flex;
        align-items: center;
        &:not(:last-of-type):after {
          content: '';
          display: inline-block;
          width: 1px;
          height: 16px;
          background-color: ${Colors.Gray300};
          margin: 0 24px;
        }
      }
      .notionLogo {
        img {
          width: 20px;
          height: 20px;
        }
      }
      .catherLogo {
        img {
          width: 54px;
          height: 24px;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyle>
      <div className='footerInner'>
        <div className='left'>
          <a href='/'>공지사항</a>
          <a href='/'>이용약관</a>
          <a href='/'>개인정보취급방침</a>
          <a href='/'>자주묻는질문</a>
          <a href='/'>기능제안</a>
        </div>
        <div className='right'>
          <a href='/' className='notionLogo'>
            <img src={notionLogo} alt='notion logo' />
          </a>
          <a href='/' className='catherLogo'>
            <img src={headerLogo} alt='catcher logo' />
          </a>
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;
