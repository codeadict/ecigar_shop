# -*- coding: utf-8 -*-
# Copyright (C) 2014 G&D Systems
# Developer: Dairon Medina Caro <info@gydsystems.com>
from django.db import models
from django.utils.translation import gettext as _
from shop.models.productmodel import Product


def determine_upload_path(instance, filename):
    chunk_size = 1000  # max files per directory
    return "images/liquids/%(filename)s" % {
        'filename': filename,
    }


class LiquidFormulations(models.Model):
    name = models.CharField('Name', max_length=150)
    image = models.ImageField(upload_to=determine_upload_path, default='',
                              blank=True, null=True, verbose_name='Picture')
    description = models.TextField('Description', blank=True, null=True)

class Liquid(Product):
    NICOTINE, REPLACEMENT = 'N', 'R'
    choices = (
        (NICOTINE, _('With Nicotine')),
        (REPLACEMENT, _('With Syncotine(A safe substitute for nicotine)'))
    )
    nicotine_type = models.CharField(max_length=1, choices=choices, verbose_name=_('Nicotine Level'))


    class Meta:
        pass


class Vape(Product):
    description = models.TextField(_('Description'), null=True, blank=True)

    class Meta:
        pass