from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),  # This is the main homepage
    path('home/', views.home, name='home'),      # This is the secondary home view
]
