const stripe = require('stripe')('sk_test_AHZ6QoAa4s4OLGDS5rCbaYX500KjT3eAXI');


exports.handler = async (event, context, callback) => {
    reqData = JSON.parse(event.body)

    const response = await charge(reqData.token)

    console.log(response)
    callback(null, {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(response)
    })

}

function charge(token) {
    return stripe.charges.create({
        amount: 999,
        currency: 'usd',
        description: 'Example charge',
        source: token,
    }).then(r => {
        return r
    }, err => {
        return err
    })

}