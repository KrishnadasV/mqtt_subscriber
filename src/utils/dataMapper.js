const DeviceDataLog = require('../models/DeviceDataLog.model');
const mapDeviceDataToSchema = (key, payload) => {
  const inputData = payload.tags[key];
  return new DeviceDataLog({
    deviceId: key,
    machineStatusToIot: inputData["0"],
    runningModelToIot: inputData["1"],
    cycleTime1: inputData["2"],
    cycleTime2: inputData["3"],
    cycleTime3: inputData["4"],
    cycleTime4: inputData["5"],
    cycleTime5: inputData["6"],
    operatorId1st2Char: inputData["7"],
    operatorId2nd2Char: inputData["8"],
    operatorId3rd2Char: inputData["9"],
    operatorId4th2Char: inputData["10"],
    operatorId5th2Char: inputData["11"],
    rhSideProductionCount: inputData["12"],
    lhSideProductionCount: inputData["13"],
    breakDownStatus: inputData["14"],
    pokaYokeSensor1Status: inputData["15"],
    pokaYokeSensor2Status: inputData["16"],
    pokaYokeSensor3Status: inputData["17"],
    pokaYokeSensor4Status: inputData["18"],
    pokaYokeSensor5Status: inputData["19"],
    pokaYokeSensor6Status: inputData["20"],
    pokaYokeSensor7Status: inputData["21"],
    pokaYokeSensor8Status: inputData["22"],
    pokaYokeSensor9Status: inputData["23"],
    pokaYokeSensor10Status: inputData["24"],
    communicationBitToIot: inputData["25"],
    autoMode: inputData["26"],
    manualMode: inputData["27"],
    emergency: inputData["28"],
    machineInFaulty: inputData["29"],
    machineHoldFromIot: inputData["30"],
    communicationBitFromCloud: inputData["40"],
    pokaYokeResetFromIot: inputData["41"],
    runningShiftFromIot: inputData["42"],
    timestamp: payload.timestamp
  });
};

module.exports = mapDeviceDataToSchema;