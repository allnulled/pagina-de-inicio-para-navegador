(() => {
  const dosKmEnPixels = "68";
  const plano1 = document.createElement("div");
  plano1.style.position = "fixed";
  plano1.style.top = "0";
  plano1.style.left = "0";
  plano1.style.right = "auto";
  plano1.style.bottom = "auto";
  const bloques = 50;
  document.body.appendChild(plano1);
  for(let i=0; i<bloques; i++) {
    const bloque = document.createElement("div");
    bloque.style.display = "inline-block";
    bloque.style.width = dosKmEnPixels + "px";
    bloque.style.height = dosKmEnPixels + "px";
    bloque.style.border = "1px solid red";
    bloque.style.margin = "0px";
    bloque.style.verticalAlign = "top";
    plano1.appendChild(bloque);
  }
})()
