from django.urls import path, include
from . import views

app_name = 'leaderboards'

urlpatterns = [
    path('', views.index),
	path('<game>/', views.game),
	path('<game>/', include([
		path('<mode>/', views.mode),
		path('<mode>/<character>', views.character)
	]))
]