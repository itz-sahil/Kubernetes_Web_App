#!/usr/bin/python3

import cgi
import subprocess

print("content-type:text/html")
print()

# List Pods
print("\n\nStarting Minikube .....\n")
start = subprocess.getoutput("sudo minikube start --driver=none")
print(start)

