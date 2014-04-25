from django.conf.urls import *
from django.conf.urls.i18n import i18n_patterns

from django.contrib import admin
from django.conf import settings
from shop import urls as shop_urls
from shop_simplevariations import urls as simplevariations_urls

admin.autodiscover()

urlpatterns = patterns('',
                       url(r'^viadmin/', include(admin.site.urls)),
                       url(r'^contact/', include('apps.contact.urls')),
                       url(r'^shop/cart/', include(simplevariations_urls)),
                       url(r'^shop/', include(shop_urls)),
                       url(r'^', include('cms.urls')),
)

if settings.DEBUG:
    urlpatterns = patterns('',
                           url(r'^media/(?P<path>.*)$', 'django.views.static.serve',
                               {'document_root': settings.MEDIA_ROOT, 'show_indexes': True}),
                           url(r'', include('django.contrib.staticfiles.urls')),
    ) + urlpatterns
