#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import jinja2
import os
import random
from google.appengine.api import urlfetch
import urllib
import json

URL = 'https://www.googleapis.com/customsearch/v1?'
KEY = 'AIzaSyBJDouf30lFPTJc6QY0C7YesP1pqAR9b7A'
CX = '005226442852353384715:5efrqp9ujjw'

class simpleURLFetcher(webapp2.RequestHandler):
    def get(self):
        query = 'goose'
        query_params = {'key': KEY, 'cx': CX, 'q': query}
        result = urlfetch.fetch(URL + urllib.urlencode(query_params))
        if result.status_code == 200:
            self.response.write(result.status_code)
            self.response.write(result.content)
        else:
            self.response.status_code = result.status_code

def get_fortune():
    #add a list of fortunes to the empty fortune_list array
    fortune_list=[
    'Its amazing how much good you can do if you dont care who gets the credit.',
    'If a person who has caused you pain and suffering has brought you, reconsider that person\'s value in your life.',
    'Good things take time.',
    'I am being held hostage in a fortune cookie factory! Please send help!',
    'You will enjoy good health, you will be surrounded by luxury.',
    'Take control of your life rather than letting things happen just like that!',
    'One who admires you greatly is hidden before your eyes.',
    'If you have something worth fighting for, then fight for it.',
    'Never give up on someone that you don\'t go a day without thinking about.',
    'You are always welcome in any gathering.',
    'You have an important new business development shaping up.'
    ]
    #use the random library to return a random element from the array

    random_fortune = random.choice(fortune_list)
    return(random_fortune)


#remember, you can get this by searching for jinja2 google app engine
jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True
)

class FortuneHandler(webapp2.RequestHandler):
    def get(self):
        fortune_template = jinja_current_directory.get_template('templates/fortune-results.html')

        fort_dic={"fortune": get_fortune()
        }

        self.response.write(fortune_template.render(fort_dic))

    #add a post method
    def post(self):
        fortune_template = jinja_current_directory.get_template('templates/fortune-results.html')
        uas = self.request.get('user_astrological_sign')

        fort_dic={
        "fortune": get_fortune(),
        "user_astro_sign": uas,
        "action": True
        }

        self.response.write(fortune_template.render(fort_dic))

class HelloHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Hello World. Welcome to the root route of my app')

class GoodbyeHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('My response is Goodbye World.')


#the route mapping
app = webapp2.WSGIApplication([
    #this line routes the main url ('/')  - also know as
    #the root route - to the Fortune Handler
    ('/', HelloHandler),
    ('/predict', FortuneHandler), #maps '/predict' to the FortuneHandler
    ('/simple',simpleURLFetcher)
], debug=True)
