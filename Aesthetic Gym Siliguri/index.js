const scriptURL = 'https://script.google.com/macros/s/AKfycbx5EhjeXTjH-eFaG1ecgcpQOlIGb6zItkT9fmooG8f66WpqY0LuCDnSEC4-KkqUp2RM/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => {
                    form.reset()
                alert("Thanks for Contacting us..! We Will Contact You Soon...")})
                .catch(error => console.error('Error!', error.message))
            })
//console.log('hello world')