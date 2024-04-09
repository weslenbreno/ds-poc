import * as DialogPrimitive from '@radix-ui/react-dialog';
import { keyframes } from '@stitches/react';
import { styled } from '../../../stitches.config';

export const DialogTitle = styled(DialogPrimitive.Title, {
    margin: '$0',
    fontWeight: '$medium',
    color: '$blackDark',
    fontSize: '$3',
});

export const DialogDescription = styled(DialogPrimitive.Description, {
    margin: '$2 $0 $5',
    color: '$grayNormal',
    fontSize: '$2',
    lineHeight: '$medium',
});


export const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '$round',
    height: '$5',
    width: '$5',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '$blackDark',
    position: 'absolute',
    top: '$2',
    right: '$2',

    '&:hover': { backgroundColor: '$blackDark', color: '$whiteNormal' },
    '&:focus': { boxShadow: `$0 $0 $0 $2` },
});

export const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

export const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogOverlay = styled(DialogPrimitive.Overlay, {
    backgroundColor: '$blackDark',
    opacity: 0.5,
    position: 'fixed',
    inset: '$0',
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(DialogPrimitive.Content, {
    backgroundColor: 'white',
    borderRadius: 6,
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',
    padding: '$4',
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': { outline: 'none' },
});

