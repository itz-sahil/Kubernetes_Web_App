#!/usr/bin/python3

import cgi
import subprocess

print("content-type:text/html")
print()

# List Pods
print("\n\nStopping Minikube .....\n")
stop = subprocess.getoutput("sudo minikube stop")
print(stop)

