var Act = require('../models/act');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.all_acts = (req, res) => {
    Act.find({}, (err, acts) => {
        res.json(acts);
    })
}


exports.act_create = function (req, res) {
    console.log(' req >>>>', req.body);
    var act = new Act(
        {
            _id: req.body._id,
            email: req.body.email,
            actName: req.body.actName,
            realName: req.body.realName,
            startDate: req.body.startDate,
            img: req.body.img,
            rating: req.body.rating,
        }
    );

    // res.set('Content-Type', 'application/x-www-form-urlencoded');

    act.save(function (err) {
        if (err) {
            return console.log(err);
        }
        res.send('Act Created successfully')
    })
};

exports.act_details = function (req, res) {
    Act.findById(req.params.id, function (err, act) {
        if (err) console.log(err);
        res.send(act);
    })
};

exports.act_update = function (req, res) {
    console.log('act updating...', req.body);
    Act.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, act) {
        if (err) console.log(err);
        res.send('Act udpated.');
    });
};

exports.act_delete = function (req, res) {
    Act.findByIdAndRemove(req.params.id, function (err) {
        if (err) console.log(err);
        res.send('Act deleted successfully!');
    })
};