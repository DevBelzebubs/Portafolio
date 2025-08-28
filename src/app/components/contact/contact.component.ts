import { Component } from '@angular/core';
import { FormsModule, FormControl,ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
interface FormData {
  name: string;
  email: string;
  message: string;
  date: string;
}
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslatePipe,ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: FormData = {
    name: '',
    email: '',
    message: '',
    date: new Date().toLocaleDateString()
  };
  formControl!:FormGroup;
  constructor(private languageService: LanguageService) {}
  onSubmit(){
    if (!this.formControl.valid) {
      alert(this.languageService.translate('contact.form.error'));
      return;
    }
    emailjs.send('service_yoypv9p', 'template_ablrkae', this.formControl.value, 'YkZqLpKr0wdCeAvR-')
    .then((res)=>{
      console.log('Email successfully sent!', res.status, res.text);
      console.log('Form data:', this.formControl.value);
      alert(this.languageService.translate('contact.form.success'));
      this.formControl.reset();
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      alert(this.languageService.translate('contact.form.error'));
      return;
    });
    this.formData = { name: '', email: '', message: '', date:''};
  }
  ngOnInit() {
    this.formControl = new FormGroup({
      name: new FormControl(this.formData.name),
      email: new FormControl(this.formData.email,[Validators.required,Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@gmail\.com$/)]),
      message: new FormControl(this.formData.message),
      date: new FormControl(new Date().toLocaleDateString())
    });
  }
}

function newDate() {
  throw new Error('Function not implemented.');
}
