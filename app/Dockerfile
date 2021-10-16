FROM python:3.10

WORKDIR /app
COPY requirements.txt requirements.txt

RUN apt update
RUN apt-get install -y gcc libpq-dev iputils-ping
RUN apt-get install -y net-tools 
RUN pip3 install --no-cache-dir --upgrade -r requirements.txt

COPY . .

EXPOSE 8000