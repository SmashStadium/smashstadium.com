from django.shortcuts import render
from django.http import HttpResponse

def index (request):
    return render(request, 'leaderboards/leaderboards.html')
	
def ultimateMenu(request):
    return render(request, 'leaderboards/ultimate/ultimate.html')
	
def ultimateMenuHRC(request):
    return render(request, 'leaderboards/ultimate/hrc/hrc.html')

def meleeMenu(request):
    return render(request, 'leaderboards/melee/melee.html')
	
def meleeMenuBTT(request):
    return render(request, 'leaderboards/melee/btt/btt.html')

def meleeMenuBTTRanking(request):
    return render(request, 'leaderboards/melee/btt/ranking/ranking.html')
	
def meleeMenuHRC(request):
	return render(request, 'leaderboards/melee/hrc/hrc.html')