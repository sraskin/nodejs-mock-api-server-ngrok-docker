function get_date_time() {
    const currentdate = new Date();
    return "Hit Time: " + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
}

const mock_response_success = (req, res) => {
    console.log(get_date_time())
    const {wallet_id, wallet_number, amount} = req.body;
    console.log(`Wallet ID: ${wallet_id}, Wallet Number: ${wallet_number}, Amount: ${amount}`)
    res.status(200).json({amount: amount, message: "success"});
}
const mock_response_fail = (req, res) => {
    console.log(get_date_time())
    const {wallet_id, wallet_number, amount} = req.body;
    console.log(`Wallet ID: ${wallet_id}, Wallet Number: ${wallet_number}, Amount: ${amount}`)
    res.status(400).json({amount: amount, message: "fail"});
}

module.exports = {mock_response_success, mock_response_fail};
