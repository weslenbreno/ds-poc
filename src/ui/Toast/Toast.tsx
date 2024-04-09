import * as React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { ToastDescription, ToastRoot, ToastTitle, ToastViewport } from './Toast.styles';
import { ToastProps } from './Toast.types';

const Root = ({ open, onOpenChange, children, direction = 'right' }: ToastProps) => {
    return (
        <ToastPrimitive.Provider swipeDirection={direction}>
            <ToastRoot open={open} onOpenChange={onOpenChange}>
                {children}
            </ToastRoot>
            <ToastViewport />
        </ToastPrimitive.Provider>
    );
};

export const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <ToastTitle>{children}</ToastTitle>
    );
}

export const Description = ({ children }: { children: React.ReactNode }) => {
    return (
        <ToastDescription>
            {children}
        </ToastDescription>
    );
}



export const Toast = Root as typeof Root & {
    Title: typeof Title;
    Description: typeof Description;
};

Toast.Title = Title;
Toast.Description = Description;
