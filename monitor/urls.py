from django.conf.urls import url
from . import views



app_name = 'dorms'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^tips/$', views.tips, name='tips'),
    url(r'^about/$', views.about, name='about'),
    url(r'^dorms/$', views.DormListView.as_view(), name='list'),
    url(r'^dorms/(?P<pk>[0-9]+)/$', views.DormDetailView.as_view(), name='detail'),
    url(r'^dorms/(?P<pk>[0-9]+)/addenergyreading$', views.add_reading),
]
