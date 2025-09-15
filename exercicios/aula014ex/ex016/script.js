function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let contar = document.getElementById('txtp')
}

if (ini.value.length == 0 || fim.value.length == 0 || contar.value.length == 0) {
    window.alert(`[ERRO] Faltam dados!`)
} else {
    alert(`Tudo OK`)
}