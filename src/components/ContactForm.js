import React from 'react'
import Input from './Input'
export default function ContactForm() {
  return (
    <div class="contact container-fluid" style={{borderTop:'1px solid black'}}>
    <h1>CONTACTENME EN VICENTEMUGGERI@GMAIL.COM</h1>

    <
    <form action="#" class="form-contact p-2">
       
        <Input  placeholder={"Name"} id="name" />
        <Input  type="email" placeholder={"Email"} id="email" />
        <Input  placeholder={"Subject"} id="subject" />
        <Input  placeholder={"Message"} id="message" />
       

        <button type="submit " class="btn btn-secondary boton mt-3" style={{backgroundColor:"purple"}}>Submit</button>
    </form>

</div>
  )
}
