import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { Button } from '../Button';
import { DialogContent, DialogDescription, DialogOverlay, DialogTitle, IconButton } from './Dialog.styles';
import { DialogContentProps, PropsWithChildren } from './Dialog.types';

export const Root = ({ children }: PropsWithChildren) => (
    <DialogPrimitive.Root>
        {children}
    </DialogPrimitive.Root>
);

export const Trigger = ({ children }: PropsWithChildren) => (
    <DialogPrimitive.Trigger asChild>
        <Button>{children}</Button>
    </DialogPrimitive.Trigger>
);

export const Content = ({ children, title, description }: DialogContentProps) => (
    <DialogPrimitive.Portal>
        <DialogOverlay />
        <DialogContent>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
                {description}
            </DialogDescription>
            {children}
            <DialogPrimitive.Close asChild>
                <IconButton aria-label="Close">
                    <Cross2Icon />
                </IconButton>
            </DialogPrimitive.Close>
        </DialogContent>
    </DialogPrimitive.Portal>
);

export const Close = ({ children }: PropsWithChildren) =>
    <DialogPrimitive.Close asChild>
        {children}
    </DialogPrimitive.Close>

export const Dialog = Root as typeof Root & {
    Trigger: typeof Trigger;
    Content: typeof Content;
    Close: typeof Close;
};

Dialog.Trigger = Trigger;
Dialog.Content = Content;
Dialog.Close = Close;