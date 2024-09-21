import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        //primary
        'primaryLight': '#ededf5',
        'primaryLightHover': '#e4e4f1',
        'primaryLightActive': '#c7c8e1',
        'primaryNormal': '#4a4c9f',
        'primaryNormalHover': '#43448f',
        'primaryNormalActive': '#3b3d7f',
        'primaryDark': '#383977',
        'primaryDarkHover': '#2c2e5f',
        'primaryDarkActive': '#212248',
        'primaryDarker': '#1a1b38',
        //secondary
        'secondaryLight': '#e9f8f4',
        'secondaryLightHover': '#def4ee',
        'secondaryLightActive': '#bbe9dc',
        'secondaryNormal': '#24b78f',
        'secondaryNormalHover': '#20a581',
        'secondaryNormalActive': '#1d9272',
        'secondaryDark': '#1b896b',
        'secondaryDarkHover': '#166e56',
        'secondaryDarkActive': '#105240',
        'secondaryDarker': '#0d4032',
      
        //success
        'successLight': '#e8f5eb',
        'successLightHover': '#dcefe0',
        'successLightActive': '#b6debf',
        'successNormal': '#159632',
        'successNormalHover': '#13872d',
        'successNormalActive': '#117828',
        'successDark': '#107126',
        'successDarkHover': '#0d5a1e',
        'successDarkActive': '#094416',
        'successDarker': '#073512',
        
        //error
        'errorLight': '#fbeaea',
        'errorLightHover': '#f9dfdf',
        'errorLightActive': '#f3bebe',
        'errorNormal': '#d82c2c',
        'errorNormalHover': '#c22828',
        'errorNormalActive': '#ad2323',
        'errorDark': '#a22121',
        'errorDarkHover': '#821a1a',
        'errorDarkActive': '#611414',
        'errorDarker': '#4c0f0f',
        //warning
        'warningLight': '#fef5e6',
        'warningLightHover': '#fef0d9',
        'warningLightActive': '#fddfb0',
        'warningNormal': '#f79800',
        'warningNormalHover': '#de8900',
        'warningNormalActive': '#c67a00',
        'warningDark': '#b97200',
        'warningDarkHover': '#945b00',
        'warningDarkActive': '#6f4400',
        'warningDarker': '#563500',
        //info
        'infoLight': '#e6f5f5',
        'infoLightHover': '#d9f0f0',
        'infoLightActive': '#b1e0e0',
        'infoNormal': '#049a9b',
        'infoNormalHover': '#048b8c',
        'infoNormalActive': '#037b7c',
        'infoDark': '#037474',
        'infoDarkHover': '#025c5d',
        'infoDarkActive': '#024546',
        'infoDarker': '#013636',
      },
      spacing: {
        // Add new spacing values
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        // Add new font sizes
        'xxs': '0.65rem',
        'xxl': '1.75rem',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4.375rem'
      }
    },
    fontFamily: {
      inter: 'Inter, sans-serif'
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
    logs: false,
  },
}