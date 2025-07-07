/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        wigle:{
          '0%' :{opactiy : '0' , transform : 'translateY(550px)'},
          '100%' :{opactiy : '1' , transform : 'translateY(-70px)' }
        },
          munculTombol: {
          '0%': { opacity: '0', transform: 'translateY(550px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' }, // <= biar dia berhenti di tempatnya
        },
        HomeIn:{
          '0%' : {opacity : '0' ,},
          '100%' : {opacity : '1'}
        }
      },
      animation:{
        muncul : 'wigle 2s ease-in-out forwards ',
        munculTombol : 'munculTombol 3.5s ease-in-out forwards',
        home : 'HomeIn 2s ease-in forwards'
      }
    },
  },
  plugins: [],
}

