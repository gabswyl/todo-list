
const add = document.getElementById("inAdd");
const texto = document.getElementById("inTarefa");
const tarefas = document.getElementById("inLista");

add.addEventListener('click', (e) => {
    e.preventDefault();

    if (texto.value === "") {
        alert("Preencha o campo!");
    } else {
        let textoDigitado = texto.value;

        let itemNovo = ` 
        <li>
            <input type="checkbox" class="check">
            <span>${textoDigitado}</span>
            <div>
                <button class="Apagar">
                    <img src="assets/trash.svg" alt="lixo">
                </button>
            </div>
        </li>`;

        tarefas.insertAdjacentHTML("afterbegin", itemNovo);
        texto.value = "";

        const apagarBotoes = document.querySelectorAll(".Apagar");
        apagarBotoes.forEach((botao) => {
            botao.addEventListener('click', () => {
                const item = botao.closest("li");
                item.remove();
            });
        });
    }
});
