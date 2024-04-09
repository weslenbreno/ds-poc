export type PropsWithChildren = {
    children: React.ReactNode;
}

export type DialogContentProps = {
    title: string;
    description: string;
} & PropsWithChildren;