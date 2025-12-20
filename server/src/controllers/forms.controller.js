import DisabledRegistration from "../models/DisabledRegistration.model.js";

export const submitDisabledForm = async (req, res) => {
  const record = await DisabledRegistration.create(req.body);
  res.status(201).json({ message: "Form submitted", record });
};

