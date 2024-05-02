const { Pool } = require('pg');

// Configurar la conexión a la base de datos PostgreSQL de Render.com
const pool = new Pool({
  user: 'appstorage24_user',
  host: 'dpg-cont718cmk4c73ad3js0-a',
  database: 'appstorage24',
  password: 'bEpx2qNhtJlIJx0FkhIhifdc81asydYv',
  port: 5432, // Puerto predeterminado de PostgreSQL
  ssl: {
    rejectUnauthorized: false // Es importante cuando se utiliza SSL en entornos de producción
  }
});
