from django.urls import path

from . import views

app_name = 'leaderboards'

urlpatterns = [
    path('', views.index, name='index'),
	path('ultimate/', views.ultimateMenu, name='ultimateMenu'),
	path('ultimate/hrc', views.ultimateMenuHRC, name='ultimateMenuHRC'),
	path('melee/', views.meleeMenu, name='meleeMenu'),
	path('melee/btt', views.meleeMenuBTT, name='meleeMenuBTT'),
	path('melee/btt/ranking', views.meleeMenuBTTRanking, name='meleeMenuBTTRanking'),
	path('melee/hrc', views.meleeMenuHRC, name='meleeMenuHRC'),
]