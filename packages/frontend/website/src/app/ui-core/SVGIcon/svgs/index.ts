import { ReactComponent as lambda } from './ico-aws-lambda.svg';
import { ReactComponent as alert } from './ico-alert.svg';
import { ReactComponent as api } from './ico-api-container.svg';
import { ReactComponent as s3bucket } from './ico-aws-s3-bucket.svg';
import { ReactComponent as kinesisstream } from './ico-aws-kinesis-stream.svg';
import { ReactComponent as sqsqueue } from './ico-aws-sqs.svg';
import { ReactComponent as eventbridge } from './ico-aws-eventbridge.svg';
import { ReactComponent as apigateway } from './ico-aws-apigateway.svg';
import { ReactComponent as rds } from './ico-aws-rds.svg';
import { ReactComponent as logo } from './logo.svg';
interface Svgs {
    [name: string]: any;
}
const svgs: Svgs = {
    lambda,
    alert,
    api,
    s3bucket,
    kinesisstream,
    sqsqueue,
    eventbridge,
    apigateway,
    rds,
    logo,
};

export default svgs;
