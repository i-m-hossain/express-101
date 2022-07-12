exports.about = (req, res) => {
    res.send(`this is about pages, ${req.baseUrl}`);
};
exports.contact = (req, res) => {
    res.send("this is contact page");
};
exports.greeting = (req, res) => {
    res.send("hello people");
};
