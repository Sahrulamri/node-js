import Joi from "joi";

describe("Joi custom messages", () => {
    it("Should can create custom messages", () => {
        const registerSchema = Joi.object({
            username: Joi.string().required().min(3).max(100).email(),
            password: Joi.string().required().min(6).max(100).custom((value, helpers) => {
                if(value.includes(' ')){
                    return helpers.error('password.noSpace', {value});
                }
                return value;
            }),
            confirmPassword: Joi.string().required().min(6).max(100).valid(Joi.ref('password')).messages({
                'any.only': 'confirm password harus sama dengan password'
            })
        }).custom((value, helpers) => {
            if(value.password !== value.confirmPassword){
                return helpers.error('password.match', {value});
            } else {
                return value;
            }
        }).messages({
            'password.noSpace': 'password tidak boleh mengandung spasi',
            'password.match': 'password dan confirm password harus sama',
            'string.min': '{{#label}} minimal {{#limit}} karakter',
            'string.max': '{{#label}} maksimal {{#limit}} karakter',
            'string.email': '{{#label}} harus email valid',
            'any.required': '{{#label}} wajib diisi'
        });

        const request = {
            username: 'fadli06@gmail.com',
            password: '123456',
            confirmPassword: '123456'
        };

        const result = registerSchema.validate(request, {
            abortEarly: false
        });
        console.info(result.error?.message);
        console.info(result.value);
    });
});