'use strict';

module.exports = function(Product) {
    Product.getName = function(productId, cb) {
        console.log(productId);
        Product.findOne({where: {'ProductID' : productId } }, function (err, instance) {
            console.log(instance);

            var response = instance.ProductName;
            cb(null, response);
            console.log(response);
        });
    }
    
    Product.remoteMethod (
        'getName',
        {
            http: {path: '/getName', verb: 'get'},
            accepts: {arg: 'ProductID', type: 'number', required: true },
            returns: {arg: 'ProductName', type: 'string'}
        }
    );

    Product.getImage = function(productId, cb) {
        console.log(productId);
        Product.findOne({where: {'ProductID' : productId } }, function (err, instance) {
            console.log(instance);

            var response = instance.ProductImage;
            cb(null, response);
            console.log(response);
        });
    }
    Product.remoteMethod (
        'getImage',
        {
            http: {path: '/getImage', verb: 'get'},
            accepts: {arg: 'ProductID', type: 'number', required: true },
            returns: {arg: 'ProductImage', type: 'string'}
        }
    );
};
