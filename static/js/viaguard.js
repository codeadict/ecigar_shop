/**
 * Created by codeadict on 4/17/14.
 */

//Send Contact Form
$('#send-contact').click(function (e) {
    //e.preventDefault();
    $(document).ajaxStart(function () {
        $("#send-contact").html("SENDING...");
    });
    $(document).ajaxStop(function () {
        $("#send-contact").html("SEND NOW");
    });
    var name = $("#id_name").val();
    var mail = $("#id_mail").val();
    var msg = $("#id_msg").val();
    $("#contactusform").validate({
        submitHandler: function (form) {
            $.ajax({
                type: 'post',
                dataType: 'json',
                url: 'contact/ajax/send/',
                data: {
                    id_name: name,
                    id_mail: mail,
                    id_msg: msg,
                    csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val()
                },
                success: function (result) {
                    if (result) {
                        //Sent, clean the screen
                        $("#id_name").val("");
                        $("#id_mail").val("");
                        $("#id_msg").val("");
                    } else {
                        //Some error happens
                        $("#messages").html('<div class="alert alert-error"><a class="close" data-dismiss="alert" href="#">&times;</a><i class="icon-exclamation-sign"></i>Error al enviar la sugerencia!</div>');
                    }
                    $("#btnEnviarCorreo").html("SUGERIR");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("error: " + jqXHR + textStatus + " " + errorThrown);
                },
                complete: function () {
                }
            });
            //form.submit();
        }
    });
});
///////end sugerencia
