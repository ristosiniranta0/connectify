/* SophisticatedContactForm.js */

class ContactForm {
  constructor() {
    this.formElement = document.getElementById("contactForm");
    this.nameInput = document.getElementById("nameInput");
    this.emailInput = document.getElementById("emailInput");
    this.messageInput = document.getElementById("messageInput");
    this.submitButton = document.getElementById("submitButton");
    this.messageContainer = document.getElementById("messageContainer");

    this.submitButton.addEventListener("click", this.submitForm.bind(this));
  }

  submitForm(event) {
    event.preventDefault();

    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const message = this.messageInput.value;

    const data = {
      name: name,
      email: email,
      message: message
    };

    this.disableSubmitButton();

    this.sendMessage(data)
      .then(response => {
        if (response.success) {
          this.showMessage("Message sent successfully!", "success");
          this.clearForm();
        } else {
          this.showMessage("Failed to send message. Please try again.", "error");
        }
      })
      .catch(error => {
        this.showMessage("An error occurred while sending the message.", "error");
      })
      .finally(() => {
        this.enableSubmitButton();
      });
  }

  sendMessage(data) {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous AJAX request to a server
      setTimeout(() => {
        const successRate = Math.random();

        if (successRate >= 0.5) {
          resolve({ success: true });
        } else {
          reject(new Error("Failed to send message"));
        }
      }, 2000);
    });
  }

  showMessage(text, type) {
    this.messageContainer.innerHTML = "";
    const messageElement = document.createElement("div");
    messageElement.className = `message message-${type}`;
    messageElement.textContent = text;
    this.messageContainer.appendChild(messageElement);
  }

  clearForm() {
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.messageInput.value = "";
  }

  disableSubmitButton() {
    this.submitButton.disabled = true;
  }

  enableSubmitButton() {
    this.submitButton.disabled = false;
  }
}

const contactForm = new ContactForm();
