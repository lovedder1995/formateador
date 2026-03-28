#!/usr/bin/env node
import { execSync as ejecutar } from "child_process"
import { extname, join, dirname } from "path"
import { fileURLToPath } from "url"
import { readdirSync, readFileSync, existsSync } from "fs"
import ignore from "ignore"
import Declaraciones_y_estilos from "./Formateador/Declaraciones_y_estilos.js"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
/*
| #Formateador Formateador
===============
= Formateador =
===============
*/
/*
| #Configuración 📝 Configuración
[ Configuración ]
*/
/* Primero ubicamos el ejecutable de ESLint */ const eslint = join(__dirname, "node_modules", ".bin", "eslint")
/* y su archivo de configuración. */ const configuración = join(__dirname, "eslint.config.js")
/*
| #Archivos_que_deben_ser_ignorados 📝 Archivos que deben ser ignorados
[ Archivos que deben ser ignorados ]
*/
/* A veces se nos indica en el archivo .ignorado_por_el_formateador que */ let ignorado_por_el_formateador = existsSync(join(process.cwd(), ".ignorado_por_el_formateador")) ? readFileSync(join(process.cwd(), ".ignorado_por_el_formateador"), "utf8") : ""
/* ciertos archivos o carpetas deben ser ignorados. */ let patrones_a_ignorar = []

/* En ese caso, */ if (ignorado_por_el_formateador) {
    /* el archivo */ const contenido = readFileSync(ignorado_por_el_formateador, "utf8")
    /* tendrá un patrón por línea. */ patrones_a_ignorar = contenido.split("\n").map(linea => linea.trim())
        /* Las líneas que comiencen con # son comentarios. */ .filter(linea => linea && !linea.startsWith("#")) }

/* Compliamos los patrones a ignorar para ESLint. */ let ignorado_por_el_formateador_compilado_para_ESLint = patrones_a_ignorar.map(patrón => `--ignore-pattern "${patrón}"`).join(" ")
/*
| #Formatear_JavaScript Formatear JavaScript
[ Formatear JavaScript ]
*/
/* Formateamos */ try {
    /* con ESLint y su configuración */ ejecutar(`"${eslint}" --config "${configuración}" --fix ${ignorado_por_el_formateador_compilado_para_ESLint} .`, {
        /* desde la carpeta donde se está ejecutando el comando */ cwd: process.cwd(),
        /* y mostramos todo lo que devuelva ESLint. */ stdio: "inherit" } )

/* ESLint puede devolver errores que no pudo corregir */ } catch (error) { if (error.status) { process.exit(error.status)
/* o algún otro tipo de error si no se pudo ejecutar correctamente. */ } else { console.error("Error ejecutando ESLint:", error.message); process.exit(1) } }
/*
| #Formatear_estilos Formatear estilos
/*
---------------------
- Formatear estilos -
---------------------
*/
/*
| #Archivos_que_podrían_contener_estilos 📝 Archivos que podrían contener estilos
-----------------------------------------
- Archivos que podrían contener estilos -
-----------------------------------------
*/
/* Listamos todos los archivos en el directorio actual, recursivamente. */ let Archivos_que_podrían_contener_estilos = readdirSync(process.cwd(), { recursive: true })
/*
| #No_es_un_archivo_JavaScript (condicional) ⏭️ No es un archivo JavaScript
[ No es un archivo JavaScript ]
*/
    /* Si no es un archivo JavaScript, lo ignoramos. */.filter(archivo => extname(archivo) === ".js")
/*
| #Está_en_la_lista_de_archivos_que_deben_ser_ignorados (condicional) ⏭️ Está en la lista de archivos que deben ser ignorados
[ Está en la lista de archivos que deben ser ignorados ]
*/
/* Ignoramos los mismos archivos */ const gitignore = ignore().add(existsSync(join(process.cwd(), ".gitignore")) ? readFileSync(join(process.cwd(), ".gitignore"), "utf8") : "")
/* ignorados por Git */ Archivos_que_podrían_contener_estilos = Archivos_que_podrían_contener_estilos.filter(archivo => !gitignore.ignores(archivo))
/* y el */ ignorado_por_el_formateador = ignore().add(ignorado_por_el_formateador)
/* formateador. */ Archivos_que_podrían_contener_estilos = Archivos_que_podrían_contener_estilos.filter(archivo => !ignorado_por_el_formateador.ignores(archivo))
/*
| #Líneas 📝 Líneas
----------
- Líneas -
----------
*/
/* Separamos */ let Líneas_de_los_archivos_que_podrían_contener_estilos = Archivos_que_podrían_contener_estilos.map(ubicación_del_archivo =>
/* el archivo */ readFileSync(join(process.cwd(), ubicación_del_archivo), "utf8")
    /* por líneas. */ .split("\n").map(línea => línea.replace(/\r$/, "").trim())

    /* De las líneas nos interesa saber también */ .map((línea, identificador) => ({ contenido_de_texto: línea,
        /* el archivo del que provienen */ archivo: ubicación_del_archivo.replaceAll("\\", "/"),
            /* y su número de línea. */ número_de_línea: identificador + 1 } ) ) ).flat()
/*
| #No_es_un_estilo (condicional) ⏭️ No es un estilo
[ No es un estilo ]
*/
/* Si la línea */ let Líneas_con_estilos = Líneas_de_los_archivos_que_podrían_contener_estilos.filter((línea) =>
    /* no es un estilo, la ignoramos. */ línea.contenido_de_texto.trimStart().startsWith("/*") && línea.contenido_de_texto.split("/*")[1].trimStart().startsWith("🖌️"))
/*
| #Estilos 📝 Estilos
[ Estilos ]
*/
/* De cada línea de estilo */ Líneas_con_estilos.forEach(línea => {
    /* extraemos el estilo */ const estilo = línea.contenido_de_texto.split("🖌️")[1].split("*/")[0].trim()
    /* y la declaración del estilo. */ const declaración = línea.contenido_de_texto.split("*/")[1].trim()

    /* Revisamos si la declaración está en la lista de declaraciones y estilos. */ const declaración_y_estilo = Declaraciones_y_estilos.find(declaración_y_estilo => declaración.includes(declaración_y_estilo.declaración))
    /* Si encontramos la declaración en la lista, */ if (declaración_y_estilo) {
        /* verificamos que el estilo sea el que le corresponde a esta declaración. */ if (!estilo.includes(declaración_y_estilo.estilo)) {

            /* Si no corresponden, notificamos el error. */ console.error(`${línea.archivo}:${línea.número_de_línea}\nEstilo encontrado: ${estilo}\nEstilo esperado:   ${declaración_y_estilo.estilo}`); process.exit(1) }

    /* Si no encontramos la declaración en la lista, */ } else {
        /* notificamos el error. */ console.error(`${línea.archivo}:${línea.número_de_línea}\nDeclaración desconocida: ${declaración}`); process.exit(1) } } )
