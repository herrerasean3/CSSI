import random

games = ["hypnosporic","convenance","proportionality","marveled","reprieve","outstation","dosage","fierily","unvictimized","bushiness","programming","thermophosphorescent","ausgleich","subutopian","The Game"]

def initBoard(word):
    temp = []
    for i in word:
        if i == " ":
            temp.append(" ")
        else:
            temp.append("_")
    return temp

def printBoard(board,guessList):
    print " ".join(board)
    print "Guesses: " + " ".join(guessList)

def addGuess(board,word,guess):
    for i in range(len(word)):
        if guess == word[i]:
            board[i] = guess

def game(word):
    chosenWord = word.lower()
    guesses = []
    tries = 5
    board = initBoard(chosenWord)

    while '_' in board:
        if tries > 0:
            printBoard(board,guesses)
            guess = raw_input("Enter a letter: ").lower()

            if len(guess) == 1:
                if guess in guesses:
                    print "You already used that letter! Try a different one!"
                elif guess in chosenWord:
                    addGuess(board,chosenWord,guess)
                else:
                    tries -= 1
                    print "Incorrect guess! You have {0} mistakes remaining.".format(tries)

                    guesses.append(guess)
        else:
            print "You lose!"
            print "The word was {0}".format(chosenWord)
            break
    else:
        print "".join(board)
        print "Congrats!! You guessed it correctly!"

game(random.choice(games))
