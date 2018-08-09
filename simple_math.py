from random import randint

def Maximum(nums):
    max = nums[0]
    for i in nums:
        if i > max:
            max = i
    return max

def Minimum(nums):
    min = nums[0]
    for i in nums:
        if i < min:
            min = i
    return min

def Range(nums):
    return Maximum(nums) - Minimum(nums)

def Average(nums):
    total = 0
    for i in nums:
        total += i
    return total/float(len(nums))

def main():
    numbers = []
    for i in range(30):
        numbers.append(randint(1,100))

    print numbers
    print "The maximum value in numbers is {0}".format(Maximum(numbers))
    print "The minimum value in numbers is {0}".format(Minimum(numbers))
    print "The range value in numbers is {0}".format(Range(numbers))
    print "The average value in numbers is {0}".format(Average(numbers))
main()
