var express = require('express');
var router = express.Router();
var controllers = require('../database/controllers');

var stylesController = controllers.stylesController;
var productsController = controllers.productsController;
var usersController = controllers.usersController;
var cartsController = controllers.cartsController;
var cartitemsController = controllers.cartitemsController;
var ordersController = controllers.ordersController;

var extractListOfStyleNamesHelper = require('./helpers/extractListOfStyleNames-helper');
var extractListOfProductsByRowsHelper = require('./helpers/extractListOfProductsByRows-helper');
var extractListOfCartItems = require('./helpers/extractListOfCartItems-helper');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/', function(req, res, next) {
    var usrID = req.session.passport ? req.session.passport.user : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var curEmail = "";
        if (user) curEmail = user.dataValues.email;

        stylesController.getAllStyleNames({}, function(error, styles) {
            if (error) res.status(400).send({message: 'Cannot find the list of styles'});
            else {
                var styleList = extractListOfStyleNamesHelper.extractListOfStyleNames(styles);
                productsController.getAllProducts({}, function(error, products) {
                    if (error) res.status(400).send({message: 'Cannot find the list of products'});
                    else {
                        var productList = extractListOfProductsByRowsHelper.extractListOfProductsByRows(products);
                        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
                        if (cartID != -1) {
                            cartsController.getCartInformation(cartID, function(error, cart) {
                                var cartQuantity = 0, cartPrice = 0;
                                if (Boolean(error)) {
                                    // Do nothing here
                                }
                                else {
                                    cartQuantity = cart.dataValues.totalQuantiles;
                                    cartPrice = cart.dataValues.totalPrice;
                                }
                                res.render('shop/index', {
                                    title: 'Bán áo online',
                                    email: curEmail,
                                    listOfStyles: styleList,
                                    listOfProducts: productList,
                                    cartQuantity: cartQuantity,
                                    cartPrice: cartPrice,
                                });
                            });
                        }
                        else {
                            res.render('shop/index', {
                                title: 'Bán áo online',
                                email: curEmail,
                                listOfStyles: styleList,
                                listOfProducts: productList,
                                cartQuantity: 0,
                                cartPrice: 0,
                            });
                        }
                    }
                });
            }
        });
    });
});

router.get('/design', function(req, res, next) {
    var usrID = req.session.passport ? req.session.passport.user : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var curEmail = "";
        if (user) curEmail = user.dataValues.email;
        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
        if (cartID != -1) {
            cartsController.getCartInformation(cartID, function(error, cart) {
                var cartQuantity = 0, cartPrice = 0;
                if (Boolean(error)) {
                    // Do nothing here
                }
                else {
                    cartQuantity = cart.dataValues.totalQuantiles;
                    cartPrice = cart.dataValues.totalPrice;
                }
                res.render('shop/design', {
                    title: 'Bán áo online',
                    email: curEmail,
                    cartQuantity: cartQuantity,
                    cartPrice: cartPrice,
                });
            });
        }
        else {
            res.render('shop/design', {
               title: 'Bán áo online',
                email: curEmail,
                cartQuantity: 0,
                cartPrice: 0,
            });
        }
    });
});

router.get('/cooperation', function(req, res, next) {
    var usrID = req.session.passport ? req.session.passport.user : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var curEmail = "";
        if (user) curEmail = user.dataValues.email;
        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
        if (cartID != -1) {
            cartsController.getCartInformation(cartID, function(error, cart) {
                var cartQuantity = 0, cartPrice = 0;
                if (Boolean(error)) {
                    // Do nothing here
                }
                else {
                    cartQuantity = cart.dataValues.totalQuantiles;
                    cartPrice = cart.dataValues.totalPrice;
                }
                res.render('shop/cooperation', {
                    title: 'Bán áo online',
                    email: curEmail,
                    cartQuantity: cartQuantity,
                    cartPrice: cartPrice,
                });
            });
        }
        else {
            res.render('shop/cooperation', {
                title: 'Bán áo online',
                email: curEmail,
                cartQuantity: 0,
                cartPrice: 0,
            });
        }
    });
});

router.get('/contact', function(req, res, next) {
    var usrID = req.session.passport ? req.session.passport.user : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var curEmail = "";
        if (user) curEmail = user.dataValues.email;
        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
        if (cartID != -1) {
            cartsController.getCartInformation(cartID, function(error, cart) {
                var cartQuantity = 0, cartPrice = 0;
                if (Boolean(error)) {
                    // Do nothing here
                }
                else {
                    cartQuantity = cart.dataValues.totalQuantiles;
                    cartPrice = cart.dataValues.totalPrice;
                }
                res.render('shop/contact', {
                    title: 'Bán áo online',
                    email: curEmail,
                    cartQuantity: cartQuantity,
                    cartPrice: cartPrice,
                });
            });
        }
        else {
            res.render('shop/contact', {
                title: 'Bán áo online',
                email: curEmail,
                cartQuantity: 0,
                cartPrice: 0,
            });
        }
    });
});

