/* eslint-disable max-len */
class CustomError extends Error {
    constructor(status, code, message, details = []) {
      super(message);

      this.status = status;
      this.code = code;
      this.message = message;
      this.details = details;
    }
}

const createError = (code, message, details) => {
  return class CreatedError extends CustomError {
    constructor() { super(code, message, details) }
  }
}

const errors = {
  APP_ERR_AUTHENTICATION: createError(401, 'AUTHENTICATION_REQUIRED', 'You have to login'),
  APP_ERR_PERMISSION: createError(401, 'PERMISSION_REQUIRED', 'You should have a permission'),
}


module.exports = {
    CustomError,
    errors,
}