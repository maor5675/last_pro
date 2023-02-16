from django.db import models
 

 
class Movie(models.Model):
   name = models.CharField(max_length=100, null=False)
   genre = models.CharField(max_length=100, null=False)
   year_published = models.DateField()
   created_time=models.DateTimeField(auto_now_add=True)
   update_time=models.DateTimeField(auto_now_add=True)
   price = models.PositiveIntegerField(null = True, blank = True)
   image = models.ImageField(null=True, blank=True)

   def __str__(self):
      return self.name


class Cart(models.Model):
   product = models.ForeignKey(Movie,on_delete=models.CASCADE)
   quantity = models.IntegerField(null= True, blank = True)

   def __str__(self):
      return self.product.name

