// Block 1 only 0 province ================
var Case1 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
            <center style="font-size: 3vw; font-family: 'Segoe UI', san-serif;">No results</center>
        </div>
    </div>
`;
// Block 1 only 1 province =================
var Case2 = `
    <div>
        <div id="result--GeoData" class="result--GeoData">
            <ul>
                <li>Country: {{ shapefile[0].A }} </li>
                <li>Province: {{ shapefile[0].B }} </li>
                <li>City/District: {{ shapefile[0].C }} </li>
                <li>License: {{ shapefile[0].D }} </li>
                <li>Describe: {{ shapefile[0].E }} </li>
                <li>Attachment: <a :href="shapefile[0].G">Download</a> <i class="fa fa-download"></i> </li>
            </ul>
        </div>
        <div class="result--Depict">
            <center>
                <iframe :src="shapefile[0].F" class="depictImage"></iframe>
                <br>
                <label for="depictImage" style="font-size:0.8vw; font-family: 'Segoe UI', san-serif;">Depicted image</label>
                <br>
                <br>
            </center>
        </div>
    </div>
`;
// Block 1 more than 2 provinces ===========
var Case3 = `
    <div>
        <div id="result--GeoData" class="result--GeoData" v-for="item in shapefile">
            <ul>
                <li>Country: {{ item.A }} </li>
                <li>Province: {{ item.B }} </li>
                <li>City/District: {{ item.C }} </li>
                <li>License: {{ item.D }} </li>
                <li>Describe: {{ item.E }} </li>
                <li>Attachment: <a :href="item.G">Download</a> <i class="fa fa-download"></i> </li>
            </ul>

            <center>
                <iframe name="depictImage" :src="item.F" class="depictImage" alt="Depict image from Google map"></iframe>
                <br>
                <label for="depictImage" style="font-size:0.8vw; font-family: 'Segoe UI', san-serif;">Depicted image</label>
                <br>
                <br>
            </center>
            <hr>
        </div>
    </div>
`;
              