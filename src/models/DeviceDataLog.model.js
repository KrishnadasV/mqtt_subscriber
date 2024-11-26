const mongoose = require('mongoose');

const deviceDataLogSchema = new mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },
    machineStatusToIot: { type: Number },
    runningModelToIot: { type: Number },
    cycleTime1: { type: Number },
    cycleTime2: { type: Number },
    cycleTime3: { type: Number },
    cycleTime4: { type: Number },
    cycleTime5: { type: Number },
    operatorId1st2Char: { type: Number },
    operatorId2nd2Char: { type: Number },
    operatorId3rd2Char: { type: Number },
    operatorId4th2Char: { type: Number },
    operatorId5th2Char: { type: Number },
    rhSideProductionCount: { type: Number },
    lhSideProductionCount: { type: Number },
    breakDownStatus: { type: Number },
    machineInFaulty: { type: Number },
    pokaYokeSensor1Status: { type: Number },
    pokaYokeSensor2Status: { type: Number },
    pokaYokeSensor3Status: { type: Number },
    pokaYokeSensor4Status: { type: Number },
    pokaYokeSensor5Status: { type: Number },
    pokaYokeSensor6Status: { type: Number },
    pokaYokeSensor7Status: { type: Number },
    pokaYokeSensor8Status: { type: Number },
    pokaYokeSensor9Status: { type: Number },
    pokaYokeSensor10Status: { type: Number },
    communicationBitToIot: { type: Number },
    communicationBitFromCloud: { type: Number },
    autoMode: { type: Number },
    manualMode: { type: Number },
    emergency: { type: Number },
    machineHoldFromIot: { type: Number },
    pokaYokeResetFromIot: { type: Number },
    runningShiftFromIot: { type: Number },
    timestamp: {
        type: Date
    },
    dbPersistTime: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DeviceDataLog', deviceDataLogSchema);
