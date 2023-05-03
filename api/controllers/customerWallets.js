module.exports = (app) => {
    const customerWalletsDB = app.data.customerWallets;
    const controller = {};
  
    controller.listCustomerWallets = (_, res) => res.status(200).json(customerWalletsDB);
  
    return controller;
  }