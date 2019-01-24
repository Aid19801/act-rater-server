var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Methods", "PUT", "GET", "POST", "DELETE");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Require the controllers WHICH WE DID NOT CREATE YET!!
var act_controller = require('../controllers/acts');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', act_controller.test);

router.get('/', act_controller.all_acts);

router.post('/create', act_controller.act_create);

router.get('/:id', act_controller.act_details);

router.put('/:id/update', act_controller.act_update);

router.delete('/:id/delete', act_controller.act_delete);


module.exports = router;