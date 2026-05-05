const sum = require('./sum');

if (sum(2, 3) === 5) {
  console.log("Prueba pasada con exito!");
  process.exit(0);
} else {
  console.error("Prueba fallida");
  process.exit(1);
}
