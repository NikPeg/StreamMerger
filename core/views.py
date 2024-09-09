import asyncio

from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_POST

from .utils import listen_streams


def home(request):
    return render(request, 'home.html')


def listen(request):
    # Process the parameters and start the main function asynchronously
    session_slug = request.GET.get('session')
    trading_pair = request.GET.get('pair')
    streams_count = int(request.GET.get('streams'))

    if not session_slug or not trading_pair or not streams_count:
        return JsonResponse({'error': 'Missing required parameters'}, status=400)

    asyncio.run(listen_streams(session_slug, streams_count, trading_pair.replace('/', '').lower()))
    return render(request, 'listen.html')


def result(request):
    return render(request, 'result.html')


@require_POST
def break_stream(request):
    return HttpResponse(status=200)
