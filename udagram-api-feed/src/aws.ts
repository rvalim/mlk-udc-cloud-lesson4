import AWS = require('aws-sdk');
import {config} from './config/config';

const credentials = new AWS.SharedIniFileCredentials({profile: config.aws.profile});
AWS.config.credentials = credentials;

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: config.aws.region,
  params: {Bucket: config.aws.media_bucket},
});

// Generates an AWS signed URL for retrieving objects
export function getGetSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;
  return s3.getSignedUrl('getObject', {
    Bucket: config.aws.media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}

// Generates an AWS signed URL for uploading objects
export function getPutSignedUrl( key: string ): string {
  const signedUrlExpireSeconds = 60 * 5;
  return s3.getSignedUrl('putObject', {
    Bucket: config.aws.media_bucket,
    Key: key,
    Expires: signedUrlExpireSeconds,
  });
}
