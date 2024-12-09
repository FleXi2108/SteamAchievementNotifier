export const translations = {
    global: {
        main: "Principal",
        rare: "Raro",
        plat: "100%",
        topleft: "Arriba Izquierda",
        topcenter: "Arriba Centro",
        topright: "Arriba Derecha",
        bottomleft: "Abajo Izquierda",
        bottomcenter: "Abajo Centro",
        bottomright: "Abajo Derecha",
        ok: "Aceptar",
        preview: "Vista Previa",
        save: "Guardar",
        back: "Volver",
        settings: "Configuración",
        appversion: "Versión de la Aplicación",
        image: "Imagen",
        audio: "Audio",
        folder: "Carpeta",
        font: "Fuente",
        select: "Seleccionar",
        gametitle: "Título del Juego",
        congrats: "¡Felicidades!",
        achievementunlocked: "Logro Desbloqueado",
        gamecomplete: "100% Completado",
        achievementdesc: "Hizo clic en el botón para mostrar la notificación de prueba",
        gamecompletedesc: "¡Has desbloqueado todos los logros!",
        defaultcustomfont: "Por Defecto (Ninguna Fuente Seleccionada)",
        defaultsoundfile: "Por Defecto (Ningún Archivo Seleccionado)",
        defaultsounddir: "Por Defecto (Ninguna Carpeta Seleccionada)",
        nowtracking: "Siguiendo logros para:",
        nopreview: "Vista previa no disponible para el sistema operativo nativo",
        options: "Opciones",
        resetwindow: "Restablecer Ventana",
        show: "Mostrar",
        exit: "Salir",
        releasegame: "Liberar Juego",
        releasegamesub: [
            `Reinicia el proceso Worker en segundo plano y libera el juego actual de ser rastreado`,
            `Prueba esta opción si has cerrado recientemente un juego pero Steam aún lo muestra como en ejecución, o si Steam Achievement Notifier aún muestra que está rastreando un juego que ya ha sido cerrado`
        ],
        noupdateavailable: "No hay actualizaciones disponibles",
        latestversion: "Última versión instalada",
        missingdeps: "Dependencia faltante",
        restartapp: "Reiniciar Aplicación",
        restartappsub: [
            `Si las cosas no funcionan correctamente, utiliza esta opción para cerrar y volver a abrir la aplicación`,
            `Si el problema persiste después de reiniciar la aplicación, considera reportarlo usando los enlaces integrados en la pantalla de inicio`
        ],
        suspend: "Suspender",
        resume: "Reanudar",
        new: "Nuevo...",
        nodata: "Sin Datos",
        findappid: "Buscar AppID",
        findappidsub: [
            `Cada juego de Steam tiene un número único asociado a él, llamado <span class="hl">AppID</span>. Puedes encontrar el AppID asociado a cualquier juego de Steam verificando uno de los siguientes métodos:`,
            `En el <span class="hl">cliente de Steam</span>, haz clic derecho en un juego en tu <span class="hl">Biblioteca</span> y selecciona <i>Propiedades</i> > <i>Actualizaciones</i> - aquí se listarán los AppID`,
            `La <span class="hl">URL</span> de la página de la <span class="hl">tienda</span> del juego - será el número listado después de <span class="hl">app/</span>: <code class="appidhelpcode">https://store.steampowered.com/app/<span class="hl">4000</span></code>`,
            `Sitios web como <span class="hl">SteamDB</span> - la sección de <span class="hl">Información de la Aplicación</span> listará el AppID para cada juego`
        ],
        noexe: "¡Archivo EXE del juego no encontrado!",
        noexesub: "Haz clic aquí para más información",
        noexedialogsub: [
            `Steam Achievement Notifier no pudo localizar automáticamente el archivo ejecutable de este juego. Se requiere la ubicación del archivo ejecutable del juego para "liberar" el juego`,
            `Para liberar el juego manualmente, <i>haz clic derecho</i> en el <span class="hl">icono de la bandeja del sistema</span> > <span class="hl">Opciones</span> > <span class="hl">Liberar juego</span>, o usa el <span class="hl">Acceso directo para liberar el juego</span>`,
            `Alternativamente, haz clic en el botón <span class="hl">Link</span> abajo para agregar el archivo ejecutable asociado con la ventana enfocada al menú <span class="hl">Juegos vinculados</span>`,
            `<span class="hl help" id="linkgamehelp"><u>¿Qué sucede cuando hago clic en el botón Link?</u></span>`
        ],
        linkgamehelp: "Vincular juego a través de ventana",
        linkgamehelpsub: [
            `Al hacer clic en el botón <span class="hl">Link</span>, se agregará automáticamente una nueva entrada al menú <span class="hl">Configuraciones</span> > <span class="hl">Juegos vinculados</span>, usando la información de la ventana enfocada.`,
            `Después de hacer clic en el botón <span class="hl">Link</span>, comenzará un temporizador de 5 segundos`,
            `Antes de que termine el temporizador, enfoca la ventana del juego`,
            `Cuando termine el temporizador, se agregará una nueva entrada para el <span class="hl">AppID</span> actual al menú <span class="hl">Configuraciones</span> > <span class="hl">Juegos vinculados</span>, usando el archivo ejecutable de la ventana enfocada`,
            `Si necesitas intentarlo nuevamente, elimina la entrada desde <span class="hl">Configuraciones</span> > <span class="hl">Juegos vinculados</span> haciendo clic en el botón <span id="linkhelpunlink"></span>`
        ],
        addlinkfailed: "No se pudo vincular la ventana",
        addlinkfailedsub: `Haz clic en el botón <span class="hl">Link</span> para intentar de nuevo`,
        webhookunlockmsg: "$user desbloqueó un logro",
        webhookunlockmsgplat: "$user desbloqueó todos los logros",
        webhookingame: "en $gamename",
        notconnected: "No conectado"
    },
    app: {
        content: {
            game: "No se detectó ningún juego",
            customise: "Personalizar",
            test: "Mostrar notificación de prueba"
        }
    },
    settings: {
        language: {
            title: "Idioma",
            content: {
                steamlang: "Traducir logros al idioma de Steam",
                maxsteamlangretries: "Número máximo de intentos de traducción"
            }
        },
        os: {
            title: "Sistema operativo",
            content: {
                desktop: "Crear acceso directo en el escritorio",
                startwin: "Iniciar al iniciar sesión",
                startmin: "Iniciar minimizado",
                nohwa: "Desactivar aceleración de hardware",
                litemode: "Modo ligero"
            }
        },
        notifications: {
            title: "Notificaciones",
            content: {
                rarity: "Porcentaje de rareza",
                rareonly: "Solo raras",
                all: "Todas",
                off: "Apagado",
                showpercent: "Mostrar porcentaje",
                soundonly: "Solo sonido",
                nowtracking: "Mostrar Notificación de Seguimiento",
                nowtrackingscale: "Escala de Seguimiento",
                nowtrackingpos: "Posición de Seguimiento",
                shortcuts: "Accesos directos de notificación",
                noiconcache: "Desactivar caché de iconos",
                webhooks: "Publicar en el servidor de Discord",
                webhooktypes: "Tipos de Webhook",
                webhookurl: `URL del Webhook`,
                webhookcaution: `Al habilitar esta opción y proporcionar un enlace válido de Webhook de Discord, aceptas que entiendes que <u>toda la información sobre logros y juegos del usuario actual de Steam</u> será publicada en el servidor de Discord especificado a través del enlace de Webhook proporcionado.<br><br>Si no deseas que Steam Achievement Notifier publique esta información en tu nombre, desactiva esta opción.`,
                webhooklaststatus: "Último Estado"
            }
        },
        games: {
            title: "Juegos",
            content: {
                linkedgames: "Juegos Enlazados",
                themeswitch: "Cambio automático de temas",
                exclusionlist: "Lista de Exclusión"
            }
        },
        media: {
            title: "Medios",
            content: {
                steamss: "Tomar captura de pantalla de Steam",
                screenshots: "Medios adicionales",
                off: "Apagado",
                overlay: "Captura de pantalla con superposición de notificación",
                monitors: "Origen de la captura de pantalla",
                hdrmode: "Modo HDR",
                ovpos: "Posición de superposición",
                ovmatch: "Coincidir con la posición personalizada",
                ovx: "Desplazamiento Horizontal",
                ovy: "Desplazamiento Vertical",                
                ovpath: "Ruta de la captura de pantalla",
                ssdelay: "Retraso de la captura de pantalla",
                notifyimg: "Imagen de Notificación",
                imgpath: "Ruta de la Imagen"
            }
        },
        streaming: {
            title: "Transmisión",
            content: {
                extwin: "Notificaciones de transmisión",
                extwinframerate: "Tasa de fotogramas",
                extwinshow: "Mostrar ventana",
                audiosrc: "Fuente de audio",
                notify: "Notificar",
                app: "Aplicación",
                off: "Silenciado",
                statwin: "Ventana de estadísticas de logros",
                noachievements: "No hay logros para mostrar",
                startgame: "¡Inicia un juego para mostrar los logros!",
                max: "Máximo",
                custom: "Personalizado...",
                statwinshortcut: "Acceso directo de superposición",
            }
        },
        accessibility: {
            title: "Accesibilidad",
            content: {
                noanim: "Desactivar animaciones de la ventana de la aplicación",
                noupdatedialog: "Desactivar diálogo de actualización",
                nvda: "Activar soporte de NVDA",
                tooltips: "Mostrar consejos de herramientas",
                showsystrayopts: "Mostrar opciones de la bandeja del sistema",
                releaseshortcut: "Acceso directo para liberar juego"
            }
        },
        advanced: {
            title: "Avanzado",
            content: {
                pollrate: "Tasa de Encuestas",
                initdelay: "Retraso de seguimiento",
                releasedelay: "Retraso de Lanzamiento",
                maxretries: "Número Máximo de Reintentos de Proceso",
                debug: "Panel de Depuración",
                userust: "Modo de Procesamiento Alternativo",
                notifydebug: "Mostrar Notificaciones de Depuración",
                usecustomfiles: "Utilizar Archivos de Aplicación Personalizados",
                showcustomfiles: "Mostrar Archivos de Aplicación Personalizados"
            }
        },        
        misc: {
            title: "Misceláneo",
            content: {
                checkforupdates: "Buscar Actualizaciones",
                log: "Registro de la Aplicación",
                reset: "Restablecer aplicación"
            }
        }
    },    
    customiser: {
        preset: {
            title: "Preconfiguración",
            content: {
                preset: "Preconfiguración de Notificaciones",
                iconanim: "Animación de Icono Raro",
                alldetails: "Mostrar Todos los Detalles",
                usepercent: "Usar Porcentaje",
                displaytime: "Tiempo de Visualización",
                scale: "Escala",
                customtext: "Texto Personalizado",
                usegametitle: "Usar Título del Juego",
                customfont: "Fuente Personalizada"
            }
        },
        sound: {
            title: "Sonido",
            content: {
                soundmode: "Modo de Sonido",
                file: "Archivo",
                folder: "Aleatorio",
                soundfile: "Archivo de Sonido",
                sounddir: "Carpeta de Sonido",
                volume: "Volumen"
            }
        },
        style: {
            title: "Estilo",
            content: {
                bgstyle: "Estilo de Fondo",
                solid: "Sólido",
                gradient: "Degradado",
                img: "Imagen",
                gameart: "Arte del Juego",
                gradientangle: "Ángulo de Degradado",
                bgimg: "Imagen de Fondo",
                bgimgbrightness: "Brillo",
                brightness: "Brillo",
                blur: "Desenfoque",
                roundness: "Redondez",
                fontsize: "Tamaño de Fuente",
                opacity: "Opacidad",
                bgonly: "Solo Fondo",
                glow: "Brillo",
                glowcolor: "Color",
                glowsize: "Tamaño",
                glowx: "Desplazamiento Horizontal",
                glowy: "Desplazamiento Vertical",
                glowopacity: "Opacidad",
                glowanim: "Animación",
                glowspeed: "Velocidad",
                off: "Ninguno",
                pulse: "Pulso",
                rainbow: "Arcoíris",
                mask: "Máscara",
                maskimg: "Imagen de máscara",
                outline: "Contorno",
                outlinecolor: "Color del Contorno",
                outlinewidth: "Ancho del Contorno",
                dashed: "Rayado",
                dotted: "Punteado"
            }
        },
        colors: {
            title: "Colores",
            content: {
                primarycolor: "Color Primario",
                secondarycolor: "Color Secundario",
                tertiarycolor: "Color Terciario",
                fontcolor: "Color de Fuente",
                fontoutline: "Contorno de Fuente",
                fontoutlinecolor: "Color de Contorno de Fuente",
                fontshadow: "Sombra de Fuente",
                fontshadowcolor: "Color de Sombra de Fuente"
            }
        },
        icons: {
            title: "Iconos",
            content: {
                iconroundness: "Redondez del Icono",
                plat: "Logotipo 100%",
                usegameicon: "Usar Icono del Juego",
                logo: "Logotipo",
                decoration: "Decoración",
                showdecoration: "Mostrar Decoración",
                rarity: "Rareza",
                showhiddenicon: "Mostrar Icono Oculto",
                hiddenicon: "Icono Oculto",
                replacelogo: "Reemplazar Logo"
            }
        },
        position: {
            title: "Posición",
            content: {
                pos: "Posición en Pantalla",
                usecustompos: "Usar Posición Personalizada",
                setcustompos: "Establecer",
                resetcustompos: "Restablecer"
            }
        },
        theme: {
            title: "Tema",
            content: {
                updatetheme: "Actualizar Tema",
                savetheme: "Guardar Tema",
                sub: [
                    `Los <span class="hl">Temas de Usuario</span> guardados se pueden seleccionar desde el menú <span class="hl">Seleccionar Tema</span> en la pantalla de inicio.`,
                    `¡Asegúrese de que el <span class="hl">Nombre del Tema</span> sea <u>único</u> - un nombre que coincida con un tema existente <u>sobrescribirá el anterior</u>!`
                ],
                placeholder: "Nombre del Tema",
                theme: "Tema",
                importtheme: "Importar Tema",
                import: "Importar",
                importsub: [
                    `Importar un archivo de <span class="hl">tema creado por el usuario</span>`,
                    `Los <span class="hl">temas importados</span> se cargarán automáticamente una vez importados correctamente y se pueden seleccionar desde el menú <span class="hl">Seleccionar Tema</span>`,
                ],
                importidle: `Seleccione un archivo de <span class="hl">tema para importar</span>`,
                importcopied: `Tema copiado correctamente`,
                importrenamed: `Tema renombrado correctamente`,
                importextracted: `Tema extraído correctamente`,
                importrewriting: `Reescribiendo rutas de archivos del tema...`,
                importconverting: `Convirtiendo tema...`,
                importcreating: `Creando tema...`,
                importdone: `Tema importado correctamente`,
                importfailed: `Error al importar el archivo de tema seleccionado!`,
                exporttheme: "Exportar Tema",
                export: "Exportar",
                exporterrortitle: "Error de Exportación",
                exporterrorsub: [
                    "Ocurrió un error al intentar exportar el tema seleccionado",
                    `Intenta guardar el tema actual (<i>a través de <span class="hl">Guardar Tema</span></i>) y vuelve a intentar exportar`,
                    `Si el problema persiste, copia el error a continuación y repórtalo a través de los botones de enlace en la <span class="hl">Pantalla Principal</span>`
                ],
                synctheme: "Sincronizar tema",
                syncedwith: "Sincronizado con",
                themeselect: "Tema seleccionado"
            }
        }
    },
    logwin: {
        content: {
            tagline: "Esto es lo que ha sucedido desde que se inició la aplicación",
            copylog: "Copiar Contenido del Registro"
        }
    },
    reset: {
        content: {
            sub: `
                <div class="wrapper" id="resetsub">
                    <span>¿Estás seguro?</span>
                    <span>Todos los datos configurados previamente, <u>incluidas las Personalizaciones</u>, se restablecerán a los valores predeterminados.</span>
                    <span>🛑 ¡Esta acción no se puede deshacer!</span>
                </div>
            `,
            reset: "Restablecer"
        }
    },
    error: {
        content: {
            subtitle: "El Notificador de Logros de Steam encontró un problema y necesita cerrarse.",
            details: "Aquí están los detalles del error:",
            sub: "Haga clic en los botones a continuación para informar sobre este problema a través de su plataforma preferida.",
            report: "Reportar",
            log: "Registro de Aplicación",
            exit: "Salir"
        }
    },    
    tooltips: {
        game: "El juego para el cual se están rastreando los logros actualmente",
        usertheme: "Seleccionar un tema guardado previamente",
        customise: "Personalizar las notificaciones de logros",
        test: "Mostrar una notificación de prueba, incluyendo cualquier personalización",
        kofi: "¡Donar en Ko-Fi!",
        discord: "¡Unirse a Discord!",
        github: "Informar un problema",
        lang: "Seleccionar el idioma de la interfaz de usuario utilizado en la aplicación",
        steamlang: `Intenta cargar las traducciones ubicadas en los archivos de la aplicación Steam para mostrar la información de logros en el idioma elegido por el usuario en el cliente de Steam<br><br><span class="ttdesc">Esta opción intenta localizar las traducciones en un archivo JSON almacenado en los datos de la aplicación Steam. Si no se puede encontrar una traducción para el logro actual, se mostrarán en su lugar las información de logros recuperada de Steamworks.</span>`,
        maxsteamlangretries: `El número de intentos (cada 100 ms) para encontrar traducciones válidas para el logro actual<br><br><span class="ttdesc">Steam actualmente solo almacena una pequeña cantidad de datos sobre logros en el archivo JSON asociado a cada juego. Cualquier logro que no esté presente en este archivo se añadirá después de que se desbloquee el logro.<br><br>Dado que agregar nuevos datos puede llevar tiempo, aumentar este valor incrementará la probabilidad de encontrar datos de traducción para el logro actual, pero también puede retrasar la aparición de la notificación en pantalla durante el tiempo calculado por esta configuración.<br><br>Si no se pueden encontrar datos de traducción válidos para el logro actual, la traducción volverá al idioma especificado en Steamworks.</span>`,
        desktop: "Alternar un acceso directo en el escritorio para ejecutar la aplicación",
        startwin: "Iniciar Steam Achievement Notifier automáticamente después de iniciar sesión",
        startmin: "Después de iniciar, ocultar la ventana de la interfaz de usuario de la aplicación hasta que se abra desde la bandeja del sistema",
        nohwa: `Desactivar la aceleración de hardware, lo que puede mejorar el rendimiento en sistemas con recursos limitados o sistemas sin una GPU dedicada<br><br><span class="ttdesc">La aplicación se reiniciará después de activar/desactivar esta opción</span>`,
        litemode: "Desactivar todos los elementos interactivos de la interfaz de usuario, proporcionando solo funcionalidad limitada de la aplicación a través del icono de la bandeja del sistema. Puede mejorar los recursos consumidos por la aplicación",
        rarity: "El porcentaje en el cual se activarán las notificaciones de logros raros. Cualquier logro con un porcentaje de desbloqueo superior a este valor se mostrará como una notificación principal",
        showpercent: "Mostrar el porcentaje de desbloqueo del logro en la notificación para el/los tipo(s) seleccionado(s)",
        soundonly: "Desactivar las notificaciones, reproduciendo solo los sonidos establecidos a través del Personalizador",
        extwin: "Crea una ventana que duplique todas las notificaciones que se están mostrando en la pantalla. Luego, esta ventana se puede agregar como fuente de captura de ventana para usarla en software de transmisión, como OBS",
        extwinframerate: "Establecer la tasa de fotogramas objetivo para las notificaciones de transmisión",
        extwinshow: `Alternar la visibilidad de la ventana de Notificaciones de Transmisión<br><br><span class="ttdesc">Cuando está enfocada en la barra de tareas, mantén presionada la tecla <code class="ttcode">Ctrl</code> para mostrar la ubicación actual de la ventana</span>`,
        audiosrc: "Seleccionar la fuente de (o desactivar) el audio generado por la aplicación",
        nowtracking: "Mostrar una notificación que informa al usuario que se están rastreando los logros de un juego en ejecución",
        nowtrackingscale: `Establecer el tamaño de la notificación de seguimiento`,
        nowtrackingpos: `Establecer la posición de la notificación de seguimiento`,
        shortcuts: "Activar una notificación de prueba a través de un acceso directo de teclado. Los accesos directos se pueden personalizar para cada tipo de notificación",
        noiconcache: `Desactiva la caché de iconos de logros al iniciar los juegos.<br><br><span class="ttdesc">Esto puede mejorar significativamente el rendimiento de la aplicación al iniciar los juegos y también puede resolver problemas de seguimiento con juegos que tienen un gran número de logros. Sin embargo, en casos raros, desactivar la caché de iconos puede resultar en la ausencia de iconos de logros en las notificaciones</span>`,
        steamss: "Tomar una captura de pantalla de Steam cuando se desbloquee un logro",
        screenshots: "Seleccionar el tipo de medios adicionales que se crearán cuando se muestre una notificación",
        monitors: "El monitor que se capturará al tomar la captura de pantalla",
        hdrmode: `Captura de pantalla utilizando un método compatible con monitores que utilizan High Dynamic Range (HDR)`,
        ovpos: "La posición de la superposición de notificación dentro de la captura de pantalla",
        ovmatch: "Coincidir con la posición de pantalla establecida en el Personalizador para este tipo de notificación",
        ovpath: "La ubicación donde se guardarán las capturas de pantalla generadas por esta opción",
        ssdelay: "Agregar un retraso desde que ocurre la notificación hasta que se toma la captura de pantalla",
        sspreview: "Mostrar una vista previa de cómo se verá la captura de pantalla al guardarla",
        noanim: "Desactivar todas las animaciones y efectos de transición de ventanas en la aplicación",
        noupdatedialog: `Evita que el diálogo <span class="hl">Actualización disponible</span> se muestre automáticamente y obtenga el enfoque<br><br><span class="ttdesc">El diálogo aún se puede abrir haciendo clic en el botón de actualización cuando esté disponible</span>`,
        nvda: "Habilitar la copia de información de logros al portapapeles cuando se desbloquea un logro, para que pueda ser leída por software de lectura de pantalla, como NVDA",
        tooltips: "Mostrar consejos de herramientas al pasar el cursor sobre ciertos elementos de la interfaz de usuario",
        pollrate: `Establecer el intervalo de actualización para los datos de logros durante el juego<br><br><span class="ttdesc">El rendimiento puede aumentar/disminuir dependiendo del valor o del hardware del sistema. Valores más altos suelen resultar en una carga del sistema más baja, pero pueden causar retrasos en las notificaciones</span>`,
        initdelay: `Establece el retraso entre la detección del <span class="hl">AppID</span> actual y el inicio del seguimiento de procesos/logros<br><br><span class="ttdesc">Aumentar este valor puede evitar escenarios en los que Steam no puede iniciar el juego actual (debido a la inicialización de la aplicación en Steamworks antes de que se inicie el juego)</span><br><br><span class="ttdesc">Alternativamente, aumentar este valor también puede utilizarse para evitar la detección incorrecta de procesos de prelanzamiento del juego</span>`,
        releasedelay: `Establece cuánto tiempo espera el proceso en segundo plano para reiniciarse después de que el juego actual haya sido lanzado. Afecta tanto al seguimiento automático de procesos como a los juegos vinculados manualmente.<br><br><span class="ttdesc">Proporciona un período más largo para liberar completamente Steamworks de la aplicación. Aumentar este valor puede prevenir comportamientos inusuales, como rastrear un juego previamente cerrado</span>`,
        maxretries: `Establece el número máximo de intentos para vincular un proceso en ejecución a un AppID detectado. Afecta tanto al seguimiento automático de procesos como a los juegos vinculados manualmente.<br><br><span class="ttdesc">Los intentos de vinculación se realizan una vez por segundo. Si un proceso en ejecución no está vinculado al AppID actual después de este número de intentos, se devolverá un proceso no válido. En tales casos, el juego deberá ser liberado manualmente a través del Área de notificación del sistema > Opciones > Liberar Juego</span>`,
        debug: "Abre el Panel de Depuración, que muestra información detallada de seguimiento de procesos",
        userust: "Utiliza una función alternativa basada en Rust para verificar si los procesos de juego rastreados están actualmente en ejecución en el sistema. Cuando no esté marcado, se utilizará en su lugar la comprobación de procesos predeterminada basada en NodeJS.",
        notifydebug: "Crear una ventana de herramientas de desarrollo para todas las notificaciones. Útil para depurar/solucionar problemas de notificación",
        usecustomfiles: "Permite que las notificaciones carguen archivos personalizables por el usuario. Se recomienda precaución para los usuarios regulares",
        showcustomfiles: "Abrir la ubicación de los archivos personalizados",
        log: "Abrir la ventana de registro de la aplicación, que muestra información sobre la actividad del proceso, advertencias y errores",
        reset: "Eliminar todos los datos de configuración y reiniciar la aplicación",
        playback: "Pausar/reanudar la animación de la vista previa de la notificación",
        replay: "Reiniciar la animación de la vista previa de la notificación",
        preset: "Seleccionar el ajuste preestablecido de notificación para personalizar",
        iconanim: "Alternar el borde y la animación del icono de logro raro",
        alldetails: "Mostrar todos los elementos de texto dentro de la notificación, incluidos los ocultos de forma predeterminada para este ajuste preestablecido",
        usepercent: "Mostrar el porcentaje de desbloqueo del logro, en lugar del valor XP/S",
        displaytime: "Establecer la cantidad de segundos que se mostrará la notificación",
        scale: "Aumentar o disminuir el tamaño de la notificación",
        customtext: "Establecer un mensaje personalizado que se mostrará dentro de la notificación",
        usegametitle: "Mostrar el título del juego actual dentro de la notificación",
        customfont: "Cargar una fuente personalizada para usar dentro de la notificación",
        soundmode: "Seleccionar un archivo de audio único o un archivo de audio seleccionado al azar de una carpeta que contiene varios archivos de audio, cuando ocurre una notificación",
        soundfile: "Seleccionar un archivo de audio para reproducir cuando ocurre una notificación",
        sounddir: "Seleccionar una carpeta de la cual se seleccionará al azar un archivo de audio cuando ocurra una notificación",
        volume: "Establecer el volumen de reproducción del archivo de audio",
        preview: "Previsualizar el archivo de audio seleccionado o un archivo de audio seleccionado al azar de la carpeta",
        bgstyle: "Seleccionar el estilo para el fondo de la notificación",
        gradientangle: "Establecer el ángulo del degradado",
        bgimg: "Cargar un archivo de imagen para usar como fondo de la notificación",
        bgimgbrightness: "Establece el brillo de la imagen utilizada como fondo de la notificación",
        brightness: "Establecer el brillo del arte del juego utilizado como fondo de la notificación",
        blur: "Establecer el nivel de desenfoque aplicado al fondo de la notificación",
        roundness: "Establecer la redondez de los bordes de la notificación",
        fontsize: "Establecer el tamaño de la fuente utilizada en la notificación",
        opacity: "Establecer la opacidad general de la notificación",
        bgonly: "Establecer solo la opacidad para el fondo de la notificación, manteniendo los demás elementos a plena opacidad",
        glow: "Activar un efecto de resplandor que rodea la notificación",
        glowcolor: "Establecer el color del efecto de resplandor",
        glowsize: "Establecer el tamaño del efecto de resplandor",
        glowx: "Desplazar el efecto de resplandor horizontalmente",
        glowy: "Desplazar el efecto de resplandor verticalmente",
        glowopacity: "Establecer la opacidad del efecto de resplandor",
        glowanim: "Seleccionar una animación predefinida para aplicar al efecto de resplandor",
        glowspeed: "Establecer la velocidad de la animación aplicada al efecto de resplandor",
        mask: "Activar el enmascaramiento de partes de la notificación con una imagen personalizada",
        maskimg: `Cargar un archivo de imagen para usar como máscara<br><br><span class="ttdesc">En CSS, <code class="ttcode">mask-mode: alpha</code> funciona de manera opuesta a lo que generalmente se espera: las áreas de transparencia en el archivo de imagen serán oscurecidas, y las áreas negras/grises permitirán que los elementos debajo sean visibles</span>`,
        outline: "Selecciona el tipo de contorno que se mostrará alrededor de la notificación",
        outlinecolor: "Establece el color del contorno alrededor de la notificación",
        outlinewidth: "Establece el ancho del contorno alrededor de la notificación",
        primarycolor: "Establecer el color primario de la notificación",
        secondarycolor: "Establecer el color secundario de la notificación",
        tertiarycolor: "Establecer el color terciario de la notificación",
        fontcolor: "Establecer el color de todo el texto que se muestra dentro de la notificación",
        fontoutline: "Agregar un contorno a todo el texto que se muestra dentro de la notificación",
        fontoutlinecolor: "Establecer el color del contorno del texto",
        fontshadow: "Agregar una sombra a todo el texto que se muestra dentro de la notificación",
        fontshadowcolor: "Establecer el color de la sombra del texto",
        iconroundness: "Establecer la redondez del icono de logro/juego que se muestra dentro de la notificación",
        plat: "Cargar un archivo de imagen para usar como el icono del 100%",
        usegameicon: "Reemplazar el icono de notificación predeterminado con el icono del juego actual",
        showhiddenicon: "Mostrar una imagen que indique que el logro está oculto en la notificación",
        hiddenicon: "Cargar un archivo de imagen para reemplazar el icono del logro oculto",
        logo: "Cargar un archivo de imagen para reemplazar el icono de Logotipo",
        decoration: "Cargar un archivo de imagen para reemplazar el icono de Decoración",
        showdecoration: "Alternar la visibilidad del icono de Decoración",
        replacelogo: "Reemplace el icono del logotipo en la notificación con la decoración seleccionada",
        pos: "Establecer la posición en pantalla de la notificación",
        usecustompos: "Habilitar el posicionamiento personalizado para la notificación",
        setcustompos: "Establecer la posición personalizada para la notificación",
        resetcustompos: "Restablecer la posición de la notificación a la posición personalizada predeterminada",
        updatetheme: "Actualizar el tema actual con las opciones de personalización seleccionadas",
        savetheme: "Guardar todas las opciones de personalización configuradas como un nuevo tema",
        visibilitybtn: "Alternar la visibilidad del elemento en las vistas previas personalizadas y las notificaciones de prueba",
        delbtn: "Restablecer el elemento al valor predeterminado",
        imgpath: "La ubicación donde se guardarán las imágenes de notificación generadas por esta opción",
        checkforupdates: `Verifique si se ha lanzado una nueva versión de la aplicación en GitHub. Si hay una actualización disponible, se descargará e instalará automáticamente una vez confirmada a través del cuadro de diálogo <span class="hl">Actualización disponible</span>`,
        linkedgames: `Evitar el <span class="hl">seguimiento automático de procesos</span> para juegos específicos de Steam<br><br><span class="ttdesc">Esta opción debería utilizarse solo en escenarios muy específicos. Los usuarios no deberían necesitar usar esta opción en circunstancias normales.</span>`,
        exclusionlist: `Prevenir que la aplicación rastree los logros en juegos específicos de Steam<br><br><span class="ttdesc">Esta opción debería utilizarse solo en escenarios muy específicos. Los usuarios no deberían necesitar usar esta opción en circunstancias normales.</span>`,
        ovx: "Desplazar la notificación mostrada en la captura de pantalla horizontalmente",
        ovy: "Desplazar la notificación mostrada en la captura de pantalla verticalmente",
        importtheme: `Importar personalizaciones mediante un archivo de <span class="hl">tema creado por el usuario</span>`,
        exporttheme: `Exportar el <span class="hl">tema</span> seleccionado actualmente para compartir<br><br><span class="ttdesc">Antes de intentar exportar, asegúrese de que el <span class="hl">tema</span> deseado esté seleccionado (a través del menú <span class="hl">Seleccionar Tema</span>). También asegúrese de que las personalizaciones hayan sido guardadas en el <span class="hl">tema</span> seleccionado (a través del menú <span class="hl">Guardar Tema</span>)<br><br><u>Cualquier personalización no guardada en el <span class="hl">tema</span> actual no será exportada!</u></span>`,
        webhooks: "Usa una URL de Webhook para publicar en un servidor de Discord cada vez que se desbloquee un logro",
        webhooktypesmain: `Alternar si se debe o no publicar información sobre logros en un servidor de Discord cuando se desbloquee un logro principal`,
        webhooktypesrare: "Alternar si se debe o no publicar información sobre logros en un servidor de Discord cuando se desbloquee un logro raro",
        webhooktypesplat: "Alternar si se debe o no publicar información sobre logros en un servidor de Discord cuando se desbloquee un logro del 100%",
        webhookurl: `Establece la <span class="hl">URL del Webhook</span> para el servidor de Discord deseado<br><br><span class="ttdesc">Una <span class="hl">URL del Webhook</span> se usa para publicar en un servidor/canal de Discord en nombre de un usuario o aplicación. Para configurar un nuevo Webhook para un servidor de Discord, el usuario debe tener un rol en el servidor deseado que permita la creación de Webhooks<br><br><u>Una URL de Webhook es necesaria al usar esta opción</u><br><br>Consulta la documentación oficial de Discord para obtener más información</span>`,
        unlockmsg: "Establece la posición del mensaje de desbloqueo/texto personalizado dentro del $type",
        title: "Establece la posición del título del logro dentro del $type",
        desc: "Establece la posición de la descripción del logro dentro del $type",
        notification: "notificación",
        screenshot: "captura de pantalla",
        percentpos: "Establece la posición del porcentaje de rareza dentro del $type",
        sspercentpos: "Establece la posición del porcentaje de rareza dentro del $type",
        hiddeniconpos: "Establece la posición del ícono de logro oculto/secreto dentro del $type",
        sshiddeniconpos: "Establece la posición del ícono de logro oculto/secreto dentro del $type",
        decorationpos: "Establece la posición del elemento decorativo dentro del $type",
        ssdecorationpos: "Establece la posición del elemento decorativo dentro del $type",
        percentbadge: "Mostrar el porcentaje de desbloqueo dentro de una insignia colocada sobre el ícono de logro/juego",
        sspercentbadge: "Mostrar el porcentaje de desbloqueo dentro de una insignia colocada sobre el ícono de logro/juego",
        percentbadgepos: "Establecer la posición de la insignia",
        sspercentbadgepos: "Establecer la posición de la insignia",
        percentbadgecolor: "Establecer el color de fondo de la insignia",
        sspercentbadgecolor: "Establecer el color de fondo de la insignia",
        percentbadgefontcolor: "Establecer el color de fuente de la insignia",
        sspercentbadgefontcolor: "Establecer el color de fuente de la insignia",
        percentbadgefontsize: "Establecer el tamaño de la insignia",
        sspercentbadgefontsize: "Establecer el tamaño de la insignia",
        percentbadgeroundness: "Establecer la redondez de la insignia",
        sspercentbadgeroundness: "Establecer la redondez de la insignia",
        percentbadgex: "Desplazar la posición del elemento de la insignia horizontalmente",
        sspercentbadgex: "Desplazar la posición del elemento de la insignia horizontalmente",
        percentbadgey: "Desplazar la posición del elemento de la insignia verticalmente",
        sspercentbadgey: "Desplazar la posición del elemento de la insignia verticalmente",
        percentbadgeimg: "Mostrar un icono basado en la rareza como el elemento de la insignia",
        sspercentbadgeimg: "Mostrar un icono basado en la rareza como el elemento de la insignia",
        percentbadgeimgbronze: "El icono de la insignia que se mostrará cuando el porcentaje de desbloqueo sea > 50%",
        sspercentbadgeimgbronze: "El icono de la insignia mostrado cuando el porcentaje de desbloqueo es > 50%",
        percentbadgeimgsilver: "El icono de la insignia mostrado cuando el porcentaje de desbloqueo es < 50% y > $rarity",
        sspercentbadgeimgsilver: "El icono de la insignia mostrado cuando el porcentaje de desbloqueo es < 50% y > $rarity",
        percentbadgeimggold: "El icono de la insignia mostrado cuando el porcentaje de desbloqueo es < $rarity",
        sspercentbadgeimggold: "El icono de la insignia mostrado cuando el porcentaje de desbloqueo es < $rarity",
        resetpbimgs: "Restablecer todos los iconos de insignia a los predeterminados",
        elemsmatch: `Coincidir con la configuración de los elementos de notificación establecidos en el personalizador para este tipo de notificación<br><br><span class="ttdesc">Algunos preajustes de notificación pueden no coincidir completamente con la configuración del personalizador, debido a las diferencias entre los diseños de notificación en pantalla y basados en capturas de pantalla</span>`,
        themeswitch: `Cambiar automáticamente a cualquier <span class="hl">Tema</span> guardado cuando se detecta un juego específico`,
        userthemesync: `Sincronizar personalizaciones en el <span class="hl">Tema</span> seleccionado a todos los demás tipos de notificación`,
        showsystrayopts: `Mostrar todas las opciones que normalmente se encuentran bajo <span class="hl">Bandeja del sistema</span> > <span class="hl">Opciones</span> en <span class="hl">Configuraciones</span> > <span class="hl">Varios</span>`,
        releaseshortcut: "Liberar el juego actualmente rastreado usando el acceso directo de teclado especificado",
        themeselect: "Selecciona un tema guardado previamente",
        statwin: `Mostrar estadísticas configurables de logros para el juego actual en una ventana externa<br><br><span class="ttdesc">Cuando se usa junto con la opción <span class="hl">Traducir logros al idioma de Steam</span>, algunas traducciones pueden no estar disponibles hasta que se desbloquee el logro específico</span>`,
        statwinshortcut: "Alternar la superposición de estadísticas de logros usando el acceso directo de teclado especificado"
    },
    update: {
        updateavailable: "Actualización disponible",
        sub: [
            `<span id="newversion"></span>`,
            "¡Hay una nueva actualización de Steam Achievement Notifier disponible!",
            `Notas completas de la versión disponibles en <span id="discordreleasenotes"></span> y <span id="githubreleasenotes"></span>`
        ],
        update: "Actualizar"
    },
    linkgame: {
        content: {
            exepath: "Ruta del Ejecutable",
            managesub: [
                `Asocia manualmente el <span class="hl">archivo ejecutable</span> de un juego a un <span class="hl">AppID</span> específico, o <span class="hl">desvincula</span> uno existente`,
                `Steam Achievement Notifier ya no utilizará el <span class="hl">seguimiento automático de procesos</span> para ningún <span class="hl">juego asociado</span> - en su lugar, el <span class="hl">archivo ejecutable</span> especificado se rastreará cada vez que se detecte el <span class="hl">AppID</span> asociado`,
                `<span class="hl" id="appidhelp"><u>¿Cómo encuentro el AppID de un juego de Steam?</u></span>`
            ],
            linknew: "Nuevo Juego Asociado",
            linknewsub: [
                `Crea un nuevo enlace entre un <span class="hl">archivo ejecutable del juego</span> y el <span class="hl">AppID</span> asociado`,
                `Una vez creado, los enlaces pueden ser <span class="hl">desvinculados</span> a través del cuadro de diálogo <span class="hl">Administrar Juegos Asociados</span>`
            ],
            link: "Vincular",
        }
    },
    exclusions: {
        content: {
            managesub: [
                `Agregar el <span class="hl">AppID</span> de cualquier juego de Steam a la <span class="hl">Lista de Exclusión</span>`,
                `Steam Achievement Notifier no intentará rastrear datos de logros para ningún juego cuyo <span class="hl">AppID</span> haya sido agregado a la <span class="hl">Lista de Exclusión</span>`,
                `<span class="hl" id="appidhelp"><u>¿Cómo encuentro el AppID de un juego de Steam?</u></span>`
            ],
            exclusionnew: "Nueva Exclusión",
            exclusionnewsub: [
                `Ingrese el <span class="hl">AppID</span> para agregar a la <span class="hl">Lista de Exclusión</span>`
            ]
        }
    },
    notificationelems: {
        title: "Elementos de Notificación",
        content: {
            unlockmsg: "Mensaje de Desbloqueo",
            title: "Título del Logro",
            desc: "Descripción del Logro",
            hiddeniconpos: "Ícono Oculto",
            sshiddeniconpos: "Ícono Oculto",
            decorationpos: "Decoración",
            ssdecorationpos: "Decoración",
            percentpos: "Porcentaje de Rareza",
            sspercentpos: "Porcentaje de Rareza",
            percentbadge: "Insignia de Porcentaje",
            sspercentbadge: "Insignia de Porcentaje",
            percentbadgepos: "Posición de la Insignia",
            sspercentbadgepos: "Posición de la Insignia",
            percentbadgecolor: "Color de la Insignia",
            sspercentbadgecolor: "Color de la Insignia",
            percentbadgefontcolor: "Color de Fuente de la Insignia",
            sspercentbadgefontcolor: "Color de Fuente de la Insignia",
            percentbadgefontsize: "Tamaño de la Insignia",
            sspercentbadgefontsize: "Tamaño de la Insignia",
            percentbadgeroundness: "Redondez de la Insignia",
            sspercentbadgeroundness: "Redondez de la Insignia",
            percentbadgex: "Desplazamiento horizontal",
            sspercentbadgex: "Desplazamiento horizontal",
            percentbadgey: "Desplazamiento vertical",
            sspercentbadgey: "Desplazamiento vertical",
            percentbadgeimg: "Usar icono",
            sspercentbadgeimg: "Usar icono",
            percentbadgeimgbronze: "Rareza: > 50%",
            sspercentbadgeimgbronze: "Rareza: > 50%",
            percentbadgeimgsilver: "Rareza: < 50% & > $rarity%",
            sspercentbadgeimgsilver: "Rareza: < 50% & > $rarity%",
            percentbadgeimggold: "Rareza: < $rarity%",
            sspercentbadgeimggold: "Rareza: < $rarity%",
            resetpbimgs: "Restablecer iconos de insignias",
            elemsmatch: "Coincidir con la configuración del personalizador"
        }
    },
    themeswitch: {
        content: {
            managesub: [
                `Agregar el <span class="hl">AppID</span> de cualquier juego para cambiar automáticamente <span class="hl">Temas</span> cuando se detecte`,
                `Cualquier <span class="hl">Tema</span> guardado puede seleccionarse para cada tipo de notificación, junto con el monitor deseado para usar como <span class="hl">Fuente de captura de pantalla</span>`,
                `<span class="hl" id="appidhelp"><u>¿Cómo encuentro el AppID de un juego de Steam?</u></span>`
            ],
            themeswitchnew: "Nuevo cambio automático",
            themeswitchnewsub: [
                `Ingrese el <span class="hl">AppID</span> del juego, junto con el monitor deseado para usar como <span class="hl">Fuente de captura de pantalla</span>`,
                `Seleccione qué <span class="hl">Tema</span> cambiar para cada tipo de notificación cuando se detecte el <span class="hl">AppID</span> de este juego`
            ],
            themes: "Temas",
            src: "Fuente de captura de pantalla",
            themedeleted: "Tema eliminado"
        }
    }
}

export const missingdepssub = (opt: string, dep: string) => [
    `Parece que estás intentando activar la opción <span class="hl">${opt}</span>. Sin embargo, en sistemas Linux, no se pueden habilitar las capturas de pantalla sin instalar primero el paquete <code class="dialogcode">${dep}</code>`,
    `Por favor, ejecuta <code class="dialogcode" style="user-select: text;">sudo apt-get install ${dep}</code> para instalar esta dependencia. Esto asegurará que se puedan tomar capturas de pantalla en este dispositivo`
]