import { config } from '@tamagui/config/v3'
//import { tokens, } from '@tamagui/themes'


import { createTamagui, createTokens } from 'tamagui'
const tokens = createTokens({
    color: {
        greenEscuro: '#00875F',
        greenClaro: '#00B37E',
        gray700: '#121214',
        gray600: '#202024',
        gray500: '#29292E',
        gray400: '#323238',
        gray300: '#7C7C8A',
        gray200: '#C4C4CC',
        gray100: '#E1E1E6',
        white: '#FFFFFF',
        red500: '#F75A68',
    },

    fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
    },
    fontFamily: {
        heading: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
    },

    fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },

    sizes: {
        14: 56,
        33: 148
    },
    size: {
        sm: 2,
        md: 10,
        true: 10, // this means "md" is your default size
        lg: 20,
    }, // You need to add size properties here
    space: {  '$-1': -5, '$-2': -10, true: 10 }, // You need to add space properties here
    radius: { 0: 0, 1: 3, true:3},
    zIndex: { 0: 0, 1: 100, 2: 200, true: 200 },
})
export const tamaguiConfig = createTamagui({
    ...config,
    tokens
})
export default tamaguiConfig
export type Conf = typeof tamaguiConfig
declare module 'tamagui' {

    interface TamaguiCustomConfig extends Conf { }

}
