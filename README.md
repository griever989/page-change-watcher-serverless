# page-change-watcher-serverless

A simple tool which uses an AWS Lambda to query a URL, look for a match in the page, and then do an action.

## Configuration
Set up `QUERY_URL` and `QUERY_SELECTOR` in `template.yaml` as follows:
- `QUERY_URL`: The page to fetch when the lambda runs
- `QUERY_SELECTOR`: The queryselector to look for on the page, when parsed as HTML

Make sure you have the AWS CLI set up and a credentials profile configured so that you can access the AWS API via command line.

Make sure you have the AWS SAM CLI installed as well.

## Deployment
```
sam build --beta-features
sam deploy --guided --profile your_aws_profile_name
```