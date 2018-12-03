from django.shortcuts import render
from django.http import HttpResponse

def index (request):
    return render(request, 'leaderboards/leaderboards.html')
	
def ultimateMenu(request):
    return render(request, 'leaderboards/ultimate/ultimate.html')
	
def ultimateMenuHRC(request):
    return render(request, 'leaderboards/ultimate/hrc/hrc.html')