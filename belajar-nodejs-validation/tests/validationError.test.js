import Joi from "joi";

describe("Joi validation error", () => {
    it("Should can get validation error details", () => {
        const usernameSchema = Joi.string().email().required();
        const result = usernameSchema.validate("ups", {
            abortEarly: false
        });
        console.info(result.value);

        if (result.error) {
            result.error.details.forEach((detail) => {
                console.info(detail.message);
                console.info(detail.path);
                console.info(detail.type);
            });
        }
    });
});