const withImages = require("next-images");
module.exports = withImages({
  env: {
    REACT_APP_API: "API Url",
  },
  target: "serverless",
});
