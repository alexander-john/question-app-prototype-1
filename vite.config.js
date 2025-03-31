export default {
  server: {
    proxy: {
      "/api/auth": {
        target: "http://localhost:5000", // Replace 5000 with your backend port
        changeOrigin: true,
      },
    },
  },
};
