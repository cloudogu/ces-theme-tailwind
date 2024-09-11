const colormapping = require("./colormapping.cjs");
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: { // TODO: This would be a breaking change if not put into 'extend'. Remove extend when breaking change is wanted.
            fontSize: {
                'desktop-small': ['13px', '1.84615'],
                'desktop-regular': ['16px', '1.5'],
                'desktop-xl': ['19px', '1.6842'],
                'desktop-2xl': ['23px', '1.3913'],
                'desktop-3xl': ['28px', '1.4286'],
                'desktop-4xl': ['34px', '1.41176'],
                'desktop-5xl': ['41px', '1.36585'],
                'desktop-6xl': ['49px', '1.3061'],
                'mobile-small': ['14px', '1.714286'],
                'mobile-regular': ['16px', '1.5'],
                'mobile-xl': ['18px', '1.33333'],
                'mobile-2xl': ['20px', '1.2'],
                'mobile-3xl': ['23px', '1.391304'],
                'mobile-4xl': ['26px', '1.230769'],
                'mobile-5xl': ['29px', '1.103448'],
                'mobile-6xl': ['33px', '1.212121'],
                'inherit': 'inherit',
            },
            spacing: { // This can be used if the width / height of an element should be equal to the font size
                'desktop-small': '13px',
                'desktop-regular': '16px',
                'desktop-xl': '19px',
                'desktop-2xl': '23px',
                'desktop-3xl': '28px',
                'desktop-4xl': '34px',
                'desktop-5xl': '41px',
                'desktop-6xl': '49px',
                'mobile-small': '14px',
                'mobile-regular': '16px',
                'mobile-xl': '18px',
                'mobile-2xl': '20px',
                'mobile-3xl': '23px',
                'mobile-4xl': '26px',
                'mobile-5xl': '29px',
                'mobile-6xl': '33px',
                'default': '0.5rem',
                'default-1/2': '0.25rem',
                'default-1/4': '0.125rem',
                'default-1x': '0.5rem',
                'default-2x': '1rem',
                'default-3x': '1.5rem',
            },
            borderRadius: {
                '4xl': '40px'
            },
            borderWidth: {
                '3': '3px',
            },
        },
        boxShadow: {
            'textfield-primary-shadow': '0px 0px 5px 1px rgb(35 163 221 / 0.6)',
            'textfield-success-shadow': '0px 0px 5px 1px rgba(191,208,36,1)',
            'textfield-warning-shadow': '0px 0px 5px 1px rgba(255,196,75,1)',
            'textfield-danger-shadow': '0px 0px 5px 1px rgba(237,105,125,1)',
            'modal-primary-shadow': '0px 5px 15px 0px rgb(0 0 0 / 0.5)',
            'textfield-search-result-primary-shadow': '0px 6px 12px 0px rgb(0 0 0 / 0.18)',
            'dropdown-shadow': '0px 0px 17px 3px rgba(31,147,200,0.37)',
            'DEFAULT': "0 3px 8px 0",
            'none': 'none',
        },
        screens: {
            'sm': '640px',
            '-sm': {'max': '639px'},
            'md': '768px',
            '-md': {'max': '767px'},
            'lg': '992px',
            '-lg': {'max': '991px'},
            'xl': '1024px',
            '-xl': {'max': '1023px'},
            '2xl': '1200px',
            '-2xl': {'max': '1199px'},
            '3xl': '1536px',
            '-3xl': {'max': '1535px'},
            'desktop': '768px',
            'mobile': {'max': '767px'},
        },
        fontFamily: {
            'sans': ['Droid\ Sans', 'Calibri', 'sans-serif'],
        },
        colors: {
            /* Beginning old colors - DEPRECATED - Do not use*/
            DEFAULT: '#fff',
            transparent: 'transparent',
            label: {
                secondary: {
                    DEFAULT: '#FFF',
                    font: {
                        DEFAULT: '#333',
                        disabled: '#777'
                    }
                },
                success: {
                    DEFAULT: '#FFF',
                    font: {
                        DEFAULT: '#6F7915'
                    }
                },
                warning: {
                    DEFAULT: '#FFF',
                    font: {
                        DEFAULT: '#cb6600'
                    }
                },
                danger: {
                    DEFAULT: '#FFF',
                    font: {
                        DEFAULT: '#D61A36'
                    }
                }
            },
            validation: {
                success: {
                    DEFAULT: '#FFF',
                    font: {
                        DEFAULT: '#6F7915'
                    }
                },
                warning: {
                    DEFAULT: '#FFF',
                    font: {
                        DEFAULT: '#cb6600'
                    }
                },
                danger: {
                    DEFAULT: '#FFF',
                    font: {
                        DEFAULT: '#D61A36'
                    }
                }
            },
            textfield: {
                primary: {
                    DEFAULT: '#FFF',
                    hover: '#FFF',
                    disabled: '#EEE',
                    active: '#FFF',
                    font: {
                        DEFAULT: '#1b7daa',
                        hover: '#1b7daa',
                        disabled: '#808080',
                    },
                    border: {
                        DEFAULT: '#1f93c8',
                        hover: '#176c93',
                        active: '#333',
                        disabled: '#808080',
                    },
                },
                success: {
                    DEFAULT: '#FFF',
                    hover: '#FFF',
                    disabled: '#EEE',
                    active: '#FFF',
                    font: {
                        DEFAULT: '#6F7915',
                        hover: '#6F7915'
                    },
                    border: {
                        DEFAULT: '#6F7915',
                        hover: '#6F7915',
                        active: '#6F7915'
                    },
                },
                warning: {
                    DEFAULT: '#FFF',
                    hover: '#FFF',
                    disabled: '#EEE',
                    active: '#FFF',
                    font: {
                        DEFAULT: '#cb6600',
                        hover: '#cb6600'
                    },
                    border: {
                        DEFAULT: '#E49900',
                        hover: '#E49900',
                        active: '#E49900'
                    },
                },
                danger: {
                    DEFAULT: '#FFF',
                    hover: '#FFF',
                    font: {
                        DEFAULT: '#D61A36',
                        hover: '#D61A36'
                    },
                    border: {
                        DEFAULT: '#D61A36',
                        hover: '#D61A36',
                        active: '#D61A36'
                    },
                    active: '#FFF',
                    disabled: '#EEE',
                },
            },
            checkbox: {
                primary: {
                    DEFAULT: '#1B7DAA',
                    font: '#333',
                },
                success: {
                    DEFAULT: '#6F7915',
                    font: '#333',
                },
                secondary: {
                    DEFAULT: '#333',
                    font: '#333',
                },
                danger: {
                    DEFAULT: '#D61A36',
                    font: '#333',
                },
            },
            button: {
                primary: {
                    DEFAULT: '#00426b',
                    hover: '#1b83b2',
                    font: {
                        DEFAULT: '#FFF',
                        hover: '#FFF',
                        disabled: '#808080',
                    },
                    border: {
                        DEFAULT: '#1f93c8',
                        hover: '#176c93',
                        active: '#333',
                        disabled: '#808080',
                    },
                    active: '#333'
                },
                secondary: {
                    DEFAULT: '#FFF',
                    hover: '#e6e6e6',
                    font: {
                        DEFAULT: '#333',
                        hover: '#333'
                    },
                    border: {
                        DEFAULT: '#1f93c8',
                        hover: '#176c93'
                    },
                },
                success: {
                    DEFAULT: '#6F7915',
                    hover: '#474e0d',
                    active: '#474e0d',
                    font: {
                        DEFAULT: '#FFF',
                        hover: '#FFF'
                    },
                    border: {
                        DEFAULT: '#5b6311',
                        hover: '#2b2f08'
                    },
                },
                warning: {
                    DEFAULT: '#E49900',
                    hover: '#A16B00',
                    font: {
                        DEFAULT: '#523600',
                        hover: '#FFF'
                    },
                    border: {
                        DEFAULT: '#A16B00',
                        hover: '#333'
                    },
                },
                danger: {
                    DEFAULT: '#D61A36',
                    hover: '#a9142b',
                    font: {
                        DEFAULT: '#FFF',
                        hover: '#FFF'
                    },
                    border: {
                        DEFAULT: '#bf1730',
                        hover: '#891122'
                    },
                },
                link: {
                    font: {
                        DEFAULT: '#1f93c8'
                    }
                },
            },
            alert: {
                'primary-inverse': {
                    DEFAULT: '#d4edf8',
                    border: '#003847',
                    font: '#003847',
                },
                secondary: {
                    DEFAULT: '#FFF',
                    border: '#333',
                    font: '#333',
                },
                'success-inverse': {
                    DEFAULT: '#E6EDA8',
                    border: '#6F7915',
                    font: '#5B6900',
                },
                'warning-inverse': {
                    DEFAULT: '#ffdd99',
                    border: '#805500',
                    font: '#805500',
                },
                'danger-inverse': {
                    DEFAULT: '#FBE2E6',
                    border: '#D61A36',
                    font: '#c83449',
                }
            },
            nav: {
                primary: {
                    DEFAULT: '#FFF',
                    hover: '#1b83b2',
                    selected: '#d4edf8',
                    border: {
                        DEFAULT: '#1d8dbf',
                        hover: '#1d8dbf',
                    },
                    font: {
                        DEFAULT: '#333',
                        hover: '#FFF'
                    }
                }
            },
            heading: {
                font: {
                    DEFAULT: '#00426B'
                }
            },
            table: {
                header: {
                    primary: {
                        DEFAULT: '#FFF',
                        border: {
                            DEFAULT: '#23A3DD',
                        },
                        font: {
                            DEFAULT: '#333'
                        },
                    },
                },
                row: {
                    primary: {
                        DEFAULT: '#FFF',
                        border: {
                            DEFAULT: '#1b7daa',
                        },
                        font: {
                            DEFAULT: '#333'
                        },
                        icon: {
                            DEFAULT: '#23a3dd',
                            hover: '#333',
                        }
                    },
                },
                pagination: {
                    font: {
                        DEFAULT: "#23a3dd",
                        hover: "#23a3dd",
                        active: "#fff",
                        disabled: "#808080",
                    },
                    border: {
                        DEFAULT: "#23a3dd",
                        hover: "#23a3dd",
                        disabled: "#808080",
                    },
                    bg: {
                        DEFAULT: "#fff",
                        hover: "#eee",
                        active: "#23a3dd",
                    }
                }
            },
            modal: {
                primary: {
                    DEFAULT: '#FFF',
                    border: {
                        DEFAULT: '#23A3DD'
                    }
                },
                header: {
                    DEFAULT: '#FFF',
                    font: {
                        DEFAULT: '#00426B',
                    },
                },
                body: {
                    DEFAULT: '#FFF',
                    primary: {
                        border: {
                            DEFAULT: '#e5e5e5'
                        },
                        font: {
                            DEFAULT: '#333',
                        },
                    },
                },
                footer: {
                    DEFAULT: '#FFF',

                },
            },
            search: {
                suggestion: {
                    primary: {
                        DEFAULT: '#FFF',
                        hover: '#1b7daa',
                        border: {
                            DEFAULT: 'transparent'
                        },
                        font: {
                            DEFAULT: '#1b7daa',
                            hover: '#FFF'
                        }
                    }
                },
                icon: {
                    DEFAULT: '#00426B',
                    disabled: '#333',
                }
            },
            divider: {
                primary: {
                    border: {
                        DEFAULT: '#00426B'
                    }
                },
                secondary: {
                    border: {
                        DEFAULT: '#EEE'
                    }
                },
            },
            link: {
                primary: {
                    font: {
                        DEFAULT: '#1f93c8'
                    }
                }
            },
            text: {
                primary: {
                    DEFAULT: "#00426b",
                    hover: "#000",
                    disabled: '#808080'
                },
                secondary: "#333"
            },
            dropdown: {
                bg: {
                    DEFAULT: '#FFF',
                    hover: '#e6e6e6',
                    focus: '#e6e6e6',
                },
                font: {
                    DEFAULT: '#333',
                    hover: '#333',
                    focus: '#333',
                },
                border: {
                    DEFAULT: '#1f93c8',
                    hover: '#176c93',
                    focus: '#176c93',
                },
            },
            /* Ending old colors - DEPRECATED - Do not use */
            ...colormapping.variableNames,
        },
        variables: {
            DEFAULT: {
                ces: {
                    color: {
                        ...colormapping.colors
                    }
                },
            },
        }
    },
    plugins: [
        require('@mertasan/tailwindcss-variables'),
        require('tailwindcss-aria-attributes'),
        plugin(({ addVariant}) => {
            addVariant('group-force-mobile', `:merge([data-ces-theme-force-mobile="true"]) &`);
            addVariant('-group-force-mobile', `:merge([data-ces-theme-force-mobile="false"]) &`);
            addVariant('force-mobile', `&[data-ces-theme-force-mobile="true"]`);
            addVariant('-force-mobile', `&[data-ces-theme-force-mobile="false"]`);
        }),
    ]
}