router.get('/introduction', function(req, res, next) {
    var usrID = req.session.passport ? req.session.passport.user : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var curEmail = "";
        if (user) curEmail = user.dataValues.email;
        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
        if (cartID != -1) {
            cartsController.getCartInformation(cartID, function(error, cart) {
                var cartQuantity = 0, cartPrice = 0;
                if (Boolean(error)) {
                    // Do nothing here
                }
                else {
                    cartQuantity = cart.dataValues.totalQuantiles;
                    cartPrice = cart.dataValues.totalPrice;
                }
                res.render('shop/introduction', {
                    title: 'Bán áo online',
                    email: curEmail,
                    cartQuantity: cartQuantity,
                    cartPrice: cartPrice,
                });
            });
        }
        else {
            res.render('shop/introduction', {
                title: 'Bán áo online',
                email: curEmail,
                cartQuantity: 0,
                cartPrice: 0,
            });
        }
    });
});

router.get('/instruction', function(req, res, next) {
    var usrID = req.session.passport ? req.session.passport.user : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var curEmail = "";
        if (user) curEmail = user.dataValues.email;
        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
        if (cartID != -1) {
            cartsController.getCartInformation(cartID, function(error, cart) {
                var cartQuantity = 0, cartPrice = 0;
                if (Boolean(error)) {
                    // Do nothing here
                }
                else {
                    cartQuantity = cart.dataValues.totalQuantiles;
                    cartPrice = cart.dataValues.totalPrice;
                }
                res.render('shop/instruction', {
                    title: 'Bán áo online',
                    email: curEmail,
                    cartQuantity: cartQuantity,
                    cartPrice: cartPrice,
                });
            });
        }
        else {
            res.render('shop/instruction', {
                title: 'Bán áo online',
                email: curEmail,
                cartQuantity: 0,
                cartPrice: 0,
            });
        }
    });
});

router.get('/shoppingcartdetail', function(req, res, next) {
    var usrID = req.session.passport ? (req.session.passport.user) : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var curEmail = "";
        var islogin = false;
        if (user) {
            curEmail = user.dataValues.email;
            islogin = true;
        }

        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
        if (cartID != -1) {
            cartsController.getCartDetailInformation(cartID, function(error, cart) {
                var extractedInfo = extractListOfCartItems.extractListOfCartItems(cart);

                res.render('shop/shoppingCartDetail', {
                    title: 'Bán áo online',
                    email: curEmail,
                    login: islogin,
                    cartQuantity: extractedInfo.cartQuantity,
                    cartPrice: extractedInfo.cartPrice,
                    cartItems: extractedInfo.cartItems,
                });
            });
        }
        else {
            res.render('shop/shoppingCartDetail', {
                title: 'Bán áo online',
                login: islogin,
                email: curEmail,
                cartQuantity: 0,
                cartPrice: 0,
                cartItems: [],
            });
        }
    });
});

router.post('/addtocart/:id', function(req, res, next) {
    var productID = req.params.id;
    console.log(req.params);
    console.log(req.body);

    productsController.findProductByID(productID, function(err, product) {
        if (err) return res.status(400).send({message: 'Cannot find the product'});

        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
        var productPrice = product.dataValues.productPrice;
        var productQuantity = parseInt(req.body.productquantity);
        var productSize = parseInt(req.body.productsize);

        if (cartID == -1) {
            cartsController.createNewShoppingCart(function(error, cart) {
                if (error) return res.status(400).send({message: 'Cannot create new cart'});

                req.session.cartID = cart.dataValues.id;
                cartitemsController.addItemToCart(
                        productID, 
                        cart.dataValues.id, 
                        productQuantity, 
                        productSize, 
                        function(error, cartitem) {

                    cartsController.addItemToCart(
                            cartitem.dataValues.cartID, 
                            productPrice, 
                            productQuantity, 
                            function(error) {
                        res.redirect('/');
                    });

                });
            });
        }
        else {
            cartitemsController.addItemToCart(
                    productID, 
                    cartID, 
                    productQuantity, 
                    productSize, 
                    function(error, cartitem) {

                if (error) return res.status(400).send({message: 'Cannot add item to cart'});

                cartsController.addItemToCart(
                        cartitem.dataValues.cartID, 
                        productPrice, 
                        productQuantity, 
                        function(error) {
                    if (error) return res.status(400).send({message: 'Cannot add item to cart 2'});
                    res.redirect('/');
                });
            });
        }
    });
});

router.get('/removecartitem/:id', function(req, res, next) {
    var cartItemID = req.params.id;
    var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);

    cartitemsController.findCartItemByID(cartItemID, function(err, cartItem) {
        if (err) return res.status(400).send({message: 'Cannot find the cart item'});

        var productID = cartItem.dataValues.productID;
        var productQuantity = cartItem.dataValues.productQuantity;
        productsController.findProductByID(productID, function(err, product) {
            if (err) return res.status(400).send({message: 'Cannot find the product'});

            var productPrice = product.dataValues.productPrice;
            cartsController.removeItemFromCart(cartID, productPrice, productQuantity, function(error) {
                if (error) return res.status(400).send({message: 'Cannot remove item from cart'});

                cartItem.destroy().then(function() {
                    res.redirect('/shoppingcartdetail');
                });
            });
        });
    });
});

