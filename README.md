# mariocorre
![boceto](boceto.jpg)
juego interactivo de mario que funciona con arduino esplora
¡Perfecto, Sofi! 🙌
Con todo lo que hablamos, aquí te armo un **PRD (Product Requirements Document)** súper enfocado en tu juego **Super Mario Shout Run**, limitado a **máx. 5 secciones** y usando **solo los dos sensores que definimos: luz + voz (micrófono)**.

---

**Super Mario Shout Run**

## 1. Objetivo del producto

Crear un videojuego runner inspirado en *Geometry Dash* y *Super Mario Bros*, donde el personaje se mueve automáticamente y el jugador controla la acción mediante dos entradas innovadoras del **Arduino Esplora**:

* **Sensor de luz** → control de salto.
* **Micrófono** → activación de poderes de ataque.

El objetivo es ofrecer una experiencia de juego accesible, divertida y diferente, integrando mecánicas físicas (luz + voz) con la dinámica clásica de Mario.

---

## 2. Usuarios objetivo

* **Jugadores casuales**: buscan una experiencia rápida y entretenida.
* **Entusiastas de Arduino**: interesados en probar un control alternativo.
* **Estudiantes y makers**: personas que quieren explorar la interacción física en videojuegos.

---

## 3. Funcionalidades principales

* **Movimiento automático**: Mario corre de forma continua.
* **Salto (sensor de luz)**: al iluminar o tapar el sensor, Mario salta obstáculos.
* **Ataque (micrófono)**: al superar un umbral de volumen, Mario lanza un poder (ej. bola de fuego).
* **HUD minimalista**: puntaje en pantalla, vidas y estado de poder.
* **Progresión de niveles**: aumento de velocidad y aparición de enemigos que requieren el uso de voz.

---

## 4. Requisitos técnicos

* **Hardware**: Arduino Esplora conectado por USB.
* **Sensores usados**:

  * Sensor de luz (salto).
  * Micrófono (ataque por voz).
* **Interfaz con PC**: el Arduino emula un teclado →

  * Barra espaciadora = salto.
  * Tecla “X” = ataque.
* **Juego en PC**: desarrollado en un motor como Unity, Godot o Processing, que interprete las teclas enviadas.

---

## 5. Experiencia de usuario (UX)

* **Feedback inmediato**:

  * Al saltar → Mario brilla.
  * Al atacar → efecto de voz + animación de poder.
* **Simplicidad**: solo dos acciones (saltar + atacar) fáciles de aprender.
* **Dificultad progresiva**: al inicio solo saltar, luego integrar poderes obligatorios para avanzar.
* **Inmersión física**: el jugador siente que su **voz y la luz real** tienen un impacto directo en el juego.
