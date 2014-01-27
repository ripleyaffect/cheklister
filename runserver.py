import os
from checklist import app

def runserver():
	port = int(os.environ.get('PORT', 5000))
	app.run(host='localhost', port=port)

if __name__ == '__main__':
	runserver()