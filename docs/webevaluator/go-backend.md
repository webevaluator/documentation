# Golang-Backend 

## Introduction

This repo contains the Go backend server code which by default runs locally on the port 8080.

## Deployed Link

https://gowebevaluator.onrender.com/status

## Pre-requisites

Your machine should have golang version 1.17 or above, Npm(or Yarn) and Node.js installed to use it locally.

## Setting up the repository locally

1. Fork the repo to your account.

2. Clone your forked repo to your local machine:
Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username in the below command. This will clone the code to your local machine.
```
git clone https://github.com/<YOUR_GITHUB_USERNAME>/gobackend.git (https)
```
or
```
git clone git@github.com:<YOUR_GITHUB_USERNAME>/gobackend.git (ssh)
```

3. Change directory to `gobackend`.
```
cd gobackend
```

4. Check the remote of your local repo by:
```
git remote -v
```
It should output the following:
```
origin	https://github.com/<YOUR_GITHUB_USERNAME>/gobackend.git (fetch)
origin	https://github.com/<YOUR_GITHUB_USERNAME>/gobackend.git (push)
```
or
```
origin	git@github.com:<YOUR_GITHUB_USERNAME>/gobackend.git (fetch)
origin	git@github.com:<YOUR_GITHUB_USERNAME>/gobackend.git (push)
```

5. Add remote upstream by running the below command:
```
git remote add upstream https://github.com/webevaluator/gobackend.git (https)
```
or
```
git remote add upstream git@github.com:webevaluator/gobackend.git (ssh)
```

6. Running `git remote -v` should then print the following:
```
origin	https://github.com/<username>/gobackend.git (fetch)
origin	https://github.com/<username>/gobackend.git (push)
upstream	https://github.com/webevaluator/gobackend.git (fetch)
upstream	https://github.com/webevaluator/gobackend.git (push)
```
or
```
origin	git@github.com:<username>/gobackend.git (fetch)
origin	git@github.com:<username>/gobackend.git (push)
upstream	git@github.com:webevaluator/gobackend.git (fetch)
upstream	git@github.com:webevaluator/gobackend.git (push)
```

## Run locally

- For installing dependencies run
```sh
go install
npm install -g nodemon 
```

- For starting the server run:
```sh
nodemon --exec go run main.go --signal SIGTERM
```
It will start the server at `localhost:8080`. You can check the server status at `localhost:8080/status`.