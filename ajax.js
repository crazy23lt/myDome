const request = require("request");
request('https://maoyan.com/', function(error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});

module.exports = {
    handleRequestByPromise
}

function handleRequestByPromise(options) {
    let op = Object.assign({}, {
        url: "",
        method: "GET",
        encoding: null,
        hader: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36",
            Referer: "https://www.meituri.com"
        }
    }, options);
    if (op.url === "") {
        throw new Error("请求的url地址不正确");
    }
    const promise = new Promise(function(resolve, reject) {
        request(op, (err, resoponse, body) => {
            if (err) reject(err);
            if (response && response.statusCode === 200) {
                resolve(body);
            } else {
                reject(`${url}`);
            }
        });
    });
    return promise;
}