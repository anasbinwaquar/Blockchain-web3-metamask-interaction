const hospital = artifacts.require("./hospital.sol");

module.exports = function (deployer) {
  deployer.deploy(hospital);
};
