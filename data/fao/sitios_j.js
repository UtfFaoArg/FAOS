
var MarkerOptionsSitios = {
    radius: 8,
    fillColor: "#ff7f00",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

// // Contenido del popup para cada feature
function popupContentSitios(feature) {
    return (
        
        "<div id='Estilo3a'>" +
        "<b> Nombre : </b>" + feature.properties.id + "<br>" +
        // "<b> Habitantes (Censo 2010): </b>" + feature.properties.HABITANTES + "<br>" +
        // "<b> Tipo de asentamiento: </b>" + feature.properties.tipo_asent + "<br>" +
        // "<br>" +
        // "<b> <i>Fuente de Información:  </b>  INDEC - Censo 2010<br>" +
        // "<b> Fecha de actualización:  </b> - </i>" +
        "</div>"
    )
};
// Función para generar la leyenda
function createLegendSitios() {
    var legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = [];
        var styles = [
            { label: 'Sitios seleccionados', color: '' },
            { label: ' ', color: '#ff7f00' },
                    
            // Agrega aquí el resto de estilos con su respectiva etiqueta y color
        ];

        // Genera el contenido HTML de la leyenda
        styles.forEach(function (style) {
            labels.push(
                '<i style="background:' + style.color + '"></i> ' + style.label
            );
        });

        div.innerHTML = labels.join('<br>');
        return div;
    };

    // Función para mostrar/ocultar la leyenda
    function toggleLegend() {
        if (map.hasLayer(SitiosSeleccionados)) {
            legend.addTo(map);
        } else {
            legend.remove();
        }
    }
// Eliminar la leyenda al inicio
legend.remove();
    // Escucha el cambio de estado de la capa
    map.on('overlayadd overlayremove', toggleLegend);
}


var sitios = 
{
    "type": "FeatureCollection",
    "name": "pto_priorizados",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "id": 19.0, "x": -62.712407534500002, "y": -22.279349394800001, "fna": "Departamento Rivadavia", "nam": "Rivadavia", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -62.712407534539444, -22.279349394774641 ] } },
    { "type": "Feature", "properties": { "id": 20.0, "x": -63.789162297799997, "y": -22.4959894592, "fna": "Departamento General José de San Martín", "nam": "General José de San Martín", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -63.789162297789098, -22.495989459224621 ] } },
    { "type": "Feature", "properties": { "id": 21.0, "x": -63.751620047599999, "y": -22.229567687900001, "fna": "Departamento General José de San Martín", "nam": "General José de San Martín", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -63.7516200476189, -22.229567687889443 ] } },
    { "type": "Feature", "properties": { "id": 23.0, "x": -64.012638078699993, "y": -24.370216727100001, "fna": "Departamento Anta", "nam": "Anta", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -64.012638078718979, -24.370216727116393 ] } },
    { "type": "Feature", "properties": { "id": 24.0, "x": -66.242309493199997, "y": -25.324611877799999, "fna": "Departamento Molinos", "nam": "Molinos", "NOMBRE_ECO": "Monte de Sierras y Bolsones", "precipitac": 400.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -66.242309493243951, -25.32461187779932 ] } },
    { "type": "Feature", "properties": { "id": 26.0, "x": -62.896447210399998, "y": -23.478998840399999, "fna": "Departamento Rivadavia", "nam": "Rivadavia", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -62.896447210378213, -23.478998840359075 ] } }
    ]
    }
    
