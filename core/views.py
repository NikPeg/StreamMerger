from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def listen(request):
    return render(request, 'listen.html')
