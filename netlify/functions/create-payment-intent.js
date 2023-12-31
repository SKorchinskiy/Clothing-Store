require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports.handler = async function (event) {
  try {
    const { amount } = JSON.parse(event.body);
    if (!amount) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          clientSecret: "",
        }),
      };
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: "201",
      body: JSON.stringify({
        clientSecret: paymentIntent.client_secret,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: error.message ?? "unhandled error" }),
    };
  }
};
