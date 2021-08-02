(function () {
  /* ---- Start ---- */

  clickItem()

  /* ---- Events ---- */

  function clickItem () {
    window.addEventListener('click', callbackClickItem)
  }

  /* ---- Callbacks ---- */

  function callbackClickItem (evento) {
    const elemento = 'main div[name="item"]'
    if (!evento.target.matches(elemento)) return

    const url = evento.target.getAttribute('data-url')
    if (!url) return

    redirecionar(url)
  }

  /* ---- Aux Functions ---- */

  function redirecionar (url) {
    const a = document.createElement('a')
    a.target = '_blank'
    a.href = url
    a.rel = 'noopener noreferrer nofollow'
    a.click()
  }
}())
