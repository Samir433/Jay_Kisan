from django.shortcuts import render

def homepage(request):
    return render(request, 'post/homepage.html')
def home(request):
    return render(request, 'post/home.html')
