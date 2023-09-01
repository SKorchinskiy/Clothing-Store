import { rest } from "msw";

export const handlers = [
  rest.post("/.netlify/functions/create-payment-intent", (req, res, ctx) => {
    return res(ctx.json({ clientSecret: "this_is_a_random_string_123" }));
  }),
];
