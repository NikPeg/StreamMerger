from django.urls import path

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("listen", views.listen, name="listen"),
    path("listen/", views.listen, name="listen"),
    path("result", views.result, name="result"),
    path("result/", views.result, name="result"),
    path("break", views.break_stream, name="break"),
    path("break/", views.break_stream, name="break"),
]
