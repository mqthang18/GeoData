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
            <center v-if="shapefile[0].C != null">
                <iframe :src="shapefile[0].C" class="depictImage"></iframe>
                <br>
                <label class="depictImage" for="depictImage" style="color: black;">Depicted image</label>
                <br>
                <br>
            </center>
            <center>
                <h3 v-if="shapefile[0].C == null" style="line-height: 70px; font-size: 24px;" >Sorry, depicted of image is still not updated.</h3>
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
                <li v-if="shapefile[pagnigation].N != null">License: {{ shapefile[pagnigation].N }} </li>
                <li v-if="shapefile[pagnigation].E != null">Topic Category: {{ shapefile[pagnigation].E }} </li>
                <li v-if="shapefile[pagnigation].F != null">Language: {{ shapefile[pagnigation].F }}</li>
                <li v-if="shapefile[pagnigation].I != null">GeoNames: {{ shapefile[pagnigation].I }}</li>
                <li v-if="shapefile[pagnigation].G != null">Use limitations: {{ shapefile[pagnigation].G }}</li>
                <li v-if="shapefile[pagnigation].J != null">Completeness: {{ shapefile[pagnigation].J }}</li>
                <li v-if="shapefile[pagnigation].L != null">Responsible party: {{ shapefile[pagnigation].L }}</li>
                <li v-if="shapefile[pagnigation].M != null">Attributes: {{ shapefile[pagnigation].M }}</li>
                <li>Attachment:
                    <a v-if="shapefile[pagnigation].B != null" :href="shapefile[pagnigation].B">Download <i class="fa fa-download"></i></a> 
                    <a v-if="shapefile[pagnigation].B == null" :href="shapefile[pagnigation].B">None available</a> 
                </li>
            </ul>

            <center v-if="shapefile[pagnigation].C != null">
                <iframe name="depictImage" :src="shapefile[pagnigation].C" class="depictImage" alt="Depict image from Google map"></iframe>
                <br>
                <label class="depictImage" style="color:black;" for="depictImage">Depicted image</label>
            </center>
            <center>
                <h3 v-if="shapefile[pagnigation].C == null" style="line-height: 70px; font-size: 24px;">Sorry, depicted of image is still not updated.</h3>
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
        