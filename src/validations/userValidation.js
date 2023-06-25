import Joi from "@hapi/joi";

const userValidationSchema = Joi.object({
    names: Joi.string().required().min(2).label("Name").regex(/^[A-Za-z ]+$/).messages({
        "string.pattern.base": "The name field can not include numbers and special characters",
        "string.empty": "The name field can not be empty"
    }),

    nationalId: Joi.string().required().min(2).label("National ID").regex(/^\d+$/).messages({
      "string.pattern.base": "The national ID field should only include numbers",
      "string.empty": "The national ID field cannot be empty"
    }),

    email: Joi.string().required().email().messages({
        "string.email": "Invalid email",
        "string.empty": "The email field can not be empty"
    }),

    password: Joi.string().required().regex(/^(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*[0-9]){1,}).{5,}$/).messages({
        "string.pattern.base": "The password should have at least one capital letter and a number",
        "string.empty": "The password field can not be empty"
    }),

    repeatPassword: Joi.string().required().equal(Joi.ref("password")).messages({
        "any.only": "Passwords don't match"
    })
})


export default userValidationSchema