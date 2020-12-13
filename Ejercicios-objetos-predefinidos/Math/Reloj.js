function Reloj(seguns) {
    const fecha = new Date();
    const config = {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    fecha.setHours(0);
    fecha.setMinutes(0);
    fecha.setSeconds(seguns);
  
    return fecha.toLocaleString("es-EU", config);
  }
  const seg = 87000;
  document.write(`${Reloj(seg)}`);
  