# FIFA RUN -- EVA2 Samantha Bolognesi, Sasha Contreras
# aplicacion web funcional para la gestion y compra de cartas de futbol elite, desarrollada para la asignatura de programacion front-end.

"""
1. validacion de formularios y seguridad (prevencion xss)
validacion de rut: co-diseño del algoritmo en tiempo real para verificar el cuerpo y el calculo del digito verificador (dv) chileno con aislamiento estricto de errores.

seguridad avanzada: siguiendo las directrices de la IA, se erradico por completo el uso de .innerhtml para inyectar datos del usuario. en su lugar, el renderizado dinamico se reestructuro utilizando exclusivamente document.createelement() y .textcontent, bloqueando cualquier vector potencial de ataques por inyeccion de codigo (xss).

2. organizacion de datos con arreglos y objetos
estructura del estado: estructuracion de la base de datos local en un arreglo global de objetos (cartasjugadores) que administra propiedades complejas como identificadores, estadisticas tecnicas, precios y un sistema dinamico de stock.

3. manipulacion del dom y eventos en tiempo real
interactividad reactiva: implementacion de flujos reactivos donde el dom se actualiza inmediatamente al agregar elementos, vaciar el carro o remover un jugador especifico.

delegacion de eventos: optimizacion del rendimiento de la interfaz implementando un unico escuchador de eventos (onclick) en el contenedor del catalogo, delegando la captura de clics a los botones correspondientes mediante selectores de clase css (.btn--primary, .btn--success).

4. estructura del codigo y funciones reutilizables (dry)
modularidad: refactorizacion de funciones extensas en bloques modulares reutilizables con un unico proposito (ej: formatearprecio(), renderizarlistacartas()).

pureza de funciones: creacion de logica matematica pura (como calculariva()), garantizando predictibilidad y la ausencia total de efectos secundarios en los calculos financieros.

5. creatividad, ui/ux y accesibilidad (a11y)
accesibilidad wcag aa: eleccion asistida de una paleta cromatica de alto contraste apta para daltonicos.

diseño e interaccion: configuracion de layouts responsivos fluidos mediante css grid y flexbox junto con un fondo animado interactivo y transiciones suaves (hover) en las tarjetas.

"""