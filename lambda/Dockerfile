# Pull the base image with python 3.12 as a runtime for your Lambda
FROM public.ecr.aws/lambda/python:3.12

# Copy the earlier created requirements.txt file to the container
COPY lambda/requirements.txt ./

# Install the python requirements from requirements.txt
RUN python3.12 -m pip install -r requirements.txt

# Copy the earlier created app.py file to the container
COPY ./lambda/app.py ./

# Set the CMD to your handler
CMD ["app.handler"]
