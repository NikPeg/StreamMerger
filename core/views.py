from django.http import HttpResponse

from django.shortcuts import render
from django.views.decorators.http import require_POST


def home(request):
    return render(request, 'home.html')


def listen(request):
    return render(request, 'listen.html')


def result(request):
    return render(request, 'result.html')


@require_POST
def break_stream(request):
    return HttpResponse(status=200)
