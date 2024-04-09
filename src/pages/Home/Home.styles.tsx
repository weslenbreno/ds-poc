import { styled } from "../../../stitches.config";

export const Fieldset = styled('fieldset', {
    all: 'unset',
    display: 'flex',
    gap: "$3",
    alignItems: 'center',
    marginBottom: "$4",
});

export const Label = styled('label', {
    fontSize: "$2",
    color: "$blackDark",
    width: "$10",
    textAlign: 'right',
});

export const Input = styled('input', {
    all: 'unset',
    width: '100%',
    flex: '1',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "$4",
    padding: '0 10px',
    fontSize: "$2",
    lineHeight: "$normal",
    color: "$blackNormal",
    height: "$6",
    backgroundColor: "$grayLight",
});

export const Flex = styled('div', { display: 'flex' });