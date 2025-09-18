const connectDB = require('../config/db');
const User = require('../models/user');
const Laboratory = require('../models/laboratory');
const HealthRecord = require('../models/healthRecord');
const MedicalIncident = require('../models/medicalIncident');
const Neurology = require('../models/neurology');
const Quarantine = require('../models/quarantine');
const PeriodicHealthCheck = require('../models/periodicHealthCheck');

(async () => {
  try {
    await connectDB();
    await User.deleteMany({});
    await Laboratory.deleteMany({});
    await HealthRecord.deleteMany({});
    await MedicalIncident.deleteMany({});
    await Neurology.deleteMany({});
    await Quarantine.deleteMany({});
    await PeriodicHealthCheck.deleteMany({});

    const user1 = new User({
      name: 'Nguyen Van A',
      role: 'Student',
      email: 'a@example.com',
      phoneNumbers: ['0123456789']
    });
    await user1.save();

    const hr = new HealthRecord({
      bloodType: 'O+',
      allergies: ['Penicillin'],
      chronicDiseases: ['Asthma'],
      user: user1._id
    });
    await hr.save();
    await User.findByIdAndUpdate(user1._id, { $push: { healthRecords: hr._id } });

    const lab = new Laboratory({
      testType: 'COVID PCR',
      testDate: new Date(),
      testResult: 'Negative',
      user: user1._id
    });
    await lab.save();
    await User.findByIdAndUpdate(user1._id, { $push: { laboratories: lab._id } });

    const mi = new MedicalIncident({
      severityLevel: 'Low',
      actionTaken: 'First aid',
      user: user1._id
    });
    await mi.save();
    await User.findByIdAndUpdate(user1._id, { $push: { medicalIncidents: mi._id } });

    const neu = new Neurology({
      diagnosis: 'Migraine',
      symptoms: ['Headache','Nausea'],
      treatmentPlan: 'Painkillers',
      user: user1._id,
      laboratories: [lab._id]
    });
    await neu.save();
    await User.findByIdAndUpdate(user1._id, { $push: { neurologies: neu._id } });

    const q = new Quarantine({
      reasonForQuarantine: 'Exposure',
      location: 'Dorm A',
      healthStatusDuringQuarantine: 'Stable',
      supervisor: 'Nurse B',
      bmi: 22.5,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7*24*3600*1000),
      user: user1._id
    });
    await q.save();
    await User.findByIdAndUpdate(user1._id, { $push: { quarantines: q._id } });

    const p = new PeriodicHealthCheck({
      heartRate: 72,
      bmi: 22.5,
      user: user1._id
    });
    await p.save();
    await User.findByIdAndUpdate(user1._id, { $push: { periodicChecks: p._id } });

    console.log('Seed completed');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
