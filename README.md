# Cloud-Based IT Support Landing Page

## Project Overview

This project is a simple cloud-hosted marketing landing page designed to demonstrate
how digital marketing concepts can be combined with cloud computing services.

The landing page promotes a fictional Cloud & IT Support service for small businesses
and focuses on lead generation and basic marketing analytics.

## Objectives

- Create a clear, conversion-focused marketing landing page
- Deploy the website using cloud infrastructure
- Capture user leads through a serverless backend
- Store and analyze lead data using cloud services

## Technologies Used

**Frontend**

- HTML
- CSS
- JavaScript

**Cloud Services (AWS)**

- Amazon S3 (static website hosting)
- AWS Lambda (serverless backend)
- Amazon DynamoDB (lead storage)
- Amazon API Gateway (API endpoint)

**Marketing Tools**

- Basic conversion funnel design
- (Optional) Google Analytics

## Architecture Overview

User → S3 Hosted Website → API Gateway → Lambda → DynamoDB

## Current Status

- Landing page created and tested locally
- S3 bucket created for static website
- Static website hosting enabled
- Public bucket policy applied
- Website successfully accessible via S3 endpoint
- Preparing for CloudFront setup

## Deployment Log

### Day 1 – Amazon S3 Static Hosting

- Created S3 bucket: wakwaya-cloud-it-support
- Disabled block public access
- Enabled static website hosting (index.html)
- Uploaded production build files
- Applied public read bucket policy
- Tested S3 website endpoint

### Day 2 – CloudFront CDN Setup

- Created a CloudFront distribution
- Configured S3 static website as the origin
- Enabled HTTP to HTTPS redirection
- Set default root object to index.html
- Tested CloudFront domain successfully

## Day 3 Progress

Created DynamoDB database for storing landing page leads.

Service used:

- Amazon DynamoDB

Table:
cloud-it-leads

Partition Key:
email

Purpose:
Store form submissions from the landing page.

## Day 4 Progress

Created backend using AWS Lambda.

Function:
save-lead-function

Runtime:
Python 3.12

Purpose:
Process form submissions from the landing page and store leads in DynamoDB.

## What I Learned

- Designing landing pages with a clear call-to-action
- Hosting static websites on AWS S3
- Using serverless functions to handle form submissions
- Storing and retrieving data from a cloud database
- Understanding how cloud services support marketing workflows

## Future Improvements

- Add analytics dashboard for lead tracking
- Improve UI and mobile responsiveness
- Secure API with validation and rate limiting
