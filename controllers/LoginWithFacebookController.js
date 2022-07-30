const res = require('express/lib/response');
const mongoose = require('mongoose');
const passport = require('passport');

exports.isLoggedIn = async (req, res, next) => {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}

exports.profile = async (req, res) => {
    this.isLoggedIn()
    user: req.user // get the user out of session and pass to template
};


exports.logout = async (req, res, next) => {
    if (req.isLoggedIn)
        req.logout();
    res.redirect('/');
    return next();
};

exports.auth = async (req, res) => {
    passport.authenticate('facebook', {
        scope: ['public_profile', 'email']
    })
}

// router.get('/auth/facebook', passport.authenticate('facebook', {
//     scope: ['public_profile', 'email']
// }));



exports.verify = async (req, res) => {
    passport.authenticate('facebook', {
        scope: ['public_profile', 'email']
    });
}



// exports.render = async (req, res) => {
//     { user: req.user };
// };

// app.get('/account', ensureAuthenticated, function (req, res) {
//     res.render('account', { user: req.user });
// });

// app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));


// app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }),
//     function (req, res) {
//         res.redirect('/');
//     });

// app.get('/logout', function (req, res) {
//     req.logout();
//     res.redirect('/');
// });


function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}