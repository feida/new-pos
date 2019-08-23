/**
 * @author wxh on 2017/11/16
 * @copyright
 * @desc
 */

const Sequelize = require('sequelize');
const path = require('path');
// const config = require('../../config/index');

// const POS_CONFIG = config.sqlite.pos;
const POS_CONFIG =  {
    "host": "../../../restoPlus.db",
    "port": 1433,
    "user": "",
    "password": "",
    "database": "../../../restoPlus.db"
}

const POS_CLIENT = new Sequelize(POS_CONFIG.database, POS_CONFIG.user, POS_CONFIG.password, {
    host: path.resolve(__dirname) + "/" + POS_CONFIG.database,
    port: POS_CONFIG.port,
    dialect: 'sqlite',
    pool: {
        max: 100,
        min: 0,
        idle: 100000
    },
    logging: false,
    // logging: console.log,
    queueLimit: 0,
    waitForConnection: true,
    dialectOptions: {
        charset: 'utf8'
    }
});

const role                          = require('./schema/role');
const perm                          = require('./schema/perm');
const rolePerm                      = require('./schema/rolePerm');
const userRole                      = require('./schema/userRole');

const brand                         = require('./schema/brand');
const brandSetting                  = require('./schema/brandSetting');
const chargeOrder                   = require('./schema/chargeOrder');
const customer                      = require('./schema/customer');
const customerAddress               = require('./schema/customerAddress');
const printer                       = require('./schema/printer');
const shopDetail                    = require('./schema/shopDetail');
const user                          = require('./schema/user');
const kitchen                       = require('./schema/kitchen');
const area                          = require('./schema/area');
const tableQrcode                   = require('./schema/tableQrcode');
const order                         = require('./schema/order');
const orderItem                     = require('./schema/orderItem');
const article                       = require('./schema/article');
const articleFamily                 = require('./schema/articleFamily');
const articleKitchen                = require('./schema/articleKitchen');
const articleUnit                   = require('./schema/articleUnit');
const articleAttr                   = require('./schema/articleAttr');
const articlePrice                  = require('./schema/articlePrice');
const articleUnitDetail             = require('./schema/articleUnitDetail');
const articleUnitNew                = require('./schema/articleUnitNew');
const mealAttr                      = require('./schema/mealAttr');
const mealItem                      = require('./schema/mealItem');
const orderPaymentItem              = require('./schema/orderPaymentItem');
const orderRefundRemark             = require('./schema/orderRefundRemark');
const orderRemark                   = require('./schema/orderRemark');
const platformOrder                 = require('./schema/platformOrder');
const platformOrderDetail           = require('./schema/platformOrderDetail');
const platformOrderExtra            = require('./schema/platformOrderExtra');
const refundRemark                  = require('./schema/refundRemark');
const syncLog                       = require('./schema/syncLog');
const unit                          = require('./schema/unit');
const unitDetail                    = require('./schema/unitDetail');
const virtualProducts               = require('./schema/virtualProducts');
const virtualProductsKitchen        = require('./schema/virtualProductsKitchen');
const supportTime                   = require('./schema/supportTime');
const articleSupportTime            = require('./schema/articleSupportTime');
const shopTvConfig                  = require('./schema/shopTvConfig');
const weightPackage                 = require('./schema/weightPackage');
const weightPackageDetail           = require('./schema/weightPackageDetail');
// const kitchenPrinter = require('./schema/kitchenPrinter');
// const articleKitchenPrinter = require('./schema/articleKitchenPrinter');
const kitchenPrinterRecord          = require('./schema/kitchenPrinterRecord');
// const kitchenGroup = require('./schema/kitchenGroup');
// const kitchenGroupDetail = require('./schema/kitchenGroupDetail');
const changeTable                   = require('./schema/changeTable');
const printRecord                   = require('./schema/printRecord');
const recommend                     = require('./schema/recommend');
const recommendArticle              = require('./schema/recommendArticle');
const dailyLogOperation             = require('./schema/dailyLogOperation');
const paymentReview                 = require('./schema/paymentReview');
const posConfig                     = require('./schema/posConfig');

role.define(POS_CLIENT);
perm.define(POS_CLIENT);
rolePerm.define(POS_CLIENT);
userRole.define(POS_CLIENT);

brand.define(POS_CLIENT);
brandSetting.define(POS_CLIENT);
chargeOrder.define(POS_CLIENT);
customer.define(POS_CLIENT);
customerAddress.define(POS_CLIENT);
printer.define(POS_CLIENT);
shopDetail.define(POS_CLIENT);
user.define(POS_CLIENT);
kitchen.define(POS_CLIENT);
area.define(POS_CLIENT);
tableQrcode.define(POS_CLIENT);
order.define(POS_CLIENT);
orderItem.define(POS_CLIENT);
article.define(POS_CLIENT);
articleFamily.define(POS_CLIENT);
articleKitchen.define(POS_CLIENT);
articleUnit.define(POS_CLIENT);
articleAttr.define(POS_CLIENT);
articlePrice.define(POS_CLIENT);
articleUnitDetail.define(POS_CLIENT);
articleUnitNew.define(POS_CLIENT);
mealAttr.define(POS_CLIENT);
mealItem.define(POS_CLIENT);
orderPaymentItem.define(POS_CLIENT);
orderRefundRemark.define(POS_CLIENT);
orderRemark.define(POS_CLIENT);
platformOrder.define(POS_CLIENT);
platformOrderDetail.define(POS_CLIENT);
platformOrderExtra.define(POS_CLIENT);
refundRemark.define(POS_CLIENT);
syncLog.define(POS_CLIENT);
unit.define(POS_CLIENT);
unitDetail.define(POS_CLIENT);
virtualProducts.define(POS_CLIENT);
virtualProductsKitchen.define(POS_CLIENT);
supportTime.define(POS_CLIENT);
articleSupportTime.define(POS_CLIENT);
shopTvConfig.define(POS_CLIENT);
weightPackage.define(POS_CLIENT);
weightPackageDetail.define(POS_CLIENT);
// kitchenPrinter.define(POS_CLIENT);
// articleKitchenPrinter.define(POS_CLIENT);
kitchenPrinterRecord.define(POS_CLIENT);
// kitchenGroup.define(POS_CLIENT);
// kitchenGroupDetail.define(POS_CLIENT);
changeTable.define(POS_CLIENT);
printRecord.define(POS_CLIENT);
recommend.define(POS_CLIENT);
recommendArticle.define(POS_CLIENT);
dailyLogOperation.define(POS_CLIENT);
paymentReview.define(POS_CLIENT);
posConfig.define(POS_CLIENT);


exports.client = POS_CLIENT;
exports.Sequelize = POS_CLIENT;
