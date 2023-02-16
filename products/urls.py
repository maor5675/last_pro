from django.urls import path
from . import views
 
urlpatterns = [
   path('', views.data,name='pruduct'),
   path('/checkout', views.purchase),
   path('/cart', views.cartdata),
   path('/cart/<pk>', views.Cart_detail),
   path('/<pk>', views.snippet_detail)
]

