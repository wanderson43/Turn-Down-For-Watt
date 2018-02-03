from django.db import models

class Dorm(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=400)
    director = models.CharField(max_length=50)
    num_rooms = models.IntegerField(default=0)
    energy_score = models.IntegerField(default=0)

    def __str__(self):
        return str(self.name)

class EnergyReading(models.Model):
    dorm = models.ForeignKey(Dorm, on_delete=models.SET_NULL, null=True)
    power = models.FloatField(default=0)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.power)
