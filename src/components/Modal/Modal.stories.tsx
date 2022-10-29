/**@jsxImportSource @emotion/react */

import { Meta } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import Button from '../../general/Button/Button';

export default {} as Meta<ModalProps>;

export const Base = (args: ModalProps) => {
  return (
    <>
      <Button onChange={() => {}} />
      <Modal />
    </>
  );
};
