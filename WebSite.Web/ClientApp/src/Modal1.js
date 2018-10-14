

$(function () {

    $(document).on("click", ".btn-closeModal", function () {
        $("#dialog-form").dialog("close");
    });


    $(document).on("click", ".btnModel", function (e) {
        console.log('ModalModalModalModalModal');
        e.preventDefault(); // میخواهیم لینک به صورت معمول عمل نکند

        var obj = $(this);

        ShowModal(obj);

    });

   
});


function ShowModal(obj) {

    var title = obj.attr("data-Title");

    var modal= $("#dialog-form");

    modal.find('.modal-title').text(title);
    modal.find('.modal-body').html('');
    modal.modal("show");


  

};



