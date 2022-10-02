import { AbstractControl } from "@angular/forms";

export function confPassValidator(control:AbstractControl){
    const password=control.get('password');
    const confirmPassword=control.get('confPassword');

    if(password?.pristine || confirmPassword?.pristine)
    {
        return null;
    }
    else
    {
        return password && confirmPassword && password.value !== confirmPassword.value 
        ? {'misMatch':true} 
        :null
    }
}