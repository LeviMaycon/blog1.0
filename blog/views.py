from urllib import request
from django.views import View
from django.shortcuts import render, HttpResponse
from django.views.generic import ListView, DetailView
from .models import Post

from blog.models import Post

class HomeView(ListView):
    model = Post
    template_name = 'index.html'
    context_object_name = 'posts'

    def get_queryset(self):
        return Post.objects.all()