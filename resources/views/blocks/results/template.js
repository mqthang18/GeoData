// Block 1 only 0 province ================
var Case1 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
            <center>Location is still unupdated</center>
            <br>
            <center>Or</center>
            <br>
            <center>No results</center>
        </div>
    </div>
`;
// Block 1 only 1 province =================
var Case2 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
            <h6 style="font-size: 16px; 
                background-color: #5f5fe0; 
                color: white; 
                padding: 10px; 
                text-transform: uppercase; 
                font-family: 'Segoe UI',sans-serif;
                margin-bottom: 2px;
                font-weight: 900;
            ">Description information</h6>
            <ul style="padding: 10px;">
            <li>Country: {{ Country }} </li>
            <li>Province: {{ Province[0] }} </li>
            <li v-if="shapefile[0].I!=null">GeoNames: {{ shapefile[0].I }}</li>
            <li v-if="shapefile[0].A != null">City/District: {{ shapefile[0].A }} </li>
            <li v-if="shapefile[0].N != null">License: {{ shapefile[0].N }} </li>
            <li v-if="shapefile[0].E != null">Topic Category: {{ shapefile[0].E }} </li>
            <li v-if="shapefile[0].F != null">Language: {{ shapefile[0].F }}</li>
            <li v-if="shapefile[0].G != null">Use limitations: {{ shapefile[0].G }}</li>
            <li v-if="shapefile[0].J != null">Completeness: {{ shapefile[0].J }}</li>
            <li v-if="shapefile[0].L != null">Responsible party: {{ shapefile[0].L }}</li>
            <li v-if="shapefile[0].M != null">Attributes: {{ shapefile[0].M }}</li>
            <li>Attachment: 
                <a v-if="shapefile[0].B != null" :href="shapefile[0].B">Download <i class="fa fa-download"></i></a> 
                <a v-if="shapefile[0].B == null" :href="shapefile[0].B">None available</a> 
            </li>
            </ul>
        </div>
        <div class="result--Depict">
            <center v-if="Object.keys(polygon).length > 0">
                <div id="map" style="height: 500px;"></div>
                <br>
                <label class="depictImage" for="depictImage" style="color: black;">Depicted image</label>
                <br>
                <br>
            </center>
            <center>
                <h3 v-if="Object.keys(polygon).length == 0" style="line-height: 70px; font-size: 24px;" >Sorry, depicted of image is still not updated.</h3>
            </center>
        </div>
    </div>
`;

