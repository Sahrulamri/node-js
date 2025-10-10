import Joi from "joi";
describe('Joi array', () => {
    it('Should can validate array', () => {
        const hobbiesSchema = Joi.array().items(Joi.string().min(3).max(10)).min(2).max(5).required();

        const hobbies = ["coding", "gaming", "sleeping"];

        const result = hobbiesSchema.validate(hobbies, {
            abortEarly: false
        });
        console.info(result.error?.message);
    });

    it('Should can validate array of object', () => {
        const addressSchema = Joi.array().min(1).items(Joi.object({
            street: Joi.string().required(),
            city: Joi.string().required(),
            postalCode: Joi.string().min(5).max(10).required(),
        })).required();

        const address = [
            {
                street: "Jl. Raya",
                city: "Jakarta",
                postalCode: "12345"
            }
        ];

        const result = addressSchema.validate(address, {
            abortEarly: false
        });
        console.info(result.error?.message);

        if(!result.error){
            console.info(result.value);
        }
        
    });
});