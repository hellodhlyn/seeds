# Flask Seed Application
## Prerequisites
* Python 3.6+
* virutalenv


## Development
### Setup
```bash
# Set virtual environment.
virtualenv env
source ./env/bin/activate

# Install requirements.
pip install -r requirements.txt
```

### Test
```bash
# Run lint
flake8 --exclude './env/*' .

# Run unit tests
coverage run --source . -m unittest discover .
```

### Run
```bash
FLASK_APP=app.py flask run -h 0.0.0.0 --with-threads
```

## Deployment
### Run using Docker
```bash
docker build -t <name> .
docker run -p 5000:5000 <name>
```
