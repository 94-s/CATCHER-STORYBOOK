import styled from "styled-components";
import Colors from "../../../themes/color";

interface ItemGroupProps {
  rowItem: number;
  roundItem?: boolean;
}

export interface CatherItemProps {
  data: [];
  rowItem: number;
  roundItem?: boolean;
}

const CatherItemGroupStyle = styled.div<ItemGroupProps>`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 960px;
  margin: 0 auto;
  > div {
    width: ${(props) =>
      `calc(100% /${props.rowItem} - ${(12 * (props.rowItem - 1)) / 3}px)`};
    .imgHolder {
      border-radius: ${(props) =>
        props.roundItem ? "4px 4px 80px 4px" : "4px"};
    }
  }
`;

const CatherItemStyle = styled.div`
  .imgHolder {
    background-color: gray;
    aspect-ratio: 1/1;
    margin-bottom: 8px;
  }
  h5 {
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${Colors.Gray700};
  }
  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    font-weight: 700;
    color: ${Colors.Gray800};
  }
  div {
    span {
      font-size: 1.8rem;
      line-height: 3rem;
      font-weight: 700;
      color: ${Colors.black};
      margin-right: 4px;
    }
    i {
      font-size: 1.2rem;
      line-height: 1.8rem;
      font-weight: 500;
      color: ${Colors.Gray600};
    }
  }
`;

function CatherItem(props: CatherItemProps) {
  return (
    <>
      <CatherItemGroupStyle rowItem={props.rowItem} roundItem={props.roundItem}>
        {props.data.map((item, index) => {
          return (
            <CatherItemStyle key={item}>
              <div className="imgHolder"></div>
              <h5>Maison Margiela</h5>
              <p className="ellipsis">마르지엘라 게더링 폴더 후드집업</p>
              <div>
                <span>349,000</span>
                <i>원</i>
              </div>
            </CatherItemStyle>
          );
        })}
      </CatherItemGroupStyle>
    </>
  );
}

export default CatherItem;
