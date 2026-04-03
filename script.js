function calculate() {
  const current = parseFloat(document.getElementById("current").value);
  const target = parseFloat(document.getElementById("target").value);
  const power = parseFloat(document.getElementById("power").value);

  if (isNaN(current) || isNaN(target) || current >= target) {
    document.getElementById("result").innerText = "Entrée invalide";
    return;
  }

  const batteryCapacity = 64;
  const efficiency = 0.9;

  const energyNeeded = ((target - current) / 100) * batteryCapacity / efficiency;
  const timeHours = energyNeeded / power;

  const hours = Math.floor(timeHours);
  const minutes = Math.round((timeHours - hours) * 60);

  document.getElementById("result").innerText =
    `${hours}h ${minutes}min`;
}
