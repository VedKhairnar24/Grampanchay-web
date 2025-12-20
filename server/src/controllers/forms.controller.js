import DisabledRegistration from "../models/DisabledRegistration.model.js";

export const submitDisabledForm = async (req, res) => {
  try {
    const record = await DisabledRegistration.create(req.body);
    res.status(201).json({ message: "Form submitted", record });
  } catch (error) {
    res.status(500).json({ message: "Error submitting form", error: error.message });
  }
};

export const getDisabledForms = async (req, res) => {
  try {
    const forms = await DisabledRegistration.find().sort({ createdAt: -1 });
    res.json(forms);
  } catch (error) {
    res.status(500).json({ message: "Error fetching forms", error: error.message });
  }
};

export const updateDisabledForm = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const form = await DisabledRegistration.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    res.json(form);
  } catch (error) {
    res.status(500).json({ message: "Error updating form", error: error.message });
  }
};

export const deleteDisabledForm = async (req, res) => {
  try {
    const { id } = req.params;

    const form = await DisabledRegistration.findByIdAndDelete(id);

    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }

    res.json({ message: "Form deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting form", error: error.message });
  }
};

