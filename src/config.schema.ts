import Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
  DB_CONFIG_HOST: Joi.string().required(),
  DB_CONFIG_PORT: Joi.number().default(5432).required(),
  DB_CONFIG_USER: Joi.string().required(),
  DB_CONFIG_PASSWORD: Joi.string().required(),
  DB_CONFIG_DATABASE: Joi.string().required(),
  PORT: Joi.number().default(3000).required(),
  STAGE: Joi.string().default('dev').valid('dev', 'prod'),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION: Joi.string().default('1d').required(),
});
