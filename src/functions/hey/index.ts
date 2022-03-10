export default {
  handler: `src/functions/hey/hey.hey`,
  events: [
    {
      http: {
        method: "get",
        path: "hey",
      },
    },
  ],
};
