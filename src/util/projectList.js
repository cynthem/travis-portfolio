import top1280 from "../assets/images/Home_Background.png";
import top1020 from "../assets/images/Home_Background_1020.png";
import top900 from "../assets/images/Home_Background_900.png";
import top750 from "../assets/images/Home_Background_750.png";
import top600 from "../assets/images/Home_Background_600.png";
import top450 from "../assets/images/Home_Background_450.png";
import Spring2018_1280 from "../assets/images/2018_Spring_1280.png";
import Spring2018_1020 from "../assets/images/2018_Spring_1020.png";
import Spring2018_900 from "../assets/images/2018_Spring_900.png";
import Spring2018_750 from "../assets/images/2018_Spring_750.png";
import Spring2018_600 from "../assets/images/2018_Spring_600.png";
import Spring2018_450 from "../assets/images/2018_Spring_450.png";
import Spring2018Ext from "../assets/images/2018_Ext_Spring_1280.png";
import Summer2017_1280 from "../assets/images/2017_Summer_1280.png";
import Summer2017_1020 from "../assets/images/2017_Summer_1020.png";
import Summer2017_900 from "../assets/images/2017_Summer_900.png";
import Summer2017_750 from "../assets/images/2017_Summer_750.png";
import Summer2017_600 from "../assets/images/2017_Summer_600.png";
import Summer2017_450 from "../assets/images/2017_Summer_450.png";
import Summer2017Ext from "../assets/images/2017_Ext_Summer_1280.png";
import Winter2015_1280 from "../assets/images/2015_Winter_1280.png";
import Winter2015_1020 from "../assets/images/2015_Winter_1020.png";
import Winter2015_900 from "../assets/images/2015_Winter_900.png";
import Winter2015_750 from "../assets/images/2015_Winter_750.png";
import Winter2015_600 from "../assets/images/2015_Winter_600.png";
import Winter2015_450 from "../assets/images/2015_Winter_450.png";
import Winter2015Ext from "../assets/images/2015_Ext_Winter_1280.png";
import Summer2012 from "../assets/images/2012_Summer_1280.png";
import Summer2012Anim from "../assets/images/2012_Anim_Summer_1280.png";


const projectList = [
    {
        bkgrd1280: top1280,
        bkgrd1020: top1020,
        bkgrd900: top900,
        bkgrd750: top750,
        bkgrd600: top600,
        bkgrd450: top450,
        previews: [
            {
                name: "CURRENT", 
                image: top1280,
                link: "https://www.youtube.com/watch?v=BtyBjOW8sGY",
                opacity: "rgba(0, 0, 0, 0.3)"
            }
        ]
    },
    {
        bkgrd1280: Spring2018_1280,
        bkgrd1020: Spring2018_1020,
        bkgrd900: Spring2018_900,
        bkgrd750: Spring2018_750,
        bkgrd600: Spring2018_600,
        bkgrd450: Spring2018_450,
        previews: [
            {
                name: "SPRING 2018", 
                image: Spring2018_1280,
                link: "https://www.youtube.com/watch?v=O5JtTnMiJZI",
                opacity: "rgba(0, 0, 0, 0.3)"
            },
            {
                name: "SPRING 2018 (EXTENDED LOOK)", 
                image: Spring2018Ext,
                link: "https://www.youtube.com/playlist?list=PLU2WZX3219GEsYOhTEvT35yhaSV6RSZiN",
                opacity: "rgba(0, 0, 0, 0.3)"
            }
        ] 
    },
    {
        bkgrd1280: Summer2017_1280,
        bkgrd1020: Summer2017_1020,
        bkgrd900: Summer2017_900,
        bkgrd750: Summer2017_750,
        bkgrd600: Summer2017_600,
        bkgrd450: Summer2017_450,
        previews: [
            {
                name: "SUMMER 2017", 
                image: Summer2017_1280,
                link: "https://www.youtube.com/watch?v=P8-ZbRhBvEw",
                opacity: "rgba(0, 0, 0, 0.3)"
            },
            {
                name: "SUMMER 2017 (EXTENDED LOOK)", 
                image: Summer2017Ext,
                link: "https://www.youtube.com/watch?v=w2MgtpujpFg",
                opacity: "rgba(0, 0, 0, 0.3)"
            }
        ] 
    },
    {
        bkgrd1280: Winter2015_1280,
        bkgrd1020: Winter2015_1020,
        bkgrd900: Winter2015_900,
        bkgrd750: Winter2015_750,
        bkgrd600: Winter2015_600,
        bkgrd450: Winter2015_450,
        previews: [
            {
                name: "WINTER 2015", 
                image: Winter2015_1280,
                link: "https://www.youtube.com/watch?v=hrpg45GefEc",
                opacity: "rgba(0, 0, 0, 0.5)",
            },
            {
                name: "WINTER 2015 (EXTENDED LOOK)", 
                image: Winter2015Ext,
                link: "https://www.youtube.com/watch?v=FzDd-789_AU",
                opacity: "rgba(0, 0, 0, 0)"
            }
        ]
    },
    /*{
        bkgrd1280: Summer2012,
        bkgrd1020: ,
        bkgrd900: ,
        bkgrd750: ,
        bkgrd600: ,
        bkgrd450: ,
        previews: [
            {
                name: "SUMMER 2012", //might need text: "password protected"
                image: Summer2012,
                link: "https://vimeo.com/46781496", //link to private vid
                opacity: "rgba(0, 0, 0, 0.3)"
            },
            {
                name: "SUMMER 2012 (ANIMATION)", 
                image: Summer2012Anim,
                link: "https://vimeo.com/46656578",
                opacity: "rgba(0, 0, 0, 0.6)"
            }
        ]
    }*/
];

export default projectList;