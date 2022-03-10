import { RemoteCredentials } from 'aws-sdk';
import { S3Event } from '../types/s3Event';

export class Post {
  principalIds: string[];

  constructor(s3Event: S3Event) {
    this.principalIds = s3Event.Records.map(
      (record) => record.userIdentity.principalId
    );
  }

  isGeneratedBy = (generatorName: string): boolean =>
    this.principalIds.some((principalId) => {
      const principalIdChunk = principalId.split(':');
      return principalIdChunk[principalIdChunk.length - 1] === generatorName;
    });
}
