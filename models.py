# clock_project/clockapp/models.py

from django.db import models

# Create your models here.


class Time(models.Model):
    time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.time)
