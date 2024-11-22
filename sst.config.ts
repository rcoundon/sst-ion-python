/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "pdf-processor-ion",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const python = new sst.aws.Function("MyPythonFunction", {
      python: { container: true },
      handler: "lambda/app.handler",
      runtime: "python3.12",
      url: true
    });
  },
});
