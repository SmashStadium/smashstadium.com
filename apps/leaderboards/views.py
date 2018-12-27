from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def index(request):
    return render(request, 'leaderboards/leaderboards.html')

def game(request, game):
    context = { game: game }
    return render(request, 'leaderboards/game/game.html', context)

def mode(request, game, mode):
    context = { 
        game: game,
        mode: mode
    }
    return render(request, 'leaderboards/game/mode/mode.html', context)

def character(request, game, mode, character):
    context = { 
        game: game,
        mode: mode,
        character: character
    }
    return render(request, 'leaderboards/game/mode/character/character.html', context)