import { keyframes } from '@stitches/react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { styled, theme } from '../../../stitches.config';

const VIEWPORT_PADDING = theme.space[4];

export const ToastViewport = styled(ToastPrimitive.Viewport, {
    position: 'fixed',
    top: '$0',
    right: '$0',
    display: 'flex',
    flexDirection: 'column',
    padding: VIEWPORT_PADDING,
    gap: '$2',
    width: 390,
    maxWidth: '$maxW',
    margin: '$0',
    listStyle: 'none',
    zIndex: '$max',
    outline: 'none',
});

export const ToastTitle = styled(ToastPrimitive.Title, {
    gridArea: 'title',
    marginBottom: '$2',
    fontWeight: "$bold",
    color: '$whiteDark',
    fontSize: '$2',
});

export const ToastDescription = styled(ToastPrimitive.Description, {
    gridArea: 'description',
    margin: '$2',
    color: '$whiteNormal',
    fontSize: '$1',
    lineHeight: '$medium',
});

export const hide = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 },
});

export const slideIn = keyframes({
    from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
    to: { transform: 'translateX(0)' },
});

export const swipeOut = keyframes({
    from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
    to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

export const ToastRoot = styled(ToastPrimitive.Root, {
    backgroundColor: '$greenNormal',
    borderRadius: '$1',
    boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    padding: '$3',
    display: 'grid',
    gridTemplateAreas: '"title action" "description action"',
    gridTemplateColumns: 'auto max-content',
    columnGap: '$3',
    alignItems: 'center',

    '&[data-state="open"]': {
        animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
        animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
        transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
        transform: 'translateX(0)',
        transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
        animation: `${swipeOut} 100ms ease-out`,
    },
});

