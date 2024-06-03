from app import app
import logging

@app.route('/')
def index():
    logging.debug('Received request for index route')
    # Your application logic here
    return 'Hello, world!'

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    app.run(debug=True)
