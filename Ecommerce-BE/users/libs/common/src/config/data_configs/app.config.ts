import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
    env: process.env.NODE_ENV,

    port: Number(process.env.SERVICE_APP_PORT),

    access_token_expire_time: Number(process.env.ACCESS_TOKEN_EXPIRATION_TIME),

    access_token_secret_key: process.env.ACCESS_TOKEN_SECRET_KEY,

    refresh_token_expire_time: Number(process.env.REFRESH_TOKEN_EXPIRATION_TIME),

    refresh_token_secret_key: process.env.REFRESH_TOKEN_SECRET_KEY,

    limit_default: Number(process.env.TAKE_LIMTI_DEFAULT),

    aws_s3_bucket_name: process.env.AWS_S3_NAME,

    aws_s3_region: process.env.S3_REGION,

    aws_access_key_id: process.env.ACCESS_KEY_ID,

    aws_secret_access_key: process.env.SECRET_ACCESS_KEY,

    vnp_TmnCode: process.env.VNP_TMNCODE,

    vnp_HashSecret: process.env.VNP_HASHSECRET,

    vnp_Url: process.env.VNP_URL,

    vnp_Api: process.env.VNP_API,

    vnp_ReturnUrl: process.env.VNP_RETURNURL,

    hash_salt: process.env.SALT
}))
