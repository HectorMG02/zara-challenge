import { FC, PropsWithChildren } from 'react';
import { PropTypes } from './types';
import { S } from './styles';

const Text: FC<PropsWithChildren<PropTypes>> = ({ level, children, ...props }) => {
  const asTarget = ['h1', 'h2'].includes(level) ? level : 'p';

  return (
    <S.NativeText level={level} as={asTarget} {...props}>
      {children}
    </S.NativeText>
  );
};

export default Text;