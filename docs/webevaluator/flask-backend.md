# Flask-Backend
## Introduction

This repo contains the flask backend server code which by default runs locally on the port 8000.

## Deployed Link
https://flask-backend-aman-codes.vercel.app/status

## Pre-requisites

Your machine should have Python3 installed to use it locally.

## Setting up the repository locally

1. Fork the repo to your account.

2. Clone your forked repo to your local machine:
Replace `<YOUR_GITHUB_USERNAME>` with your actual GitHub username in the below command. This will clone the code to your local machine.
```
git clone https://github.com/<YOUR_GITHUB_USERNAME>/flaskbackend.git (https)
```
or
```
git clone git@github.com:<YOUR_GITHUB_USERNAME>/flaskbackend.git (ssh)
```

3. Change directory to `flaskbackend`.
```
cd flaskbackend
```

4. Check the remote of your local repo by:
```
git remote -v
```
It should output the following:
```
origin	https://github.com/<YOUR_GITHUB_USERNAME>/flaskbackend.git (fetch)
origin	https://github.com/<YOUR_GITHUB_USERNAME>/flaskbackend.git (push)
```
or
```
origin	git@github.com:<YOUR_GITHUB_USERNAME>/flaskbackend.git (fetch)
origin	git@github.com:<YOUR_GITHUB_USERNAME>/flaskbackend.git (push)
```

5. Add remote upstream by running the below command:
```
git remote add upstream https://github.com/webevaluator/flaskbackend.git (https)
```
or
```
git remote add upstream git@github.com:webevaluator/flaskbackend.git (ssh)
```

6. Running `git remote -v` should then print the following:
```
origin	https://github.com/<username>/flaskbackend.git (fetch)
origin	https://github.com/<username>/flaskbackend.git (push)
upstream	https://github.com/webevaluator/flaskbackend.git (fetch)
upstream	https://github.com/webevaluator/flaskbackend.git (push)
```
or
```
origin	git@github.com:<username>/flaskbackend.git (fetch)
origin	git@github.com:<username>/flaskbackend.git (push)
upstream	git@github.com:webevaluator/flaskbackend.git (fetch)
upstream	git@github.com:webevaluator/flaskbackend.git (push)
```

## Run locally

1. To create a virtual environment run 
```python
python3 -m venv flask
```

2. To activate the virtual environment run 
```
source flask/bin/activate
```

3. To install the required dependencies run 
```python
pip install -r requirements.txt
```

4 Finally, for starting the server run:
```
python3 index.py
```
Go to: http://localhost:8000/status

## Security Header Check

Run app.py as flask app

Send URL as POST data on `http://localhost:8000/securityheader` just as below:

```
{"URL":"https://www.marsh.com/uk/home.html"}
```

will give results as follows:

```
{
    "https://www.marsh.com/uk/home.html": {
        "missing": [
            "Content-Security-Policy",
            "Referrer-Policy",
            "Expect-CT",
            "Permissions-Policy",
            "Cross-Origin-Embedder-Policy",
            "Cross-Origin-Resource-Policy",
            "Cross-Origin-Opener-Policy"
        ],
        "present": {
            "Strict-Transport-Security": "max-age=63072000; includeSubdomains; preload",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "allow-from *.force.com",
            "X-XSS-Protection": "1; mode=block"
        }
    },
    "information_disclosure": {
        "Server": "Apache"
    }
}
```


## SSL Checker API

Run app.py as flask app

Send URL as POST data on `http://localhost:8000/ssl` just as below:

```
{
    "URL":"https://www.marsh.com/uk/home.html"
}
```

will give results as follows:

```
{
    "www.marsh.com": {
        "host": "www.marsh.com",
        "issued_to": "author.www.marshinc.net",
        "issued_o": "Marsh & McLennan Companies, Inc.",
        "issuer_c": "GB",
        "issuer_o": "COMODO CA Limited",
        "issuer_ou": null,
        "issuer_cn": "COMODO RSA Organization Validation Secure Server CA",
        "cert_sn": "61095241467533998605412844127995333741",
        "cert_sha1": "93:B2:55:FD:7B:D3:68:7D:3B:50:B6:E6:CB:5E:CB:64:AF:75:D0:36",
        "cert_alg": "sha256WithRSAEncryption",
        "cert_ver": 2,
        "cert_sans": "DNS:author.www.marshinc.net; DNS:affinity.marsh.com; DNS:amrae.marsh.com; DNS:author-dev.www.marshinc.net; DNS:author-dev2.www.marshinc.net; DNS:author-prod2.www.marshinc.net; DNS:author-qa.www.marshinc.net; DNS:author-qa2.www.marshinc.net; DNS:author-stage.www.marshinc.net; DNS:author-stage2.www.marshinc.net; DNS:content.linqbymarsh.com; DNS:dev-refresh.www.marsh.com; DNS:dev.content.linqbymarsh.com; DNS:dev.trustedpals.com; DNS:dev.upgrade.www.marsh.com; DNS:dev.www.marsh.com; DNS:dev.www.trustedpals.com; DNS:ferma.marsh.com; DNS:graduate.marsh.com; DNS:intranet.marsh.com; DNS:jlt.marsh.com; DNS:lorant.marsh.com; DNS:marsh.com; DNS:marshspecialty.marsh.com; DNS:mercerprod.www.marshinc.net; DNS:nz.mercermarshbenefits.com; DNS:pcs.marsh.com; DNS:preview.www.marsh.com; DNS:proliability.com; DNS:qa-refresh.www.marsh.com; DNS:qa.content.linqbymarsh.com; DNS:qa.trustedpals.com; DNS:qa.upgrade.www.marsh.com; DNS:qa.www.marsh.com; DNS:qa.www.trustedpals.com; DNS:qa.youraccountonline.www.marshinc.net; DNS:refresh.www.marsh.com; DNS:stage-refresh.www.marsh.com; DNS:stage.affinity.marsh.com; DNS:stage.amrae.marsh.com; DNS:stage.ferma.marsh.com; DNS:stage.insolutionsworld.marsh.com; DNS:stage.micro.www.marsh.com; DNS:stage.pcs.marsh.com; DNS:stage.upgrade.www.marsh.com; DNS:stage.www.marsh.com; DNS:staging.content.linqbymarsh.com; DNS:staging.upgrade.content.linqbymarsh.com; DNS:staging.www.trustedpals.com; DNS:uprr.marsh.com; DNS:wortham.marsh.com; DNS:www.marsh-mbj.com; DNS:www.marsh.com; DNS:www.marshadvantage.com.au; DNS:www.mercermarshbenefits.com",
        "cert_exp": false,
        "cert_valid": true,
        "valid_from": "2021-11-30",
        "valid_till": "2022-03-09",
        "validity_days": 99,
        "days_left": 71,
        "valid_days_to_expire": 70,
        "tcp_port": 443,
        "grade": "A+",
        "poodle_vuln": false,
        "heartbleed_vuln": false,
        "heartbeat_vuln": false,
        "freak_vuln": false,
        "logjam_vuln": false,
        "drownVulnerable": false
    }
}
```