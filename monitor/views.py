from django.http      import HttpResponse, HttpResponseBadRequest
from django.shortcuts import get_object_or_404, render
from django.views     import generic
from .models          import Dorm, EnergyReading

def index(request):
    all_dorms = Dorm.objects.all()
    context = {
        'dorm_list': all_dorms,
    }
    return render(request, 'dorm/index.html', context)

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
