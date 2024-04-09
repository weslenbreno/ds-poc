import { createStitches } from "@stitches/react";
import type * as Stitches from '@stitches/react';

export const { styled, theme } = createStitches({
    theme: {
        colors: {
            // Black
            blackLight: "hsl(0, 0%, 88%)",
            blackNormal: "hsl(0, 0%, 13%)",
            blackDark: "hsl(0, 0%, 0%)",

            // Gray
            grayLight: "hsl(0, 0%, 96%)",
            grayNormal: "hsl(0, 0%, 50%)",
            grayDark: "hsl(0, 0%, 38%)",

            // White
            whiteLight: "hsl(0, 0%, 100%)",
            whiteNormal: "hsl(0, 0%, 100%)",
            whiteDark: "hsl(0, 0%, 98%)",

            // Blue
            blueLight: "hsl(208, 100%, 93%)",
            blueNormal: "hsl(208, 100%, 50%)",
            blueDark: "hsl(208, 100%, 18%)",

            // Red
            redLight: "hsl(0, 100%, 94%)",
            redNormal: "hsl(0, 100%, 58%)",
            redDark: "hsl(0, 100%, 42%)",

            // Green
            greenLight: "hsl(120, 77%, 91%)",
            greenNormal: "hsl(122, 39%, 49%)",
            greenDark: "hsl(122, 39%, 30%)",

            // Yellow
            yellowLight: "hsl(54, 100%, 94%)",
            yellowNormal: "hsl(54, 100%, 61%)",
            yellowDark: "hsl(54, 100%, 50%)",

            // Purple
            purpleLight: "hsl(261, 56%, 92%)",
            purpleNormal: "hsl(282, 59%, 40%)",
            purpleDark: "hsl(282, 59%, 31%)",

            // Orange
            orangeLight: "hsl(37, 100%, 94%)",
            orangeNormal: "hsl(33, 100%, 50%)",
            orangeDark: "hsl(33, 100%, 39%)",

            // Teal
            tealLight: "hsl(174, 26%, 95%)",
            tealNormal: "hsl(174, 100%, 38%)",
            tealDark: "hsl(174, 100%, 30%)",

            // Pink
            pinkLight: "hsl(340, 67%, 93%)",
            pinkNormal: "hsl(340, 71%, 45%)",
            pinkDark: "hsl(340, 71%, 35%)",

            // Cyan
            cyanLight: "hsl(180, 71%, 95%)",
            cyanNormal: "hsl(180, 100%, 42%)",
            cyanDark: "hsl(180, 100%, 32%)",

            // Deep Purple
            deepPurpleLight: "hsl(262, 47%, 94%)",
            deepPurpleNormal: "hsl(261, 59%, 41%)",
            deepPurpleDark: "hsl(261, 59%, 31%)",
        },
        fonts: {
            sans: "Inter, sans-serif",
        },
        fontSizes: {
            1: "12px",
            2: "14px",
            3: "16px",
            4: "20px",
            5: "24px",
            6: "32px",
        },
        space: {
            0: "0",
            1: "4px",
            2: "8px",
            3: "16px",
            4: "32px",
            5: "64px",
            6: "128px",
        },
        sizes: {
            1: "4px",
            2: "8px",
            3: "16px",
            4: "20px",
            5: "24px",
            6: "32px",
            7: "40px",
            8: "48px",
            9: "56px",
            10: "64px",
            11: "128px",
            maxW: "100vw",
            maxH: "100vh",
            half: "50%",
        },
        radii: {
            1: "2px",
            2: "4px",
            3: "8px",
            4: "16px",
            round: "9999px",
        },
        fontWeights: {
            normal: "400",
            medium: "500",
            bold: "700",
        },
        lineHeights: {
            normal: '1px',
            medium: '1.5px',
            large: '2px',
        },
        letterSpacings: {},
        borderWidths: {},
        borderStyles: {},
        shadows: {},
        zIndices: {
            1: '100',
            2: '200',
            3: '300',
            4: '400',
            max: '9999999',
        },
        transitions: {},
    },
    utils: {
        paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
    },
});