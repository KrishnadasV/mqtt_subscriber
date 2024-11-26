const DeviceDataLog = require('../models/DeviceDataLog.model');
const mapDeviceDataToSchema = (inputData, key, timestamp) => {
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
      lhSideProductionCount:inputData["13"],
      breakDownStatus:inputData["14"],
      machineInFaulty:inputData["15"],
      pokaYokeSensor1Status:inputData["16"],
      pokaYokeSensor2Status:inputData["17"],
      pokaYokeSensor3Status:inputData["18"],
      pokaYokeSensor4Status:inputData["19"],
      pokaYokeSensor5Status:inputData["20"],
      pokaYokeSensor6Status:inputData["21"],
      pokaYokeSensor7Status:inputData["22"],
      pokaYokeSensor8Status:inputData["23"],
      pokaYokeSensor9Status:inputData["24"],
      pokaYokeSensor10Status:inputData["25"],
      communicationBitToIot:inputData["26"],
      communicationBitFromCloud:inputData["27"],
      autoMode:inputData["28"],
      manualMode:inputData["29"],
      emergency:inputData["30"],
      machineHoldFromIot:inputData["31"],
      pokaYokeResetFromIot:inputData["32"],
      runningShiftFromIot:inputData["33"],
      timestamp:timestamp
    });
  };

  module.exports = mapDeviceDataToSchema;