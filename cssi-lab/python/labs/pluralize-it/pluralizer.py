def pluralizer(times,word):
    times = int(times)
    if times == 1:
        return "{0} {1}".format(times,word)
    else:
        if word[-3:] == "ife":
            return "{0} {1}ives".format(times, word[:-3])
        elif word[-2:] == "sh" or word[-2:] == "ch":
            return "{0} {1}es".format(times, word)
        elif word[-2:] == "us":
            return "{0} {1}i".format(times, word[:-2])
        elif word[-2:] == "ay" or word[-2:] == "oy" or word[-2:] == "ey" or word[-2:] == "uy":
            return "{0} {1}s".format(times, word)
        elif word[-1:] == "y":
            return "{0} {1}ies".format(times, word[-1:])
        else:
            return "{0} {1}s".format(times, word)

print(pluralizer(raw_input("Input a number: "),raw_input("Input a word: ")))
