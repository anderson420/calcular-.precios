let articulos = [];
let total = 0;
function sacar_precios() {
    total = 0;
    articulos = [];
    const regex = /•\s([^$]+)\s\$([\d,]+(?:\.\d{1,3})?)/g;
    let match;
    let texto = document.getElementById("texto").value;
    document.getElementById("texto").value = "";
    console.log(texto);
    while ((match = regex.exec(texto)) !== null) {
        const nombreArticulo = match[1].trim();
        const valorNumerico = parseFloat(match[2].replace(/\$|,|\./g, '').replace(/\n/g, ''));
        
        articulos.push({
            nombre: nombreArticulo,
            valor: valorNumerico
        });
    }
    total  = articulos.reduce( (a,b) => a+b.valor,0);
    
    console.log(articulos,total);
    document.getElementById("mytable").style.display = 'block';
    mostrar();
}

function mostrar(){
    let tableBody = document.getElementById("cuerpo");
    articulos.map(articulo=>{
        var tr = document.createElement('TR');
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(articulo.nombre));
        tr.appendChild(td)
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(articulo.valor));
        tr.appendChild(td)
        tableBody.appendChild(tr);
    })
    document.getElementById("total").value = total;
}

let texto=`• SHEIN BAE Vestido ajustado tubo con estampado fruncido lateral verde talla S $54.400
sz2308282698171937

• SHEIN ICON Top halter neón naranja fruncido de espalda abierta con cordón bajo hanky de malla naranja talla xs $17.000
sw2112306263051112

• SHEIN ICON Top halter con tira cruzada de espalda abierta con cordón ribete en forma de lechuga bajo con abertura negro talla xs $26.300
sz2303234959749851

• SHEIN PETITE Body de tirantes unicolor fruncido blanco talla s $26.200
sw2212143285085508


• SHEIN EZwear Camisa Blanca Para Mujer De Tela Tejida Con Botones talla S $26.200
sw2211143053322390

• SHEIN Yoga Basic 2 piezas Shorts deportivos unicolor fruncido talla xs gris y lila $46.600
st2308266755757744

• SHEIN Qutie Top halter pecho con fruncido ribete en forma de lechuga bajo pañuelo de espalda abierta con cordón rosa talla xs $18.600
sw2212222027697266

• Vestido cover up con abertura sin bikini $20.500
sw2212096973956046`

