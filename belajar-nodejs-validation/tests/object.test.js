import Joi from "joi";

describe('Joi object', () => {
    it('Should can validate object', () => {
        const loginSchema = Joi.object({
            username: Joi.string().email().required(),
            password: Joi.string().min(5).max(10).required(),
            isAdmin: Joi.boolean().default(false),
        });

        const request = {
            username: 'fadli@gmail.com',
            password: '126',
            isAdmin: true,
        };


        const result = loginSchema.validate(request, {
            abortEarly: false
        });
        console.info(result.error?.message);
    });

    it('Should can validate nested object', () => {
        const userSchema = Joi.object({
            username: Joi.string().email().required(),
            password: Joi.string().min(5).max(10).required(),
            isAdmin: Joi.boolean().default(false),
            profile: Joi.object({
                firstName: Joi.string().required(),
                lastName: Joi.string().required(),
                age: Joi.number().min(1).max(100).required(),
            }).required()
        });

        const request = {
            username: 'fadli@gmail.com',
            password: '1267896',
            isAdmin: true,
            profile: {
                firstName: 'Fadli',
                lastName: 'Ronaldo',
                age: 20,
            }
        };

        const result = userSchema.validate(request, {
            abortEarly: false
        });
        console.info(result.error?.message);
    });
});
