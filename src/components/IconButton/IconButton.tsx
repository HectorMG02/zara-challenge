import { FC } from 'react';
import { ICON_SIZE, PropTypes } from './types';
import { StyledButton } from './styles';
import useLogic from './logic';

export const IconButton: FC<PropTypes> = ({ onClick, icon: Icon, size = ICON_SIZE.MEDIUM, ...props }) => {
  const { handleClick } = useLogic({ onClick })

  return (
    <StyledButton onClick={handleClick}
    data-testid="icon-button"
    size={size} {...props}>
      <Icon />
    </StyledButton>
  );
};