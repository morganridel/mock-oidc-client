var express = require('express');
var router = express.Router();

const { auth, requiresAuth } = require('express-openid-connect');

router.use(
  auth({
    authorizationParams: {
      response_type: 'code',
      scope: 'openid profile email',
    },

    authRequired: false,
  })
)

router.get('/', async function(req, res, next) {
  res.redirect('/'); // Redirect to frontend root
});

/* GET home page. */
router.get('/userinfo', requiresAuth(), async function(req, res, next) {
  const userInfo = await req.oidc.fetchUserInfo();
  res.send(userInfo);
});

router.get('/isauth', async function(req, res, next) {
  res.send({isAuthenticated: req.oidc.isAuthenticated()});
});

module.exports = router;
