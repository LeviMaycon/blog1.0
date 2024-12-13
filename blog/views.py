from urllib import request
from django.views import View
from django.shortcuts import render, HttpResponse

# Create your views here.
class HomeView(View):
    template_name = 'conteudo.html'

    def get(self, request):
        return render(
            request=request,
            template_name=self.template_name,
            context={
                'url': 'home',
            }
        )