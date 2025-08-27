# mariocorre
![boceto](boceto.jpg)
juego interactivo de mario que funciona con arduino esplora
¡Perfecto, Sofi! 🙌
Con todo lo que hablamos, aquí te armo un **PRD (Product Requirements Document)** súper enfocado en tu juego **Super Mario Shout Run**, limitado a **máx. 5 secciones** y usando **solo los dos sensores que definimos: luz + voz (micrófono)**.

---

Perfecto 🚀. Te ajusto el PRD con esa precisión técnica, manteniendo las 5 secciones que pediste:

---

# **PRD – Super Mario Shout Run**

## 1. Descripción del Producto

**Super Mario Shout Run** es un videojuego estilo *runner* inspirado en Mario Bros y Geometry Dash. El personaje se desplaza automáticamente hacia adelante en escenarios con obstáculos, y el jugador debe controlarlo con **dos tipos de interacciones**:

* **Sensor de luz (Arduino Esplora):** Detecta variaciones de luz para ejecutar saltos.
* **Micrófono (Arduino Esplora):** Reconoce picos de volumen de la voz para activar ataques especiales de Mario.

---

## 2. Objetivos del Proyecto

* Diseñar un videojuego jugable desde el navegador.
* Integrar el **Arduino Esplora** como control principal.
* Permitir una jugabilidad intuitiva y divertida, con dos mecánicas simples: **saltar** y **atacar**.
* Innovar al combinar hardware físico con interacción por voz y luz.

---

## 3. Alcance y Funcionalidades

* Mario corre automáticamente, evitando obstáculos al **detectar un cambio de luz**.
* Mario activa un **ataque especial (fuego, golpe, etc.) al reconocer un grito o sonido fuerte**.
* El sistema debe poder recibir datos desde el **Arduino Esplora conectado a un puerto COM** (ejemplo: COM12).
* Requiere un flujo de comunicación:

  1. **Arduino Esplora → COM12**
  2. **p5.serialport (cliente navegador)** → encargado de comunicarse con el servidor.
  3. **Servidor intermedio Node.js** → procesa los datos recibidos y los transmite al navegador vía WebSockets.

---

## 4. Requisitos Técnicos

* **Hardware:**

  * Arduino Esplora con sensores de luz y micrófono.
  * Conexión USB al PC (ejemplo: COM12).

* **Software:**

  * **Node.js** como servidor intermedio.
  * **p5.serialport** para comunicación entre el Arduino y el navegador.
  * **p5.js** para el motor gráfico del juego en el navegador.

* **Comunicación:**

  * Protocolo basado en mensajes seriales JSON.
  * Ejemplo:

    ```json
    { "sensor": "luz", "valor": 320 }  
    { "sensor": "microfono", "valor": 870 }
    ```

---

## 5. Criterios de Éxito

* El juego corre en navegador y responde a los datos enviados desde Arduino Esplora.
* Los saltos se producen de forma fluida al variar la luz.
* Los ataques se activan con gritos o sonidos fuertes.
* La comunicación entre **Arduino → COM12 → Node.js → navegador** es estable y en tiempo real.