router.get('/product/:id', function(req, res, next) {
    productsController.findProductByID(req.params.id, function(error, product) {
        if (error) {
            res.status(400).send({message: 'Cannot find product by id'});
        }
        else {
            var result = product.dataValues;
            result.csrfToken = req.csrfToken();
            res.status(200).send(result);
        }
    });
});

router.get('/style/:id', function(req, res, next) {
    var usrID = req.session.passport ? req.session.passport.user : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var curEmail = "";
        if (user) {
            curEmail = user.dataValues.email;
        }
        stylesController.getAllStyleNames({}, function(error, styles) {
            if (error) {
                res.status(400).send({message: 'Cannot find the list of styles'});
            }
            else {
                var styleList = extractListOfStyleNamesHelper.extractListOfStyleNames(styles);
                productsController.getAllProducts({productStyleID: req.params.id}, function(error, products) {
                    if (error) {
                        res.status(400).send({message: 'Cannot find the list of products'});
                    }
                    else {
                        var productList = extractListOfProductsByRowsHelper.extractListOfProductsByRows(products);
                        var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
                        if (cartID != -1) {
                            cartsController.getCartInformation(cartID, function(error, cart) {
                                var cartQuantity = 0, cartPrice = 0;
                                if (Boolean(error)) {
                                    // Do nothing here
                                }
                                else {
                                    cartQuantity = cart.dataValues.totalQuantiles;
                                    cartPrice = cart.dataValues.totalPrice;
                                }
                                res.render('shop/index', {
                                    title: 'Bán áo online',
                                    email: curEmail,
                                    listOfStyles: styleList,
                                    listOfProducts: productList,
                                    cartQuantity: cartQuantity,
                                    cartPrice: cartPrice,
                                });
                            });
                        }
                        else {
                            res.render('shop/index', {
                                title: 'Bán áo online',
                                email: curEmail,
                                listOfStyles: styleList,
                                listOfProducts: productList,
                                cartQuantity: 0,
                                cartPrice: 0,
                            });
                        }
                    }
                });
            }
        });
    });
});

router.get('/checkout', function(req, res, next) {
    var cartID = (req.session.cartID) ? (req.session.cartID) : (-1);
    if (cartID == -1) {
        return res.redirect('/shoppingcartdetail');
    }
    var usrID = req.session.passport ? req.session.passport.user : (-1);
    usersController.findUserById(usrID, function(error, user) {
        var islogin = false;
        if (user) islogin = true;
        var messages = req.flash('error');
        res.send({
            login: islogin,
            csrfToken: req.csrfToken(),
            messages: messages,
            hasErrors: messages.length > 0,
        });
    });
});

router.post('/checkout', function(req, res, next) {
    var cartID = Boolean(req.session.cartID) ? req.session.cartID : (-1);
    if (cartID == -1) {
        return res.redirect('/shoppingcartdetail');
    }

    cartsController.findCartByID(cartID, function(error, cart) {
        if (error) {
            return res.status(400).send({message: 'Cannot find the cart'});
        }

        var stripe = require("stripe")(
            "sk_test_1LrBMlJbwsX3Q6saVmFi2ph7"
        );

        stripe.charges.create({
            amount: cart.dataValues.totalPrice,
            currency: "vnd",
            source: req.body.stripeToken, // obtained with Stripe.js
            description: "Test charge"
        }, function(err, charge) {
            if (err) {
                req.flash('error', err.message);
                return res.redirect('/shoppingcartdetail');
            }

            var usrID = req.session.passport ? req.session.passport.user : (-1);
            ordersController.createNewOrder({
                userID: usrID,
                cartID: cartID,
                address: req.body.address,
                name: req.body.fullname,
                paymentID: charge.id,
            }, function(error, order) {
                if (error) {
                    // console.log(error);
                    return res.redirect('/shoppingcartdetail');
                }
                req.flash('success', 'Successfullly bought product!');
                req.session.cartID = null;
                res.redirect('/checkoutsuccess');
            });
        });
    });
});

router.get('/checkoutsuccess', function(req, res, next) {
    stylesController.getAllStyleNames({}, function(error, styles) {
        if (error) res.status(400).send({message: 'Cannot find the list of styles'});
        else {
            var styleList = extractListOfStyleNamesHelper.extractListOfStyleNames(styles);
            productsController.getAllProducts({}, function(error, products) {
                if (error) res.status(400).send({message: 'Cannot find the list of products'});
                else {
                    var productList = extractListOfProductsByRowsHelper.extractListOfProductsByRows(products);
                    res.render('shop/index', {
                        title: 'Bán áo online',
                        listOfStyles: styleList,
                        listOfProducts: productList,
                        successMess: 'Thanh toan thanh cong',
                        hasSuccessMess: true,
                    });
                }
            });
        }
    });
});

module.exports = router;

