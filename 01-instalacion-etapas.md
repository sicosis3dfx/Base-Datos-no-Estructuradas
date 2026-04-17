# Documentación de Instalación: MongoDB & MongoDB Compass
**Asignatura:** TI3032 - Bases de Datos NoSQL  
**Integrantes:** Angelo Zamora, Alexander Cortés  
**Institución:** INACAP  


## 1. Propósito
Documentar el paso a paso de la ejecución, configuración y verificación del software MongoDB según la evidencia recolectada durante el proceso de instalación.

## 2. Paso a Paso de la Instalación (Ejecución del Setup)

| Etapa | Acción Realizada | Evidencia Visual |
| :--- | :--- | :--- |
| **Paso 1** | Ejecución del asistente de instalación (Windows Installer). | Imagen 1 e Imagen 2 |
| **Paso 2** | Aceptación de los términos y condiciones de la licencia de uso. | Imagen 3 |
| **Paso 3** | Selección del tipo de instalación "Complete" para obtener el motor completo. | Imagen 4 |
| **Paso 4** | Configuración de MongoDB como un Servicio de Windows (Service Configuration). | Imagen 5 |
| **Paso 5** | Especificación de rutas locales para el almacenamiento de datos y archivos log. | Imagen 6 |
| **Paso 6** | Configuración opcional para incluir la interfaz gráfica MongoDB Compass. | Imagen 7 |
| **Paso 7** | Confirmación de inicio del proceso de instalación. | Imagen 8 |
| **Paso 8** | Monitoreo del progreso de copiado de archivos y registro de servicios. | Imagen 9 |
| **Paso 9** | Finalización del asistente de instalación del servidor. | Imagen 10 |
| **Paso 10** | Instalación y despliegue automático de los componentes de MongoDB Compass. | Imagen 11 |
| **Paso 11** | Apertura de la interfaz de usuario de Compass tras la instalación exitosa. | Imagen 12 |
| **Paso 12** | Validación técnica mediante terminal para confirmar que el motor responde correctamente. | Imagen 13 |



## 3. Verificación de la Solución
Para asegurar que el proceso fue exitoso, se procedió a realizar una prueba de estado a través de la interfaz de comandos:

1. Se abrió una terminal de sistema (PowerShell/CMD).
2. Se ejecutó el comando: `mongosh --version`.
3. El sistema retornó la versión del shell, confirmando que el servicio está activo y las variables de entorno están correctamente configuradas (ver **Imagen 13**).



## 4. Conclusión
El proceso de instalación se ejecutó sin errores, logrando integrar tanto el motor de base de datos como la herramienta de administración visual. El sistema se encuentra operativo para iniciar las operaciones CRUD solicitadas.