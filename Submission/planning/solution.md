# Troubleshooting car issues

## Problem statement

Create a program that walks the user through troubleshooting issues with a car. Use the following decision tree to build the system.

The program needs to ask a question, and the user will answer the question. The program then needs to ask another question, based on the users previous answer.

## Inputs, processes and outputs

Inputs: userInput
Processes: determine the correct answer based on the usersInput, and previous inputs
Output: the next question, or answer to the qeuestion

## Test scenarios

Input: "yes"
Output: "Are the battery terminals corroded?"
Input: "yes"
Output: "Clean terminals and try starting again"

Input: "yes"
Output: "Are the battery terminals corroded?"
Input: "no"
Output: "Replace cables and try again"

Input: "no"
Output: "Does the car make a clicking noise?"
Input: "yes"
Output: "Replace the battery"

Input: "no"
Output: "Does the car make a clicking noise?"
Input: "no"
Output: "Does the car crank up but fail to start?"
Input "yes"
Output: "Check spark plug connections"

Input: "YES"
Output: "Are the battery terminals corroded?"
Input: "YES"
Output: "Clean terminals and try starting again"

Input: "yeah"
Output: "Are the battery terminals corroded?"
Input: "YES"
Output: "Clean terminals and try starting again"