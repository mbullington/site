window.onload = () => {
    // Initialize Stimulus.
    const app = Stimulus.Application.start()

    app.register('hero', class extends Stimulus.Controller {
        static get targets() {
            return ['title']
        }

        constructor(...args) {
            super(...args)
            const hasCompany = !!document.location.hash
            const company = hasCompany ? document.location.hash.substr(1) + ' ' : ''
          
            if (company) {
                this.titleTarget.textContent = `Hello ${company}— I'm Michael.`
            }
        }
    })

    // Initialize Medium zoom.
    const list = document.querySelectorAll(".imageCard img")
    mediumZoom(list, {
        // The same as 8rem.
        margin: 128,
    });
}
