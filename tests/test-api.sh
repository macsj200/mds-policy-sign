#!/bin/bash

echo "------Running API tests------"
mkdir -p ./tests/output

echo ""

echo "Testing signing"
curl -s localhost:3000/sign -d @tests/sample-policy.json -X POST -H "Content-Type: application/json" > ./tests/output/signature.txt
diff ./tests/expected/signature.txt ./tests/output/signature.txt

echo ""

echo "Testing verifying"
curl -s localhost:3000/verify -d @tests/sample-policy-signature.json -X POST -H "Content-Type: application/json" > ./tests/output/verify.txt
diff ./tests/expected/verify.txt ./tests/output/verify.txt

echo ""

echo "----Finished running tests---"
