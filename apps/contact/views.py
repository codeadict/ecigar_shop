# -*- coding: utf-8 -*-
# Copyright (C) 2014 G&D Systems
# Developer: Dairon Medina Caro <info@gydsystems.com>
try:
    import json
except ImportError:
    from django.utils import simplejson as json
from django.conf import settings
from django.core.mail import EmailMessage
from django.http import HttpResponseRedirect, HttpResponse
from django.template import loader


def send_contact(request):
    """
    Send Contact Form email
    """
    name = request.POST['id_name']
    mail = str(request.POST['id_mail'])
    message = request.POST['id_msg']
    data = json.dumps({'correct': False})
    message_template_name = 'emails/suggestion_template.txt'
    message_dict = {
        "email": mail,
        "name": name,
        "message": message,
    }
    send_to = [mail for _, mail in settings.MANAGERS]
    body = loader.render_to_string(message_template_name, message_dict)
    try:
        #Send the mail
        subject = 'NEW CONTACT FORM RECEIVED'
        email = EmailMessage(subject, body, to=send_to)
        email.send()
        data = json.dumps({'correct': True})
    except:
        data = json.dumps({'correct': False})
    return HttpResponse(data, mimetype='application/json')