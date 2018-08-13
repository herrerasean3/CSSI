# Copyright 2016 Google Inc.
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

import webapp2
import jinja2
import os

the_jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainPage(webapp2.RequestHandler):
    def get(self):
        welcome_template = the_jinja_env.get_template('templates/welcome.html')

        temlate_dic={"country": "usa",
        "region_name": "north east",
        "region_num": 121,
        "url": ["http://images.ny-pictures.com/photo2/m/29248_m.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Philadelphia_skyline_August_2007.jpg/320px-Philadelphia_skyline_August_2007.jpgAC"],
        "city": ["new york","boston","philadelphia"],
        "message": "welcome to:"
        }

        self.response.write(welcome_template.render(temlate_dic))

class CssiPage(webapp2.RequestHandler):
    def get(self):
        self.response.headers['Content-Type'] = 'text/html'
        self.response.write('<h1>Goodbye World!</h1>')

class ShowMemeHandler(webapp2.RequestHandler):
    def post(self):
        results_template = the_jinja_env.get_template('templates/results.html')
        firstname = self.request.get('firstname')
        lastname = self.request.get('lastname')
        age = self.request.get('age')

        webform_dict = {"fn": firstname, "ln": lastname, "age": age}
        self.response.write(results_template.render(webform_dict))


routes = [('/', MainPage),('/google', CssiPage),('/showresults',ShowMemeHandler)]

app = webapp2.WSGIApplication(routes, debug=True)
