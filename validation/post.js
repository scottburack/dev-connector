const Validator = require("validator");
const isEmpty = require("./is-empty");

// If there are any errors, errors object gets filled. We check to see whether or not errors is empty. If so, then there are no errors. This is done before every register.

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 5, max: 300 })) {
    errors.text = "Post must be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
