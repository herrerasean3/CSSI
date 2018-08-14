from google.appengine.ext import ndb
import hogwarts_models


houses = hogwarts_models.House.query()
h_filter = houses.filter(hogwarts_models.House.name == "Ravenclaw")
print h_filter.get().mascot

courses = hogwarts_models.Course.query(projection = ["name"],distinct = True)
print courses.count()

teachers = hogwarts_models.Teacher.query()
t_filter = teachers.order(hogwarts_models.Teacher.years_experience)
print t_filter.get().name

enrolled = hogwarts_models.Enrollment.query(projection = ["name"],distinct=True)
course_max = 0
en_query = hogwarts_models.Enrollment.query()

for i in enrolled.fetch():
 if en_query.filter(hogwarts_models.Enrollment.student == i.key)

har_key = hogwarts_models.Student.query()
har_filter = har_key.filter(hogwarts_models.Student.first_name=="Harry").get()
print har_filter

wands = hogwarts_models.Wand.query()
w_filter = wands.filter(hogwarts_models.Wand.owner == har_filter.key)
print w_filter.get().material
