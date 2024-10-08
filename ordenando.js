// Função para adicionar valor à lista
function add() {
    const valorInput = document.getElementById('valor'); // Captura o campo de entrada
    const lista = document.getElementById('valores');    // Captura a lista (ul)

    if (valorInput.value === '') return; // Verifica se o campo está vazio

    // Cria um novo item na lista
    const node = document.createElement('li');
    const textNode = document.createTextNode(valorInput.value);
    node.appendChild(textNode);

    // Adiciona o item à lista
    lista.appendChild(node);

    // Limpa o campo de entrada
    valorInput.value = '';
}

// Função para ordenar a lista
function ordenar() {
    const lista = document.getElementById('valores');
    const algoritmo = document.getElementById('algoritmo').value;

    // Obtém os valores da lista e os converte para números
    let valores = Array.from(lista.children).map(item => parseInt(item.innerText));

    if (valores.length === 0) return; // Se a lista estiver vazia, não faz nada

    // Aplica o algoritmo de ordenação com base na seleção
    switch (algoritmo) {
        case 'bubble_sort':
            valores = bubbleSort(valores);
            break;
        case 'selection_sort':
            valores = selectionSort(valores);
            break;
        case 'quick_sort':
            valores = quickSort(valores, 0, valores.length - 1);
            break;
    }

    // Atualiza a lista com os valores ordenados
    atualizarLista(valores);
}

// Função para misturar a lista
function misturar() {
    const lista = document.getElementById('valores');

    // Obtém os valores da lista
    let valores = Array.from(lista.children).map(item => parseInt(item.innerText));

    if (valores.length === 0) return; // Se a lista estiver vazia, não faz nada

    // Embaralha os valores
    valores = shuffle(valores);

    // Atualiza a lista com os valores misturados
    atualizarLista(valores);
}

// Função para atualizar a lista na página
function atualizarLista(valores) {
    const lista = document.getElementById('valores');
    lista.innerHTML = ''; // Limpa a lista

    // Adiciona os valores atualizados à lista
    valores.forEach(valor => {
        const node = document.createElement('li');
        const textNode = document.createTextNode(valor);
        node.appendChild(textNode);
        lista.appendChild(node);
    });
}

// Algoritmo Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Troca
            }
        }
    }
    return arr;
}

// Algoritmo Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]; // Troca
    }
    return arr;
}

// Algoritmo Quick Sort
function quickSort(arr, low, high) {
    if (low < high) {
        let pi = particionamento(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

// Função de particionamento para o Quick Sort
function particionamento(arr, low, high) {
    let pivot = arr[high];
    let i = (low - 1);

    for (let j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return (i + 1);
}

// Função Shuffle (embaralhar)
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

