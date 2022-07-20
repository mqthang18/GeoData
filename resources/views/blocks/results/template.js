// Block 1 only 0 province ================
var Case1 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
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
                <li>City/District: {{ shapefile[0].A }} </li>
                <li>License: {{ shapefile[0].O }} </li>
                <li>Describe: {{ shapefile[0].E }} </li>
                <li>Attachment: <a :href="shapefile[0].B">Download</a> <i class="fa fa-download"></i> </li>
            </ul>
        </div>
        <div class="result--Depict">
            <center>
                <iframe :src="shapefile[0].C" class="depictImage"></iframe>
                <br>
                <label class="depictImage" for="depictImage">Depicted image</label>
                <br>
                <br>
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
                <li>City/District: {{ shapefile[pagnigation].A }} </li>
                <li>License: {{ shapefile[pagnigation].O }} </li>
                <li>Describe: {{ shapefile[pagnigation].E }} </li>
                <li>Attachment: <a :href="shapefile[pagnigation].B">Download</a> <i class="fa fa-download"></i> </li>
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
            <button v-for="item in shapefile" v-if="shapefile.indexOf(item)>=pivot & shapefile.indexOf(item) < pivot + 6 " v-on:click="ChangePageIndex(shapefile.indexOf(item))">
                {{ shapefile.indexOf(item) }}
            </button>
            <button v-if="(shapefile.length > 6) & (pivot < shapefile.length - 6)" v-on:click="AddPivot()">
                <i class="fa fa-angle-double-right"></i>
            </button>
        </div>
    </div>
`;
        