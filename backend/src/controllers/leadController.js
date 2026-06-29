const Lead = require('../models/Lead');
const { sendLeadNotification } = require('../utils/emailService');

const createLead = async (req, res, next) => {
  try {
    const { name, phone, email, insuranceType, message, whatsappConsent, source } = req.body;

    const lead = await Lead.create({
      name,
      phone,
      email,
      insuranceType,
      message,
      whatsappConsent,
      source,
    });

    // Send email notification to admin asynchronously
    sendLeadNotification(lead).catch(err => console.error('Failed to send email notification:', err));

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

const getLeads = async (req, res, next) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: leads.length,
      data: leads,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createLead,
  getLeads,
};
