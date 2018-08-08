print("#1")
def SmallestNumber(x,y,z):
    if x < y and x < z:
        return x
    elif y < z:
        return y
    else:
        return z

print(SmallestNumber(3,65,1))

print("#2")
def SumOfEven(n):
    total = 0
    for i in range((n*2)+1):
        if i%2==0:
            total = total + i
    return total

print(SumOfEven(3))

print("#3")

def func(x,y,z):
    m1,m2,m3=x,y,z
    if m1 > m2:
        tp = m1
        m1 = m2
        m2 = tp

    if m2 < m3:
        return m2
    else:
        if m3 < m1:
            return m1
        else:
            return m3

print(func(45,23,50))
#Output is 45
