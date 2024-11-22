def handler(event):
    print("invoked!!")
    return {
        "statusCode": 200,
        "body": "Hello World!"
    }
