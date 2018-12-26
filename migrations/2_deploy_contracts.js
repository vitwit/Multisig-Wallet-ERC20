const configs = require('../configs/config')
var Contract = artifacts.require(configs.contract.name);

module.exports = function(deployer) {
  deployer.deploy(
    Contract, 
    configs.contract.argument.address,
    configs.contract.argument.required
    );
};