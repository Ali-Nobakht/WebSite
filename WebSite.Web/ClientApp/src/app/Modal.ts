import $ from "jquery";
import { UserSampleComponent } from './user/user-sample/user-sample.component';

export class Modal {

    modalEvent() {
        const form = document.querySelector('form');
        form.addEventListener('awesome', e => console.log(
            "xsdfgdfgg"
        ));




        var bttnclick = $(".btnModel");
        bttnclick.onclick = function () {
            alert('OKKKKKKKKKKK');
            //var title = obj.attr("data-Title");

            var modal = $("#dialog-form");

            modal.find('.modal-title').text('title');
            modal.find('.modal-body').html(UserSampleComponent);
            modal.modal("show");
        }
    }



}
window.onload = () => {



};  
