import { violet } from "@radix-ui/colors";
import { styled } from "../stitches.config";

export const Fieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    marginBottom: 15,
});

export const Label = styled('label', {
    fontSize: 15,
    color: violet.violet11,
    width: 90,
    textAlign: 'right',
});

export const Input = styled('input', {
    all: 'unset',
    width: '100%',
    flex: '1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    padding: '0 10px',
    fontSize: 15,
    lineHeight: 1,
    color: violet.violet11,
    boxShadow: `0 0 0 1px ${violet.violet7}`,
    height: 35,

    '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

export const Flex = styled('div', { display: 'flex' });