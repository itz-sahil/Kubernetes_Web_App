#!/usr/bin/python3

import cgi
import subprocess

print("content-type:text/html")
print()

# Delete all Kubernetes Resources
del_all = subprocess.getoutput("sudo kubectl delete all --all")
print(del_all)
print("\n\nAll resources are deleted successfully.....\n\n")
