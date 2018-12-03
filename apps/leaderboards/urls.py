from django.urls import path

from . import views

app_name = 'leaderboards'

urlpatterns = [
    path('', views.index, name='index'),
	path('ultimate/', views.ultimateMenu, name='ultimateMenu'),
	path('ultimate/hrc', views.ultimateMenuHRC, name='ultimateMenuHRC'),
]