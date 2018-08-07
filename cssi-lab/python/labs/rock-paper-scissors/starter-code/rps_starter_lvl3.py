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

import random

win = 0
lose = 0
draw = 0

def rpsGame(rounds):
    global win
    global lose
    global draw
    
    while rounds > 0:
        plMove = get_player_move(raw_input("Enter a move! Enter \'r\' for \'Rock\', \'p\' for \'Paper\', and \'s\' for \'Scissors\'. "))
        cpuMove = get_computer_move()

        if determine_winner(plMove,cpuMove) == 'tie':
            draw += 1
        elif determine_winner(plMove,cpuMove) == 'player':
            win += 1
        else:
            lose += 1

        print_scoreboard(win,lose,draw)
        rounds -= 1

    print("Game Over! Final Scores:")

    print_scoreboard(win,lose,draw)

    if draw > win and draw > lose or win == lose:
        print("It's a draw!")
    elif win > lose:
        print("You win!")
    else:
        print("CPU Wins!")

def get_player_move(move):
    """Asks the user to enter a move as 'r', 'p', or 's', and return it"""
    while move != 'r' and move != 'p' and move != 's':
        move = raw_input("Invalid Input! Enter \'r\' for \'Rock\', \'p\' for \'Paper\', and \'s\' for \'Scissors\'. ")

    print("You used %s!"%(get_move_name(move)))
    return move


def get_computer_move():
    """Randomly generates the computer's move and
    returns it in the form of 'r', 'p', or 's'"""
    move = random.choice('rps')
    print("CPU used %s!"%(get_move_name(move)))
    return move


def determine_winner(player_move, comp_move):
    """Takes in a player move and computer move each as 'r', 'p', or 's',
    and returns the winner as 'player', 'computer', or 'tie'"""

    if player_move == comp_move:
        return "tie"
    elif (player_move == "r" and comp_move == "s") or \
         (player_move == "s" and comp_move == "p") or \
         (player_move == "p" and comp_move == "r"):
        return "player"
    else:
        return "computer"


def print_scoreboard(player_wins, comp_wins, ties):
    """Prints out the scoreboard neatly.  Returns nothing."""
    print("You: %s"%(win))
    print("CPU: %s"%(lose))
    print("Tie: %s"%(draw))


def get_move_name(short_move):
    """Takes in 'r', 'p', or 's', and returns 'Rock', 'Paper, or
    'Scissors' respectively. Use this to neatly print move choices"""

    if short_move == 'r':
        return "Rock"
    elif short_move == 'p':
        return "Paper"
    else:
        return "Scissors"

rpsGame(5)
