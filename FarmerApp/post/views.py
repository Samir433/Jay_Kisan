from django.shortcuts import render

def form(request):
    return render(request, 'post/form.html')
def home(request):
    return render(request, 'post/home.html')
