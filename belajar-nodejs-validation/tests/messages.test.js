import Joi from "joi";

describe("Joi custom messages", () => {
    it("Should can create custom messages", () => {
        const schema = Joi.string().min(3).max(100).required().messages({
           "string.min" : '{{#label}} minimal {{#limit}} karakter',
           "string.max" : '{{#label}} maksimal {{#limit}} karakter',
           "string.email" : '{{#label}} harus email valid',
           "any.required" : '{{#label}} wajib diisi'
        });

        const result = schema.validate("Fadli", {
            abortEarly: false
        });
        console.info(result.error?.message);
    });
});