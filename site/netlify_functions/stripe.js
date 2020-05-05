const stripe = require('stripe')(process.env.YOUR_ENV_VAR_GOES_HERE);


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
        payment_method_types: ['card'],
        amount: 1,
        currency: 'usd',
        description: 'Newsletter Subscription',
        source: token,
        transfer_data: {
            destination: 'acct_1Ge83SEdu8iQHjrc'
        }
    }).then(r => {
        return r
    }, err => {
        return err
    })

}