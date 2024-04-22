function formSubmit() {
    // var che si salva momento di inizio 
    const start = new Date().getTime();

    //var con riferimento ai messaggi
    const success = document.querySelector("#message-success");
    const loading = document.querySelector("#message-loading");
    const error = document.querySelector("#message-error");

    //
    loading.classList.add("d-none");
    success.classList.add("d-none");
    error.classList.add("d-none");

    const nome = document.querySelector("#nome").value;
    const cognome = document.querySelector("#cognome").value;
    const cellulare = document.querySelector("#cellulare").value;
    const quantita = document.querySelector("#quantita").value;
    const data = document.querySelector("#data").value;
    const turno = document.querySelector("#turno").value;
    const messagio = document.querySelector("#messagio").value;

    console.log("nome:", nome, "-", "cognome:", cognome, "-", "cell:", cellulare, "-", "quantita:", quantita, "-", "data:", data, "-", "turno:", turno, "messagio:", messagio);

    loading.classList.remove("d-none");

    $.ajax({
        url: "https://cieffe-web-backend.vercel.app/api/ombra/reservations",
        type: "POST",
        data: {
            name: nome,
            surname: cognome,
            mobile: cellulare,
            people: quantita,
            date: data,
            turn: turno,
            message: messagio
        },
        success: function (result) {
            console.log("result", result);

            const end = new Date().getTime();



            setTimeout(() => {
                success.classList.remove("d-none");
                loading.classList.add("d-none");
                error.classList.add("d-none");
            }, 1000 - Math.abs(end-start))
            setTimeout(() => {
                success.classList.add("d-none");
                loading.classList.add("d-none");
                error.classList.add("d-none");
            },5000)


        },
        error: function (error) {
            console.log("error", error);

            const end = new Date().getTime();



            setTimeout(() => {
                success.classList.add("d-none");
                loading.classList.add("d-none");
                error.classList.remove("d-none");
            }, 1000 - Math.abs(end-start))
            setTimeout(() => {
                success.classList.add("d-none");
                loading.classList.add("d-none");
                error.classList.add("d-none");
            },10000)
        }
    })
}