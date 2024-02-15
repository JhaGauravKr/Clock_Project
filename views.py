from django.shortcuts import render

# Create your views here.


from rest_framework import generics
from .models import Time
from .serializers import TimeSerializer

class TimeList(generics.ListCreateAPIView):
    queryset = Time.objects.all()
    serializer_class = TimeSerializer

