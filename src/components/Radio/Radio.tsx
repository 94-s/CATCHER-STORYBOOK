import React from 'react';
import styled from 'styled-components';
import Colors from '../../themes/color';

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  name?: string;
  checked?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (p, ref) => (
    <>
      <RadioxModel>
        <input
          ref={ref}
          type='radio'
          {...p}
          disabled={p.disabled}
          name={p.name}
          checked={p.checked}
        />
        <label htmlFor={p.id}>
          <i /> <span>{p.label}</span>
        </label>
      </RadioxModel>
    </>
  )
);

export default Radio;

const RadioxModel = styled.div<RadioProps>`
  input[type='radio'] {
  }
  label {
    display: flex;
    align-items: center;
    user-select: none;
    cursor: pointer;
    i {
      position: relative;
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 1px solid ${Colors.Gray500};
      border-radius: 50%;
      background-color: #fff;
      vertical-align: middle;
      background-position: center;
      background-repeat: no-repeat;
      transition: 0.21s;
      margin-right: 8px;
      &:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 50%;
        transition: background-color 0.21s;
      }
    }
    span {
      font-size: 1.4rem;
      line-height: 2rem;
      font-weight: 500;
      color: ${Colors.Gray800};
      vertical-align: middle;
      transition: 0.21s;
    }
  }
  input[type='radio']:checked + label {
    i {
      border: 1px solid ${Colors.mainColor};
      background-color: ${Colors.mainColor};
    }
  }

  input[type='radio']:disabled + label {
    cursor: not-allowed;
    i {
      border: 1px solid ${Colors.Gray500};
      background-color: ${Colors.Gray500};
    }
    span {
      font-size: 1.4rem;
      color: ${Colors.Gray500};
    }
  }
`;
