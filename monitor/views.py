from django.http      import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, render
from django.views     import generic
from .models          import Dorm, Tip, About, EnergyReading, Comparison, Graph
from ContactForm     import ContactForm
import datetime

def index(request):
    all_dorms = Dorm.objects.all()
    time = datetime.datetime.now()
    context = {
        'dorm_list': all_dorms, 'date': time

    }
    return render(request, 'dorm/index.html', context)

def tips(request):
    model = Tip
    template_name = 'dorm/tips.html'
    return render(request, 'dorm/tips.html')

def about(request):
    model = About
    template_name = 'dorm/about.html'
    if request.method == 'POST':
        print ContactForm
        form = ContactForm(request.POST)
        print form.data['content']
        message = "Your submission was received. Thank you!"
        return render(request, 'dorm/about.html', {'data': form.data['content'], 'message': message})
    else:
        contact_form = ContactForm()
        message = "Leave us feedback and/or questions!"
        return render(request, 'dorm/about.html', {
            'form': contact_form,'message': message, 'show': True
        })


def comparison(request):
    model = Tip
    template_name = 'dorm/tips.html'
    return render(request, 'dorm/comparison.html')

def graph(request):
    model = Tip
    template_name = 'dorm/tips.html'
    return render(request, 'dorm/graph.html')

def DormListView(request):
    model = Dorm
    template_name = 'dorm/list.html'
    time = datetime.datetime.now()
    all_dorms = Dorm.objects.all()
    context = {
        'dorm_list': all_dorms,'date': time

    }
    return render(request, 'dorm/list.html', context)

class DormDetailView(generic.DetailView):
    model = Dorm
    template_name = 'dorm/detail.html'



def add_reading(request, pk):
    print(request.body)
    if request.method == 'POST' and request.POST and 'power' in request.POST:
        power = request.POST['power']
        dorm = Dorm.objects.get(pk=int(pk))
        dorm.energyreading_set.create(power=power)
        return HttpResponse("Success")
    return HttpResponseBadRequest()
