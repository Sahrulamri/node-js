import Joi from 'joi';

describe('Joi date', () => {
    it('Should can validate date', () => {
        const birthDateSchema = Joi.date().min('1-1-2000').max('1-1-2020').required();
        const result = birthDateSchema.validate('2021-01-01');
        console.info(result.error?.message);
        console.info(typeof result.value);
        console.info(typeof result.error);

        const result2 = birthDateSchema.validate('2010-01-01');
        console.info(result2.error?.message);
    });
});
