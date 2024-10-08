
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


var sitios = {
"type": "FeatureCollection",
"name": "sitios_j",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "id": 13.0, "x": -66.706694112600005, "y": -23.0709851268, "fna": "Departamento Susques", "nam": "Susques", "NOMBRE_ECO": "Altos Andes", "precipitac": 50.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -66.706694112631453, -23.070985126759865 ] } },
{ "type": "Feature", "properties": { "id": 14.0, "x": -65.959854558299995, "y": -22.892574143600001, "fna": "Departamento Cochinoca", "nam": "Cochinoca", "NOMBRE_ECO": "Puna", "precipitac": 100.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.959854558292946, -22.892574143584426 ] } },
{ "type": "Feature", "properties": { "id": 16.0, "x": -65.131072148100003, "y": -24.3745651835, "fna": "Departamento El Carmen", "nam": "El Carmen", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -65.131072148143772, -24.374565183537747 ] } },
{ "type": "Feature", "properties": { "id": 17.0, "x": -64.744836092100002, "y": -23.786867153799999, "fna": "Departamento Ledesma", "nam": "Ledesma", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -64.744836092101551, -23.786867153797509 ] } },
{ "type": "Feature", "properties": { "id": 18.0, "x": -64.300553518800001, "y": -23.977182082, "fna": "Departamento Santa Bárbara", "nam": "Santa Bárbara", "NOMBRE_ECO": "Selva de las Yungas", "precipitac": 2000.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -64.300553518813942, -23.977182081982612 ] } },
{ "type": "Feature", "properties": { "id": 29.0, "x": -64.853715114099998, "y": -24.2002846699, "fna": "Departamento San Pedro", "nam": "San Pedro", "NOMBRE_ECO": "Chaco Seco", "precipitac": 500.0, "provincia": null }, "geometry": { "type": "Point", "coordinates": [ -64.853715114148031, -24.200284669853581 ] } }
]
}
