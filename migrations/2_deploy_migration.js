//ADD UR DEPLOYMENTS HERE
const hospital = artifacts.require("./RegisterationContract.sol");

module.exports = function (deployer) {
  deployer.deploy(hospital);
};
const Medical = artifacts.require("./Kit.sol");

module.exports = function (deployer) {
  deployer.deploy(Medical);
};
