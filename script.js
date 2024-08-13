function toggleMode() {
  const html = document.documentElement

  /*com TOGGLE */
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //com light mudar a image subistiuir image
    img.setAttribute("src", "assets/assets/avatar-light.png")
  } else {
    //se nao tiver light manter a image normal
    img.setAttribute("src", "assets/assets/avatar.png")
  }
}
