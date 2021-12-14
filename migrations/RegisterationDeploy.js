const hospital = artifacts.require("./RegisterationContract.sol");

module.exports = function (deployer) {
  deployer.deploy(hospital);
};
