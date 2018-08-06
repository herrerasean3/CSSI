noun1 = raw_input("Enter a noun! ")
noun2 = raw_input("Enter another noun! ")
adj1 = raw_input("Enter an adjective! ")
verb1= raw_input("Enter a verb not ending in \'ing\' ")

def madlibs(n1,n2,a1,v1):
    print("The %s jumped over a %s %s. Then the %s decided to stop being so %s and take up a hobby: %s-ing" % (n1,a1,n2,n2,a1,v1))

madlibs(noun1,noun2,adj1,verb1)
