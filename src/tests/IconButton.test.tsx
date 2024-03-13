import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { IconButton } from '../components/IconButton/IconButton';
import HeartFilledIcon from '../components/Icons/HeartFilledIcon';
import jest from 'jest-mock';


describe('IconButton', () => {
   it('should render the icon button', () => {
        render(<IconButton icon={() => <HeartFilledIcon />} />);
        const iconButton = screen.getByTestId('icon-button');
        expect(iconButton).toBeInTheDocument();
    })

    it('onClick function should be called', () => {
        const onClick = jest.fn();
        render(<IconButton icon={() => <HeartFilledIcon />} onClick={onClick} />);
        const iconButton = screen.getByTestId('icon-button');
        iconButton.click();
        expect(onClick).toBeCalled();
    })
})
