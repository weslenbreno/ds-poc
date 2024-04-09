import { SwipeDirection } from "@radix-ui/react-toast";

export type ToastProps = {
    open: boolean;
    onOpenChange(open: boolean): void;
    children: React.ReactNode;
    direction?: SwipeDirection;
};