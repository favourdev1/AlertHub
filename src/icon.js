class icon {

    SuccessIcon() {
        // Create an SVG element
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("fill", "none");
        svg.style.width = '25px'
        svg.style.marginRight = '10px'
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("stroke-width", "1.5");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("class", "w-4 h-4");

        // Create a path element and set attributes
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        path.setAttribute("d", "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z");

        // Append the path element to the SVG element
        svg.appendChild(path);
        // Return the created SVG element
        return svg;
    }

    ErrorIcon() {
        // Create an SVG element
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("fill", "none");
        svg.style.width = '25px'
        svg.style.marginRight = '10px'
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("stroke-width", "1.5");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("class", "w-4 h-4");

        // Create a path element and set attributes
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        path.setAttribute("d", "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z");

        // Append the path element to the SVG element
        svg.appendChild(path);

        // Return the created SVG element
        return svg;
    }


    InfoIcon() {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("fill", "none");
        svg.style.width = '25px'
        svg.style.marginRight = '10px'
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("stroke-width", "1.5");
        svg.setAttribute("stroke", "currentColor");
        svg.classList.add("w-6", "h-6");

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("stroke-linejoin", "round");
        path.setAttribute(
            "d",
            "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        );

        svg.appendChild(path);

        return svg;
    }

}