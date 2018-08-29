import { EventEmitter, Output } from "@angular/core";

export class AppEventService {

    @Output() static alert: EventEmitter<any> = new EventEmitter();
    
    static set(tipo: string, navigate: string, msg: string){        
        this.alert.emit({tipo, navigate, msg});
    }    

}