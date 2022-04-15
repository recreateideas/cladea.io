#!/bin/sh
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

if [ $branch == "master" ]
then
   npm run build && aws s3 --profile website cp ./build s3://website-master-websitebucketb3e12673-9z4ttqevnonu/ --recursive
   aws cloudfront --profile website create-invalidation --distribution-id E1RN2D4TS83P3A --paths '/*'
else
    echo
    echo "Merge code to master and deploy from there!"
    echo
fi