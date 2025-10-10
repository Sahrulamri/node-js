import Joi from "joi";

describe('Validation JOI', () => {
    it("Should can create validation schema", () => {
        const schema = Joi.string().min(5).max(10).required();
        const request = "Fadli";
        const result = schema.validate(request);
        if(result.error){
            console.info(result.error);
        }
    });

    it("Should can validate data type", () => {
        const usernameSchema = Joi.string().email().required();
        const isAdminSchema = Joi.boolean().required();
        const priceSchema =Joi.number().required().min(1000).max(1000000);

        const resultUsername = usernameSchema.validate("Fadli");
        console.info(resultUsername.error?.message);

        const resultIsAdmin = isAdminSchema.validate("true");
        console.info(resultIsAdmin.error?.message);

        const resultPrice = priceSchema.validate(100);
        console.info(resultPrice.error?.message);
    });
});


