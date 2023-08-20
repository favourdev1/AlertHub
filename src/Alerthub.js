class AlertHub {
    constructor(parentElement = "body") {
        this.maxLength = 150
        this.alertContainer = document.createElement("div");
        this.alertContainer.className = "alert-hub-container top-right";
        document.querySelector(parentElement).appendChild(this.alertContainer);
    }

    showAlert(params) {
        let {
            title,
            description,
            position = "top-right",
            type = "info",
            timeout = 1000,
            closeButton = true,
            closeButtonSize = 20, // Default closeButtonSize
        } = params;

        const secondsTimeOut = this.timeInMilliseconds(timeout);
        const alertBox = document.createElement("div");

        description = this.setMaxDescriptionLength(this.maxLength, description);


        // Set the CSS alert type.
        this.alertContainer.className = `alert-hub-container ${position}`;
        alertBox.className = `alert-hub ${type}`;

        // Set the content of the alert box using the provided title and description.
        alertBox.innerHTML = `<div style = "width:90%">
        <h2>${title}</h2>
        <p>${description}</p>
        </div>
        ${closeButton ? this.createCloseButtonSvg(closeButtonSize) : ""}`;

        if (closeButton) {
            this.addCloseDialogByButton(alertBox);
        }

        this.alertContainer.appendChild(alertBox);
        this.timeoutAfter(secondsTimeOut, alertBox);
    }
    setMaxDescriptionLength(length, description) {
        if (description.length > length) {
            description = description.substring(0, length)
        }

        return description;
    }
    createCloseButtonSvg(size) {
        return `
            <svg class="alert-hub-close-button" height="${size}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
    }

    addCloseDialogByButton(alertBox) {
        const closeButtonElement = alertBox.querySelector(".alert-hub-close-button");
        closeButtonElement.addEventListener("click", () => {
            this.alertContainer.removeChild(alertBox);
        });
    }

    timeoutAfter(timeout, alertBox) {
        if (timeout < 0) {
            return;
        }
        setTimeout(() => {
            this.alertContainer.removeChild(alertBox);
        }, timeout);
    }

    timeInMilliseconds(timeInput) {
        return timeInput * 1000;
    }
}