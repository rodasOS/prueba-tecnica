# Proyecto Full-Stack (ASP.NET Web API + Angular)

Este repositorio contiene dos proyectos separados:

- **Backend**: API RESTful desarrollada en ASP.NET Web API con MySQL.
- **Frontend**: Aplicación web desarrollada en Angular.

Ambos proyectos están organizados en las siguientes carpetas:

```
📂 proyecto
├── 📂 backend  (ASP.NET Web API con MySQL)
├── 📂 frontend (Angular)
```

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu equipo:

### Para el Backend:

- .NET SDK (versión 6 o superior) → [Descargar aquí](https://dotnet.microsoft.com/download)
- MySQL Server → [Descargar aquí](https://dev.mysql.com/downloads/)
- Visual Studio / VS Code (recomendado)

### Para el Frontend:

- Node.js (versión 18 o superior) → [Descargar aquí](https://nodejs.org/)
- Angular CLI → Instalar con `npm install -g @angular/cli`

---

## Instalación y Ejecución

### Backend (ASP.NET Web API)

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio/backend
   ```
2. Restaura las dependencias:
   ```sh
   dotnet restore
   ```
3. Configura la conexión a MySQL:
   - Edita `appsettings.json` y actualiza la cadena de conexión:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "server=localhost;database=tu_basededatos;user=tu_usuario;password=tu_contraseña"
     }
     ```
4. Aplica las migraciones a la base de datos:
   ```sh
   dotnet ef database update
   ```
5. Inicia el servidor:
   ```sh
   dotnet run
   ```

### Frontend (Angular)

1. Ve a la carpeta del frontend:
   ```sh
   cd ../frontend
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```sh
   ng serve --open
   ```

El frontend estará disponible en `http://localhost:4200`.

---

## Endpoints Principales (API Backend)

| Método | Ruta                          | Descripción                |
| ------ | ----------------------------- | -------------------------- |
| GET    | `/api/alumnos`                | Obtiene todos los alumnos  |
| GET    | `/api/alumnos/filtro/{grado}` | Obtiene alumnos por grado  |
| POST   | `/api/alumnos`                | Crea un nuevo alumno       |
| PUT    | `/api/alumnos/{id}`           | Actualiza un alumno por ID |
| DELETE | `/api/alumnos/{id}`           | Elimina un alumno por ID   |

---

## Notas Adicionales

- Si necesitas modificar la configuración de CORS, revisa `Program.cs` en el backend.
- Asegúrate de que MySQL esté corriendo antes de ejecutar el backend.

---

## Sobre este Proyecto

Este proyecto fue desarrollado como parte de una prueba técnica para la empresa **TuChance**, en el proceso de aplicación para una plaza de desarrollador .NET.
