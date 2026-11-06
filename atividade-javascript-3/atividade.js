
let corPulseira = "amarela";
let idadePaciente = 65;
let gestante = false;

if (corPulseira === "vermelha") {
    console.log("Atendimento de Emergência: Sala de trauma imediata");
} else if (corPulseira === "amarela") {

    if (idadePaciente >= 60 || gestante === true) {
        console.log("Atendimento Urgente: Prioridade Especial Preferencial");
    } else {
        console.log("Atendimento Urgente: Fila padrão amarela");
    }

} else if (corPulseira === "verde") {

    let encaminhamento = idadePaciente < 12
        ? "Encaminhar para Pediatria"
        : "Encaminhar para Clínica Geral";

    console.log(encaminhamento);

} else {
    console.log("ALERTA: Código de pulseira desconhecido!");
}
