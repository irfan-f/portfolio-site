import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import mahjongImage from '../../photos/mahjong-logo.png';
import Button from '../interactive/Button';
import ModalWrapper from './ModalWrapper';

const imgAlt = 'A logo of Mahjong with Friends';

interface MahjongModalProps extends React.HTMLAttributes<HTMLElement> {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MahjongModal: FC<MahjongModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <ModalWrapper title="Mahjong with Friends" isOpen={isOpen} setIsOpen={setIsOpen}>
      <p>Stuff goes here</p>
    </ModalWrapper>
  );
};

export default MahjongModal;
