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

choice = ""
item = ""
answer = ""

print("Welcome to the shopping list app!")

shopping_list = []

while choice.lower() != "e":
    print("Please choose your action from the following list:")
    print("a. Add an item to the list")
    print("b. Remove an item from the list")
    print("c. Check to see if an item is on the list")
    print("d. Show all items on the list")
    print("e. exit")

    choice = raw_input("Enter your choice [a|b|c|d|e]:")

    if choice == "a":
        item = raw_input("Enter a new item: ").strip()
        item = item.split(",")
        if item in shopping_list == True:
            print("{0} is already in the shopping list!".format(item))
        else:
            shopping_list.extend(item)
            print("{0} has been added to the shopping list!".format(item))

    elif choice == "b":
        item = raw_input("Enter an item to remove: ")
        if item in shopping_list == False:
            print("{0} is not on your shopping list!".format(item))
        else:
            answer = raw_input("Are you sure you want to remove {0} to your shopping list? y/n".format(item)).lower()
            if answer == "y":
                shopping_list.remove(item)
                print("{0} has been removed from the shopping list!".format(item))

    elif choice == "c":
        item = raw_input("Enter the item's name: ")
        if item in shopping_list == True:
            print("{0} is in the shopping list".format(item))
        else:
            print("{0} is not in the shopping list.".format(item))
            answer = raw_input("Would you like to add {0} to your shopping list? y/n ".format(item)).lower()
            if answer == "y":
                shopping_list.extend(item)
                print("{0} has been added to the shopping list!".format(item))

    elif choice == "d":
        print(shopping_list)
    else:
        break
