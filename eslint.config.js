import js from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import globals from "globals"
export default [
/*
| .Configuración_de_ESLint 📝 Configuración de ESLint
===========================
= Configuración de ESLint =
===========================
*/
    /*
    | #Ajustes_recomendados_para_JavaScript ⚙️ Ajustes recomendados para JavaScript
    [ Ajustes recomendados para JavaScript ]
    */
    /* Usar la configuración recomendada */ js.configs.recommended, {
        /*
        | #Archivos_para_analizar ⚙️ Archivos para analizar
        [ Archivos para analizar ]
        */
        /* Analizar los archivos con las siguientes extensiones: */ files: [
            "**/*.js",
            "**/*.mjs" ],
        /*
        | #JavaScript 📝 JavaScript
        --------------
        - JavaScript -
        --------------
        */
        languageOptions: {
            /*
            | #Versión ⚙️ Versión
            [ Versión ]
            */
            /* Última */ ecmaVersion: "latest",
            /*
            | #Sistema_de_módulos ⚙️ Sistema de módulos
            [ Sistema de módulos ]
            */
            /* ECMAScript */ sourceType: "module",
            /*
            | #Entornos ⚙️ Entornos
            [ Entornos ]
            */
            globals: {
                /* - Navegador */ ...globals.browser,
                /* - Node */ ...globals.node,
                /* - NW.js */ nw: "readonly" } },
        /*
        | #Extensiones 📝 Extensiones
        ---------------
        - Extensiones -
        ---------------
        */
        /*
        | #Formato_del_código Formato del código
        [ Formato del código ]
        */
        /* - Stylistic: Para el formato del código. */ plugins: { "@stylistic": stylistic },
        /*
        | #Reglas 📝 Reglas
        ----------
        - Reglas -
        ----------
        */
        /*
        | #Regla-Formato_del_código Formato del código
        [ Formato del código ]
        */
        /* - Los archivos siempre deben terminar con una línea vacía */ rules: { "@stylistic/eol-last": "error",
            /* - No se deben usar tabuladores, solo espacios. */ "@stylistic/no-tabs": "error",
            /* - No debe haber espacios en blanco al final de las líneas */ "@stylistic/no-trailing-spaces": "error",
            /* - La sangría se debe hacer de 4 en 4 espacios */ "@stylistic/indent": ["error", 4],
            /* - Los textos deben ser formados con comillas dobles */ "@stylistic/quotes": ["error", "double"],
            /* - No se deben usar puntos y comas al final de las líneas */ "@stylistic/semi": ["error", "never"],
            /* - El útlimo elemento de una lista no debe tener una coma al final */ "@stylistic/comma-dangle": ["error", "never"],
            /* - Los comentarios deben tener como mínimo un espacios al inicio y uno al final */ "@stylistic/spaced-comment": ["error", "always", { "block": { "balanced": true } }] } } ]
