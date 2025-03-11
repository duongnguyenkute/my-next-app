module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#001446",
          secondary: "#407FC1",
          thirdary: "#6B6D75", 
          "button-primary": "#00DDBE",
        },

        fontFamily: {
          'yellix': ['Yellix-SemiBold', 'sans-serif'], // Thêm font vào đây
        },
        
      },
    },
    plugins: [],
};
