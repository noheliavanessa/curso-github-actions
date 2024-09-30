function main() {
    const nombre = process.env.USERNAME || "desconocido";  // Default si no existe
    console.log(`¡Hola, ${nombre} desde GitHub!`);
}
main();