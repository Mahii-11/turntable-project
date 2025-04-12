module.exports = {
  theme: {
    extend: {
      keyframes: {
        flash: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        flash: "flash 0.4s ease-in-out",
      },
    },
  },
};
