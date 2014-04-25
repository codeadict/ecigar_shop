# -*- coding: utf-8 -*-
# Copyright (C) 2014 G&D Systems
# Developer: Dairon Medina Caro <info@gydsystems.com>
from django.conf.urls import patterns, url
from apps.contact import views

urlpatterns = patterns('',
    # AJAX
    url(r'^ajax/send/$', views.send_contact, name='send_contact'),
)