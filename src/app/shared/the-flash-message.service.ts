import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
@Injectable()
export class TheFlashMessageService{

    constructor(private flashMessage : FlashMessagesService){}

    theFlashMessageResponse(response,message){
        if(JSON.parse((<any>response)._body)[0] == "true"){
            window.scrollTo(0, 0);
            this.flashMessage.show(message, {cssClass: 'alert-success', timeout: 5000});
            return true;
        }else {
            this.flashMessage.show(JSON.parse((<any>response)._body)[1], {cssClass: 'alert-danger', timeout: 5000});
            return false;
        }
    }

    theFlashMessageError(error){
        JSON.parse(error._body).errors.forEach((erro)=>{
            this.flashMessage.show(erro.defaultMessage, {cssClass: 'alert-danger', timeout: 5000});
            console.log('Erro ==> ' + erro.defaultMessage);
          });
    }
}