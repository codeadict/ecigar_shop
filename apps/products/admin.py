# -*- coding: utf-8 -*-
# Copyright (C) 2014 G&D Systems
# Developer: Dairon Medina Caro <info@gydsystems.com>
from django.contrib import admin

from models import LiquidFormulations, Liquid, Vape

admin.site.register(LiquidFormulations)
admin.site.register(Liquid)
admin.site.register(Vape)