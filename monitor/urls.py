from django.conf.urls import url
from . import views

<<<<<<< HEAD


=======
>>>>>>> 37d2117fc3659bd162b96d44e155944582164e69
app_name = 'dorms'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^tips/$', views.tips, name='tips'),
    url(r'^about/$', views.about, name='about'),
    url(r'^comparison/$', views.about, name='about'),
    url(r'^graph/$', views.about, name='about'),
    url(r'^dorms/$', views.DormListView, name='list'),
    url(r'^dorms/(?P<pk>[0-9]+)/$', views.DormDetailView.as_view(), name='detail'),
    url(r'^dorms/(?P<pk>[0-9]+)/addenergyreading$', views.add_reading),
]
