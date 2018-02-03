from django.http      import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, render
from django.views     import generic
from .models          import Dorm, Tip, About, EnergyReading
from .forms           import ContactForm

def index(request):
    all_dorms = Dorm.objects.all()
    context = {
        'dorm_list': all_dorms,
    }
    return render(request, 'dorm/index.html', context)

def tips(request):
    model = Tip
    template_name = 'dorm/tips.html'
    return render(request, 'dorm/tips.html')

def about(request):
    model = About
    template_name = 'dorm/about.html'
    contact_form = ContactForm
    return render(request, 'dorm/about.html', {
        'form': contact_form,
        })

class DormListView(generic.ListView):
    model = Dorm
    template_name = 'dorm/list.html'

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
