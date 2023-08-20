class AlertHub {
    constructor(parentElement = "body") {
        this.alertContainer = document.createElement('div')
        this.alertContainer.className = "alert-hub-container"
        document.querySelector(parentElement).appendChild(this.alertContainer);

    }

    showAlert(params) {
        const { title, description, background, type = "info", timeout = 1000 } = params
        const alertBox = document.createElement("div")
            // Set the CSS alert type.
        alertBox.className = `alert-hub ${type}`;
        // Set the content of the alert box using the provided title and description.
        alertBox.innerHTML = `<h2>${title}</h2><p>${description}</p>`;


        this.alertContainer.appendChild(alertBox)
        setTimeout(() => {
            this.alertContainer.removeChild(alertBox)
        }, timeout);
    }
}