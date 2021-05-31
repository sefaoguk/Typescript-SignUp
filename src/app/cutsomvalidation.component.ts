import { AbstractControl } from "@angular/forms";

export function customValidation(control: AbstractControl): { [key: string]: any } | null {

    const regexp = new RegExp("^[a-zA-Z0-9_.-]+$");

    if (!regexp.test(control.value)) {
        return {
            control: true
        };
    }
    return null;

   
}





//export function customValidation(control: AbstractControl): { [key: string]: any } | null {
 //const forbidden=/admin/.test(control.value);
 //return regexp ? { 'customControl': { value: control.value } } : null; }