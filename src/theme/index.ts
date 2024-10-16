import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant, Select, Checkbox, Button } from "@chakra-ui/react";

const inputSelectStyles = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'brand.500'
                }
            }
        }
    },
    sizes: {
        md: {
            field: {
                borderRadius: 'none'
            }
        }
    }
};

const tema = extendTheme({

    colors: {
        brand: {
            50: '#f5fee5',
            100: '#e1fbf2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',
        },
    },

    fonts: {
        body: `Inter, ${base.fonts?.heading}`,
        heading: `Montserrat, ${base.fonts?.body}`,
    },

    components: {
        Input: { ...inputSelectStyles },
        Select: { ...inputSelectStyles },
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: 'none',
                    _focus: {
                        ring: 2,
                        ringColor: 'brand.500',
                    },
                },
            },
        },
        Button: {
            baseStyle: {
                borderRadius: 'none', 
                _focus: {
                    border: '2px',    // Add border on focus
                    borderColor: 'brand.500', // Set border color
                },
            },
        },
    },
},

    withDefaultColorScheme({

        colorScheme: 'brand',
        components: ['Checkbox', 'Button'],

    }),

    withDefaultVariant({
        variant: 'filled',
        components: ['Input', 'Select'],
    })
);



export default tema;