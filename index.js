class Veiculos {
    #numeroChassi;
    #placa;
    #lista = [];

    set setNumeroChassi(numedoChassi) {
        this.#numeroChassi = numedoChassi;
    }

    get getNumeroChassi() {
        return this.#numeroChassi;
    }

    set setPlaca(placa) {
        this.#placa = placa;
    }

    get getPlaca() {
        return this.#placa;
    }

    salvar() {
        let numeroChassi;
        let placa;
        let confirmar = true;
        let printar = '';
        while(confirmar) {
            let objeto = {};
            numeroChassi = prompt('Informe o número do chassi');
            placa = prompt('Informe o número da placa');
            this.setNumeroChassi = numeroChassi;
            this.setPlaca = placa;
            objeto.numeroChassi = this.getNumeroChassi;
            objeto.placa = this.getPlaca;
            this.#lista.push(objeto);
            confirmar = confirm('Deseja adicionar outro veiculo?');
        }
        for (let propriedade in this.#lista) {
            printar += `
            <li>Número do chassi: ${this.#lista[propriedade].numeroChassi}</li>
            <li>Placa: ${this.#lista[propriedade].placa}</li>
            <li><hr/></li>
            `;
        }
        document.getElementById('veiculos').innerHTML = printar;
    }
}