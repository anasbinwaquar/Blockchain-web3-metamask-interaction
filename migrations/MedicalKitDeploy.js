const hospital = artifacts.require("./MedicalKit.sol");

module.exports = function (deployer) {
  deployer.deploy(hospital);
};
