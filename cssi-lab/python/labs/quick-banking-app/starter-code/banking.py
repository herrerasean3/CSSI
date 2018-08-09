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

# Replace "pass" with your code
import time

class Transaction(object):
    def __init__(self, type, amount, dest_account='N/A'):
        self.time = time.time()
        self.type = type
        self.amount = amount
        self.dest_account = dest_account

    def __str__(self):
        if self.dest_account == "N/A":
            return "{0}: {1} ${2}".format(self.time,self.type,self.amount)
        else:
            return "{0}: {1} ${2} to account \'{3}\'".format(self.time,self.type,self.amount,self.dest_account)

class BankAccount(object):
    def __init__(self, label, balance):
        self.label = label
        self.balance = float(balance)
        self.transactions = []

    def withdraw(self, amount):
        if amount > 0:
            if amount <= self.balance:
                self.balance -= amount
                self.transactions.append(Transaction("Withdrawal",amount))
                return "You have withdrawn ${0}. Your account has ${1} remaining".format(amount, self.balance)
            else:
                return "You cannot withdraw ${0}, as your account only contains ${1}".format(amount, self.balance)
        else:
            return "Invalid input! You cannot withdraw less than $0.01."

    def deposit(self,amount):
        if amount > 0:
            self.balance += amount
            self.transactions.append(Transaction("Deposit",amount))
            return "You have deposited ${0}. Your account has ${1} remaining".format(amount, self.balance)
        else:
            return "Invalid input! You cannot deposit less than $0.01."

    def rename(self,name):
        if name == "" or name == " ":
            return "Invalid Input! Your account name cannot be blank!"
        else:
            self.label = name

    def transfer(self,dest_account,amount):
        if amount > 0:
            if amount <= self.balance:
                self.balance -= amount
                dest_account.balance += amount
                self.transactions.append(Transaction("Transfer",amount,dest_account.label))
                return "You have transferred ${0} to {2}. Your account has ${1} remaining".format(amount, self.balance, dest_account.label)
            else:
                return "You cannot transfer ${0}, as your account only contains ${1}".format(amount, self.balance)
        else:
            return "Invalid input! You cannot transfer less than $0.01."

    def listTrans(self, target):
        print "All your transactions to {0}: \n".format(target)
        for i in self.transactions:
            if i.dest_account == target:
                print i

    def __str__(self):
        return ("{0}\'s bank account contains ${1}".format(self.label,self.balance))
