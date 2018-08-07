x = int(raw_input("Enter a value for x: "))
y = int(raw_input("Enter a value for y: "))

print("{0} + {1} = {2}".format(x,y,x+y))
print("{0} - {1} = {2}".format(x,y,x-y))
print("{0} * {1} = {2}".format(x,y,x*y))
if y!=0:
    print("{0} / {1} = {2}".format(x,y,x/float(y)))
    print("{0} % {1} = {2}".format(x,y,x%y))

def fizzBuzz(num):
    for i in range(int(num)):
        if (i+1)%5==0 and (i+1)%3==0:
            print("Fizzbuzz")
        elif (i+1)%5==0:
            print("Buzz")
        elif (i+1)%3==0:
            print("Fizz")
        else:
            print(i+1)

fizzBuzz(raw_input("Enter a number to use for the range: "))
