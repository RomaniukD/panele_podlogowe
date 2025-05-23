function oblicz() {
    const width = document.getElementById('width').value;
    const lenght = document.getElementById('lenght').value;
    const typ_laminowane = document.getElementById('laminowane').checked;
    const typ_winylowe = document.getElementById('winylowe').checked;
    const typ_podlogowa = document.getElementById('podlogowa').checked;
    console.log(`width: ${width} lenght: ${lenght} typ: ${typ_laminowane}`)
}
