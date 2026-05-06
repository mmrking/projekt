function Go() {
    const opis = document.getElementById('opis');
    const date = document.getElementById('new_date');
    const display = document.querySelector('div:last-of-type');

    const opisVal = opis.value.trim();
    const dateVal = date.value;

    if (opisVal !== "" && dateVal !== "") {
        if (opisVal.length <= 128) {
            let resultDiv = document.getElementById('result-display');
            if (!resultDiv) {
                resultDiv = document.createElement('div');
                resultDiv.id = 'result-display';
                document.body.appendChild(resultDiv);
            }
            
            resultDiv.innerHTML = `Zadanie: ${opisVal}<br>Data: ${dateVal}`;
        }
    }
}