import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant} from "@chakra-ui/react";


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

const brandRing = {
    _focus: {
        ring: 2,
        ringColor: 'brand.500',
    },
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
                    ...brandRing,
                },
            },
        },
        Button: {
            variants: {
                primary: {
                    rounded: 'none',
                    
                    ...brandRing,

                    _light:{
                        bg: 'brand.500',
                        color: 'white',
                        _hover: {
                            bg: 'brand.600',
                            color: 'white',
                        },
                        _active: {
                            bg: 'brand.700',
                            color: 'white',
                        }
                    },

                    _dark:{
                        bg: 'brand.200',
                        color: 'black',
                        _hover: {
                            bg: 'brand.400',
                            color: 'black',
                        },
                        _active: {
                            bg: 'brand.500',
                            color: 'black',
                        }
                    },
                    
                }
            }
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