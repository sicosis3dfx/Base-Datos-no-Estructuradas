# Documentación de Instalación: MongoDB & MongoDB Compass
**Asignatura:** TI3032 - Bases de Datos NoSQL  
**Integrantes:** Angelo Zamora, Alexander Cortés  
**Institución:** INACAP  


# 1. Propósito
Paso a paso de la ejecución, configuración y verificación del software MongoDB según la evidencia recolectada durante el proceso de instalación.

# 2. Paso a Paso de la Instalación (Ejecución del Setup)

|| Paso  |           Acción Realizada           |      Evidencia Visual     |
| :---   |                                 :--- |                      :--- |
| **01** | Inicio del asistente de instalación. |

![Paso  1](./img/1.png)   |
| **02** | Aceptación de términos y licencia.   |

![Paso  2](./img/3.png)   |
| **03** | Elección de instalación "Completa".  | 

![Paso  3](./img/4.png)   |
| **04** | Definición de rutas Data y Logs.     | 

![Paso  4](./img/6.png)   |
| **05** | Activación de MongoDB Compass.       | 

![Paso  5](./img/7.png)   |
| **06** | Confirmación antes de instalar.      | 

![Paso  6](./img/8.png)   |
| **07** | Ejecución de instalación de binarios.| 

![Paso  7](./img/9.png)   |
| **08** | Finalización del asistente.          | 

![Paso  8](./img/10.png)  |
| **09** | Inicialización de MongoDB Compass.   | 

![Paso  9](./img/11.png)  |
| **10** | Validación final con mongosh.        | 

![Paso 10](./img/13.png)  |


# 3. Verificación de la Solución
Para asegurar que el proceso fue exitoso, se procedió a realizar una prueba de estado a través de la interfaz de comandos:

1. Se abrió una terminal de sistema (PowerShell/CMD).
2. Se ejecutó el comando: `mongosh --version`.
3. El sistema retornó la versión del shell, confirmando que el servicio está activo y las variables de entorno están correctamente configuradas (ver **Imagen 13**).



# 4. Conclusión
El proceso de instalación se ejecutó sin errores, logrando integrar tanto el motor de base de datos como la herramienta de administración visual. El sistema se encuentra operativo para iniciar las operaciones CRUD solicitadas.