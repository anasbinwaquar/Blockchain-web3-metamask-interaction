const Medical = artifacts.require("./MedicalKit.sol");

module.exports = function (deployer) {
  deployer.deploy(Medical);
};
