const fs = require('fs');
const path = require('path');

test('El texto "¡Hola Mundo!" está en la página', () => {
  // Leer el archivo HTML
  const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
  
  // Comprobar que el texto "¡Hola Mundo!" esté presente
  expect(html).toContain('¡Hola Mundo!');
});
