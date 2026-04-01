/*
| .Declaraciones_y_estilos Declaraciones y estilos
===========================
= Declaraciones y estilos =
===========================
*/
export default [{
    /*
    | #Texto Texto
    ---------
    - Texto -
    ---------
    */
    estilo: "Color del texto:",
    declaración: "color:" }, {

    estilo: "Tamaño de la tipografía:",
    declaración: "fontSize:" }, {

    estilo: "Grosor de la tipografía:",
    declaración: "fontWeight:" }, {
    /*
    | #Fondo Fondo
    ---------
    - Fondo -
    ---------
    */
    estilo: "Color del fondo:",
    declaración: "backgroundColor:" }, {

    estilo: "Imagen del fondo:",
    declaración: "backgroundImage:" }, {
    /*
    | #Dimensiones Dimensiones
    ---------------
    - Dimensiones -
    ---------------
    */
    estilo: "Altura:",
    declaración: "height:" }, {

    estilo: "Altura mínima:",
    declaración: "minHeight:" }, {

    estilo: "Altura máxima:",
    declaración: "maxHeight:" }, {

    estilo: "Anchura:",
    declaración: "width:" }, {

    estilo: "Anchura mínima:",
    declaración: "minWidth:" }, {

    estilo: "Anchura máxima:",
    declaración: "maxWidth:" }, {
    /*
    | #Holgura Holgura
    -----------
    - Holgura -
    -----------
    */
    estilo: "Holgura:",
    declaración: "padding:" }, {

    estilo: "Holgura izquierda:",
    declaración: "paddingLeft:" }, {

    estilo: "Holgura derecha:",
    declaración: "paddingRight:" }, {

    estilo: "Holgura superior:",
    declaración: "paddingTop:" }, {

    estilo: "Holgura inferior:",
    declaración: "paddingBottom:" }, {
    /*
    | #Margen Margen
    ----------
    - Margen -
    ----------
    */
    estilo: "Margen:",
    declaración: "margin:" }, {

    estilo: "Margen superior:",
    declaración: "marginTop:" }, {

    estilo: "Margen inferior:",
    declaración: "marginBottom:" }, {

    estilo: "Margen izquierdo:",
    declaración: "marginLeft:" }, {

    estilo: "Margen derecho:",
    declaración: "marginRight:" }, {
    /*
    | #Contorno Contorno
    ------------
    - Contorno -
    ------------
    */
    estilo: "Tipo de contorno:",
    declaración: "outlineStyle:" }, {

    estilo: "Color del contorno:",
    declaración: "outlineColor:" }, {

    estilo: "Grosor del contorno:",
    declaración: "outlineWidth:" }, {

    estilo: "Distancia entre el elemento y su contorno:",
    declaración: "outlineOffset:" }, {
    /*
    | #Redondeo_de_las_esquinas Redondeo de las esquinas
    ----------------------------
    - Redondeo de las esquinas -
    ----------------------------
    */
    estilo: "Redondeo de las esquinas:",
    declaración: "borderRadius:" }, {
    /*
    | #Distribución_de_los_hijos Distribución de los hijos
    -----------------------------
    - Distribución de los hijos -
    -----------------------------
    */
    estilo: "Eje principal: Horizontal.",
    declaración: "display: \"flex\", flexDirection: \"row\"" }, {

    estilo: "Eje principal: Vertical.",
    declaración: "display: \"flex\", flexDirection: \"column\"" }, {

    estilo: "Distribución sobre el eje principal: Al inicio.",
    declaración: "justifyContent: \"start\"" }, {

    estilo: "Distribución sobre el eje principal: Al centro.",
    declaración: "justifyContent: \"center\"" }, {

    estilo: "Distribución sobre el eje principal: Al final.",
    declaración: "justifyContent: \"end\"" }, {

    estilo: "Distribución sobre el eje principal: De extremo a extremo.",
    declaración: "justifyContent: \"space-between\"" }, {

    estilo: "Distribución sobre el eje principal: De extremo a extremo, con el espacio en los extremos siendo la mitad que el espacio entre los hijos.",
    declaración: "justifyContent: \"space-around\"" }, {

    estilo: "Distribución sobre el eje principal: De extremo a extremo, sin espacio en los extremos.",
    declaración: "justifyContent: \"space-evenly\"" }, {

    estilo: "Distribución sobre el eje transversal: Al inicio.",
    declaración: "alignItems: \"start\"" }, {

    estilo: "Distribución sobre el eje transversal: Al centro.",
    declaración: "alignItems: \"center\"" }, {

    estilo: "Distribución sobre el eje transversal: Al final.",
    declaración: "alignItems: \"end\"" }, {

    estilo: "Distribución sobre el eje transversal: De extremo a extremo.",
    declaración: "alignItems: \"stretch\"" }, {
    /*
    | #Factor_de_contracción_y_expansión Factor de contracción y expansión
    -------------------------------------
    - Factor de contracción y expansión -
    -------------------------------------
    */
    estilo: "Factor de expansión en el espacio sobrante:",
    declaración: "flexGrow:" }, {

    estilo: "Factor de contracción por espacio faltante:",
    declaración: "flexShrink:" }, {
    /*
    | #Dibujar Dibujar
    -----------
    - Dibujar -
    -----------
    */
    estilo: "Dibujar: Sí.",
    declaración: "display: \"flex\"" }, {

    estilo: "Dibujar: No.",
    declaración: "display: \"none\"" }, {
    /*
    | #Espacio_entre_los_hijos Espacio entre los hijos
    ---------------------------
    - Espacio entre los hijos -
    ---------------------------
    */
    estilo: "Espacio entre los hijos:",
    declaración: "gap:" }, {
    /*
    | #Ubicación Ubicación
    -------------
    - Ubicación -
    -------------
    */
    estilo: "Ubicación: Con espacio reservado, en su espacio reservado.",
    declaración: "position: \"static\"" }, {

    estilo: "Ubicación: Con espacio reservado, relativa a su espacio reservado.",
    declaración: "position: \"relative\"" }, {

    estilo: "Ubicación: Sin espacio reservado, relativa a su ancestro con ubicación relativa más cercano.",
    declaración: "position: \"absolute\"" }, {

    estilo: "Ubicación: Sin espacio reservado, relativa a la ventana de dibujo.",
    declaración: "position: \"fixed\"" }, {

    estilo: "Ubicación: Con espacio reservado, relativa a su espacio reservado y a la ventana de dibujo.",
    declaración: "position: \"sticky\"" }, {
    /*
    | #Área Área
    --------
    - Área -
    --------
    */
    estilo: "Área: La de su ancestro con ubicación relativa más cercano.",
    declaración: "left: \"0\", right: \"0\", top: \"0\", bottom: \"0\"" }, {
    /*
    | #Espacio_entre_los_lados_del_elemento_y_los_lados_de_su_espacio_reservado_o_su_ancestro_con_ubicación_relativa_más_cercano Espacio entre los lados del elemento y<br/>los lados de su espacio reservado o su<br/>ancestro con ubicación relativa más cercano
    -------------------------------------------------------------------------------------------------------------------------------------
    - Ubicación de los lados del elemento relativa a los lados de su espacio reservado o su ancestro con ubicación relativa más cercano -
    -------------------------------------------------------------------------------------------------------------------------------------
    */
    estilo: "Ubicación del lado superior del elemento relativa al lado superior de su espacio reservado o su ancestro con ubicación relativa más cercano:",
    declaración: "top:" }, {

    estilo: "Ubicación del lado inferior del elemento relativa al lado inferior de su espacio reservado o su ancestro con ubicación relativa más cercano:",
    declaración: "bottom:" }, {

    estilo: "Ubicación del lado izquierdo del elemento relativa al lado izquierdo de su espacio reservado o su ancestro con ubicación relativa más cercano:",
    declaración: "left:" }, {

    estilo: "Ubicación del lado derecho del elemento relativa al lado derecho de su espacio reservado o su ancestro con ubicación relativa más cercano:",
    declaración: "right:" } ]
