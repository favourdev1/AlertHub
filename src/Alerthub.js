class AlertHub {


    constructor(parentElement = "body") {
        this.defaultExitButtonSize = 20
        this.defaultAnimationName = ""
        this.maxLength = 150;
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
            timeout = 2,
            closeButton = true,
            closeButtonSize = this.defaultExitButtonSize,
            animation = 'no-animation'
        } = params;


        this.defaultAnimationName = animation

        if (closeButtonSize < 15 || closeButtonSize > 30) {
            closeButtonSize = this.ResetCloseButtonSize();
        }

        const secondsTimeOut = this.timeInMilliseconds(timeout);
        const alertBox = this.createAlertBox(title, description, type, animation, closeButton, closeButtonSize);

        this.configureAlertContainer(position);
        this.alertContainer.appendChild(alertBox);

        if (closeButton) {
            this.CloseAlertOnClick(alertBox);
        }

        console.log(secondsTimeOut)
        this.timeoutAfter(secondsTimeOut, alertBox);
    }

    addAnimation(animationName) {

        let animation = {
            'opening-animation': '',
            'closing-animation': ''
        }

        switch (animationName) {
            case "fade-in":
                animation['opening-animation'] = 'fade-in'
                animation['closing-animation'] = 'fade-out'
                break;
            case "slide-in":
                animation['opening-animation'] = 'slide-in'
                animation['closing-animation'] = 'slide-out'
                break;

            case "slide-in-right":
                animation['opening-animation'] = 'slide-in-right'
                animation['closing-animation'] = 'slide-out-right'
                break;


            case "slide-in-left":
                animation['opening-animation'] = 'slide-in-left'
                animation['closing-animation'] = 'slide-out-left'
                break;

            default:
                animation['opening-animation'] = ''
                animation['closing-animation'] = ''
        }

        return animation;
    }




    CloseAlert(alertBox) {
        let animation = this.addAnimation(this.defaultAnimationName)


        alertBox.classList.replace(animation['opening-animation'], animation['closing-animation'])

        console.log(alertBox)
        alertBox.addEventListener('animationend', () => {
            this.alertContainer.removeChild(alertBox);
        })

    }

    ResetCloseButtonSize() {
        return this.defaultExitButtonSize
    }

    createAlertBox(title, description, type, animation, closeButton, closeButtonSize) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert-hub ${type} ${animation}`;

        const content = `
            <div style="width: 90%;">
                <h2>${title}</h2>
                <p>${this.setMaxDescriptionLength(this.maxLength, description)}</p>
            </div>
            ${closeButton ? this.createCloseButtonSvg(closeButtonSize) : ""}
        `;

        alertBox.innerHTML = content;
        return alertBox;
    }

    configureAlertContainer(position) {
        this.alertContainer.className = `alert-hub-container ${position}`;
    }

    setMaxDescriptionLength(length, description) {
        if (description.length > length) {
            description = description.substring(0, length);
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

    CloseAlertOnClick(alertBox) {
        const closeButtonElement = alertBox.querySelector(`.alert-hub-close-button`);
        closeButtonElement.addEventListener("click", () => {
            this.CloseAlert(alertBox)
        });
    }



    timeoutAfter(timeout, alertBox) {
        if (timeout < 0) {
            return;
        }
        setTimeout(() => {
            this.CloseAlert(alertBox)
        }, timeout);
    }

    timeInMilliseconds(timeInput) {
        return timeInput * 1000;
    }
}