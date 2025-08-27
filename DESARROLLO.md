# Ruta de Desarrollo - Super Mario Shout Run
## Prototipo Funcional Inicial

### Fase 1: Configuración del Entorno (1-2 días)
1. **Configuración del Hardware**
   - Verificar funcionamiento del Arduino Esplora
   - Probar sensores de luz y micrófono
   - Establecer conexión USB y identificar puerto COM

2. **Configuración del Software**
   - Instalar Node.js y dependencias necesarias
   - Configurar p5.serialport
   - Preparar estructura básica del proyecto

### Fase 2: Comunicación Arduino-PC (2-3 días)
1. **Programación Arduino**
   - Implementar lectura básica de sensores
   - Establecer formato JSON para datos
   - Configurar velocidad de transmisión serial

2. **Servidor Node.js**
   - Crear servidor básico
   - Implementar WebSocket
   - Establecer comunicación serial con Arduino
   - Validar recepción de datos de sensores

### Fase 3: Desarrollo del Juego Base (3-4 días)
1. **Escenario Básico**
   - Crear canvas con p5.js
   - Implementar scrolling horizontal básico
   - Añadir plataforma base

2. **Personaje Principal**
   - Crear sprite básico de Mario
   - Implementar movimiento automático
   - Añadir animación básica de movimiento
   - Implementar física básica de salto

### Fase 4: Integración de Controles (2-3 días)
1. **Control de Salto**
   - Implementar detección de cambios de luz
   - Calibrar sensibilidad del sensor
   - Vincular datos del sensor con la mecánica de salto

2. **Control de Ataque**
   - Implementar detección de sonido
   - Establecer umbral de activación
   - Crear animación básica de ataque

### Fase 5: Pruebas y Ajustes (2-3 días)
1. **Pruebas de Jugabilidad**
   - Verificar respuesta de controles
   - Ajustar sensibilidad de sensores
   - Validar fluidez del juego

2. **Optimización**
   - Mejorar rendimiento
   - Reducir latencia de controles
   - Ajustar dificultad básica

### Siguientes Pasos
- Añadir obstáculos básicos
- Implementar sistema de puntuación
- Agregar efectos de sonido básicos
- Crear niveles de prueba

### Tiempo Estimado Total: 10-15 días

### Notas Técnicas
- Priorizar la respuesta en tiempo real de los controles
- Mantener el código modular para facilitar expansiones
- Documentar valores de calibración de sensores
- Implementar manejo básico de errores

### Requisitos Mínimos del Prototipo
- Mario debe poder correr y saltar de manera fluida
- Los controles deben responder sin latencia notable
- El juego debe mantener un framerate estable
- La comunicación Arduino-PC debe ser confiable
