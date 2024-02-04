import homeMain from "../assets/images/Home_Background.png";
import homeMainMed from "../assets/images/Home_Background_1020.png";
import homeMainSm from "../assets/images/Home_Background_900.png";
import Spring2018 from "../assets/images/2018_Spring_1280.png";
import Spring2018Med from "../assets/images/2018_Spring_1020.png";
import Spring2018Sm from "../assets/images/2018_Spring_900.png";
import Spring2018Ext from "../assets/images/2018_Ext_Spring_1280.png";
import Summer2017 from "../assets/images/2017_Summer_1280.png";
import Summer2017Med from "../assets/images/2017_Summer_1020.png";
import Summer2017Sm from "../assets/images/2017_Summer_900.png";
import Summer2017Ext from "../assets/images/2017_Ext_Summer_1280.png";
import Winter2015 from "../assets/images/2015_Winter_1280.png";
import Winter2015Med from "../assets/images/2015_Winter_1020.png";
import Winter2015Sm from "../assets/images/2015_Winter_900.png";
import Winter2015Ext from "../assets/images/2015_Ext_Winter_1280.png";
import Summer2012 from "../assets/images/2012_Summer_1280.png";
import Summer2012Anim from "../assets/images/2012_Anim_Summer_1280.png";


const projectList = [
    {
        bkgrdLg: homeMain,
        bkgrdMed: homeMainMed,
        bkgrdSm: homeMainSm,
        previews: [
            {
                name: "CURRENT", 
                image: homeMain,
                link: "https://www.youtube.com/watch?v=BtyBjOW8sGY",
                opacity: "rgba(0, 0, 0, 0.3)"
            }
        ]
    },
    {
        bkgrdLg: Spring2018,
        bkgrdMed: Spring2018Med,
        bkgrdSm: Spring2018Sm,
        previews: [
            {
                name: "SPRING 2018", 
                image: Spring2018,
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
        bkgrdLg: Summer2017,
        bkgrdMed: Summer2017Med,
        bkgrdSm: Summer2017Sm,
        previews: [
            {
                name: "SUMMER 2017", 
                image: Summer2017,
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
        bkgrdLg: Winter2015,
        bkgrdMed: Winter2015Med,
        bkgrdSm: Winter2015Sm,
        previews: [
            {
                name: "WINTER 2015", 
                image: Winter2015,
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
        bkgrdLg: Summer2012,
        bkgrdMed: ,
        bkgrdSm: ,
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