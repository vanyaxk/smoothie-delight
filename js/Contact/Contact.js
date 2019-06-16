import React, {Component} from 'react';

import {
    ContactSection,
    FormContainer,
    ContactHeader,
    ContactData,
    ContactForm,
    ContactInput,
    ContactMessage,
    SubmitMessage,
    ErrorMessage,
    FormSubmitted
} from './ContactStyles';

class Contact extends Component {
    state = {
        name: '',
        email: '',
        didContact: false,
        emailValid: false,
        emailError: false,
        messageError: false
    }

    validateForm = (e) => {
      let valid = true;
      let emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

      this.setState({
          emailError: false,
          messageError: false
      });
      if (emailRegex.test(this.state.email) === false) {
          valid = false;
          this.setState({
              emailError: 'Email is invalid'
          });
      }

      if (this.state.message.length <= 4) {
          valid = false;
          this.setState({
              messageError: 'Message must be at least 5 characters long'
          });
          
      }
      return valid;
  }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validateForm()) {
            this.setState({
                didContact: true
            });
            console.log('it works');
        }
    }

    // handleNameChange = (e) => {
    //     let userName = e.target.value;
    //     this.setState({
    //         name: userName
    //     });
        
    // }

    // handleEmailChange = (e) => {
    //     let userEmail = e.target.value;
    //     this.setState({
    //         email: userEmail
    //     });
    // }

    handleChangeInput = (key) => (e) => {  //funkcja następująca
        this.setState({
            [key]: e.target.value
        });
    } 

    // handleMessageChange = (e) => {
    //     let userMessage = e.target.value;
    //     this.setState({
    //         message: userMessage
    //     });
    // }

    render() {
        let form =
        <ContactSection id="scrollToContact">
        <FormContainer>
        <ContactHeader>Write us a message and subcribe to our newsletter!</ContactHeader>
        <ContactForm onSubmit={this.handleSubmit}>
        <ContactData>
            <ContactInput type='text' value={this.state.name} onChange={this.handleChangeInput('name')} placeholder='Name'/>
            <ContactInput type='email' value={this.state.email} onChange={this.handleChangeInput('email')} placeholder='Email'/>
        </ContactData>
        {this.state.emailError && <ErrorMessage>{this.state.emailError}</ErrorMessage>}
        <ContactMessage placeholder='Message' onChange={this.handleChangeInput('message')}/>
        {this.state.messageError && <ErrorMessage>{this.state.messageError}</ErrorMessage>}
        <SubmitMessage type='submit' value='Send'/>
        </ContactForm>
        </FormContainer>
        </ContactSection>
        let formSubmitted = <ContactSection><FormSubmitted>Thanks, {this.state.name}. We sent something to {this.state.email}. Check your email!</FormSubmitted></ContactSection>
       if (this.state.didContact === true) return formSubmitted;

       return form;

    }
}

export default Contact;
