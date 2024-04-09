import { styled } from "../../../stitches.config.ts";

export const Button = styled('button', {
    all: 'unset',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "$1",
    paddingX: 15,
    paddingY: 0,
    fontSize: "$2",
    lineHeight: "$normal",
    fontWeight: "$medium",
    height: "$6",

    variants: {
        variant: {
            violet: {
                backgroundColor: "$whiteNormal",
                color: "$blackDark",
                boxShadow: `0 2px 10px $blackNormal`,
                '&:hover': { backgroundColor: "$blueNormal", color: "$whiteDark" },
                '&:focus': { boxShadow: `0 0 0 2px $blackNormal` },
            },
            blue: {
                backgroundColor: "$blueNormal",
                color: "$whiteNormal",
                '&:hover': { backgroundColor: "$blueDark" },
                '&:focus': { boxShadow: "0 0 0 2px $blueDark" },
            },
        },
    },

    defaultVariants: {
        variant: 'violet',
    },
});