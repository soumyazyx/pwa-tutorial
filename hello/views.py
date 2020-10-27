from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def contactus(request):
    return render(request, "contact.html")

def about(request):
    return render(request, "about.html")

def fallback(request):
    return render(request, "fallback.html")
