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
            <ul>
            <li>Country: {{ Country }} </li>
            <li>Province: {{ Province }} </li>
            <li>GeoNames: {{ shapefile[0].I }}</li>
            <li>City/District: {{ shapefile[0].A }} </li>
            <li>License: {{ shapefile[0].N }} </li>
            <li>Topic Category: {{ shapefile[0].E }} </li>
            <li>Language: {{ shapefile[0].F }}</li>
            <li>Use limitations: {{ shapefile[0].G }}</li>
            <li>Completeness: {{ shapefile[0].J }}</li>
            <li>Responsible party: {{ shapefile[0].L }}</li>
            <li>Attributes: {{ shapefile[0].M }}</li>
            <li>Attachment: 
                <a v-if="shapefile[0].B != null" :href="shapefile[0].B">Download <i class="fa fa-download"></i></a> 
                <a v-if="shapefile[0].B == null" :href="shapefile[0].B">None available</a> 
            </li>
            </ul>
        </div>
        <div class="result--Depict">
            <center v-if="shapefile[0].C != null">
                <iframe :src="shapefile[0].C" class="depictImage"></iframe>
                <br>
                <label class="depictImage" for="depictImage">Depicted image</label>
                <br>
                <br>
            </center>
            <center>
                <h3 style="line-height: 70px; font-size: 24px;" >Sorry, depicted of image is still not updated.</h3>
            </center>
        </div>
    </div>
`;
// Block 1 more than 2 provinces ===========
var Case3 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
            <ul>
                <li>Country: {{ Country }} </li>
                <li>Province: {{ Province }} </li>
                <li v-if="shapefile[0] != shapefile[pagnigation]">City/District: {{ shapefile[pagnigation].A }} </li>
                <li>License: {{ shapefile[pagnigation].N }} </li>
                <li>Topic Category: {{ shapefile[pagnigation].E }} </li>
                <li>Language: {{ shapefile[pagnigation].F }}</li>
                <li>GeoNames: {{ shapefile[pagnigation].I }}</li>
                <li>Use limitations: {{ shapefile[pagnigation].G }}</li>
                <li>Completeness: {{ shapefile[pagnigation].J }}</li>
                <li>Responsible party: {{ shapefile[pagnigation].L }}</li>
                <li>Attributes: {{ shapefile[pagnigation].M }}</li>
                <li>Attachment:
                    <a v-if="shapefile[pagnigation].B != null" :href="shapefile[pagnigation].B">Download <i class="fa fa-download"></i></a> 
                    <a v-if="shapefile[pagnigation].B == null" :href="shapefile[pagnigation].B">None available</a> 
                </li>
            </ul>

            <center>
                <iframe name="depictImage" :src="shapefile[pagnigation].C" class="depictImage" alt="Depict image from Google map"></iframe>
                <br>
                <label class="depictImage" style="color:black;" for="depictImage">Depicted image</label>
            </center>
            <hr>
        </div>
        <br>
        <div class="pagnigation">
            <button v-if="pivot >= 6" v-on:click="ResetPivot()">
                <i class="fa fa-angle-double-left"></i>
            </button>
            <button class="btn" v-for="item in shapefile" v-if="(shapefile.indexOf(item)>=pivot) & (shapefile.indexOf(item) < pivot + 6)" v-on:click="ChangePageIndex(shapefile.indexOf(item))">
                {{ shapefile.indexOf(item) }}
            </button>
            <button v-if="(shapefile.length > 6) & (pivot < shapefile.length - 6)" v-on:click="AddPivot()">
                <i class="fa fa-angle-double-right"></i>
            </button>
        </div>
    </div>
`;
        