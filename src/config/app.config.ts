import dotenv from 'dotenv';

dotenv.config();

export const APP_PORT = process.env.PORT || 9000;
export const APP_HOST = process.env.APP_HOST;

export const MAILER_CONFIG = {
	USER_EMAIL: process.env.USER_EMAIL,
	USER_PASS: process.env.USER_PASS,
} as const;

export const DB_CONFIG = {
	DB_NAME: process.env.DB_NAME,
	DB_HOST: process.env.DB_HOST,
	DB_USER: process.env.DB_USER,
	DB_PASSWORD: process.env.DB_PASSWORD,
} as const;

export const JWT_SECRET = String(process.env.JWT_SECRET);

export const S3_CONFIG = {
	ACCESS_KEY: process.env.AWS_ACCESS_KEY_ID,
	SECRET_KEY: process.env.AWS_SECRET_ACCESS_KEY,
	REGION: process.env.AWS_REGION,
	BUCKET: process.env.AWS_S3_BUCKET,
} as const;

export const REDIS_CONFIG = {
	HOST: process.env.REDIS_HOST,
	PORT: process.env.REDIS_PORT,
} as const;

export const ENCRYPTION_SECRET = process.env.ENCRYPTION_SECRET as string;

export const DEV_MODE = process.env.NODE_ENV === 'development';

export const APP_PKCS8_KEY = process.env.APP_PKCS8_KEY as string;

export const COOKIE_NAME = process.env.COOKIE_NAME as string;
