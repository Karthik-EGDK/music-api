import express from "express"
import cors from "cors"

const app = express()
const port = 8000

app.use(express.json())

app.use(cors())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.post("/music",(req,res)=>{
    try {
        let {name}=req.body;
        name=name.toLowerCase();

        // ["fearless","blank","help_urself","midnight","shadow lady"]
        if (name==="shadow lady"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712388872/api%20musics/Portawe_-_Shadow_Lady_ultra_slowed_reverb_jxcqul.ogg",
                            musicTitle:"Shadow Lady"
        },
                    {musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712388862/api%20musics/Shadow_Lady_bfobti.ogg",
                    musicTitle:"Shadow Lady Slowed"}]})
        }
        else if(name=="fearless"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712389938/api%20musics/fearless.m4a",
            musicTitle:"Fearless"}]})
        }
        else if(name=="blank"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712389923/api%20musics/blank.m4a",
                            musicTitle:"Blank"
            }]})
        }
        else if(name=="help_urself"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712389476/api%20musics/help_urself.m4a",
                             musicTitle:"Help_Urself"
        }]})
        }
        else if(name=="midnight"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712389485/api%20musics/midnight.m4a",
                             musicTitle:"Midnight"
        }]})
        }
        else if(name=="love dose"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573171/api%20musics/lavisha/Love_Dose_2.0_Remix_-_DJ_Shadow_Dubai_64_PagalWorld.com.cm_usxyxh.mp3",
                             musicTitle:"Love dose 2.0"
        }]})
        }
        else if(name=="kahani suno"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573170/api%20musics/lavisha/Kahani_Suno_64_PagalWorld.com.cm_viglee.mp3",
                             musicTitle:"Kahani Suno"
        }]})
        }

        else if(name=="choli ke peeche"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573169/api%20musics/lavisha/Choli_Ke_Peeche_64_PagalWorld.com.cm_rfqedc.mp3",
                             musicTitle:"Choli ke peeche"
        }]})
        }
        else if(name=="kesariya"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573127/api%20musics/lavisha/Kesariya_64_PagalWorld.com.cm_ni2t0b.mp3",
                             musicTitle:"Kesariya"
        }]})
        }
        else if(name=="gulabi sadi"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573163/api%20musics/lavisha/Gulabi_Sadi_Ani_Lali_Lal_Lal_64_PagalWorld.com.cm_ooqtsi.mp3",
                             musicTitle:"Gulabi sadi"
        }]})
        }
        else if(name=="o mahi"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573163/api%20musics/lavisha/O_Mahi_O_Mahi_64_PagalWorld.com.cm_zwghuv.mp3",
                             musicTitle:"O mahi"
        }]})
        }
        else if(name=="teri baaton mein aisa ulja jiya"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573165/api%20musics/lavisha/Teri_Baaton_Mein_Aisa_Uljha_Jiya_64_PagalWorld.com.cm_deimrv.mp3",
                             musicTitle:"Teri baaton mein aisa ulja jiya"
        }]})
        }
        else if(name=="naina"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573165/api%20musics/lavisha/_Naina_64_PagalWorld.com.cm_rnifqg.mp3",
                             musicTitle:"Naina"
        }]})
        }
        else if(name=="chaleya"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573166/api%20musics/lavisha/Chaleya_64_PagalWorld.com.cm_c6nvsb.mp3",
                             musicTitle:"Chaleya"
        }]})
        }
        else if(name=="yimmy yimmy"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573167/api%20musics/lavisha/Yimmy_Yimmy_64_PagalWorld.com.cm_qy1k3y.mp3",
                             musicTitle:"Yimmy yimmy"
        }]})
        }
        //start
        else if(name=="ma g"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573551/api%20musics/pratham/Ma_G_320_PagalWorld.com.cm_ghqqbf.mp3",
                             musicTitle:"Ma G"
        }]})
        }
        else if(name=="houdini"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573550/api%20musics/pratham/Houdini_320_PagalWorld_tkqe8p.mp3",
                             musicTitle:"Houdini"
        }]})
        }
        else if(name=="khatu shyam"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573538/api%20musics/pratham/Khatu_Shyam_320_PagalWorld.com.cm_sashmm.mp3",
                             musicTitle:"Khatu Shyam!!!!"
        }]})
        }
        else if(name=="ram siyaram"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573530/api%20musics/pratham/_Ram_Siya_Ram_320_PagalWorld.com.cm_hwwicc.mp3",
                             musicTitle:"Ram Siyaram"
        }]})
        }
        else if(name=="made for me"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573522/api%20musics/pratham/Made_For_Me_320_PagalWorld_bn0qty.mp3",
                             musicTitle:"Made for Me"
        }]})
        }
        else if(name=="waste"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573520/api%20musics/pratham/Waste_320_PagalWorld_kxqg0d.mp3",
                             musicTitle:"Waste"
        }]})
        }
        else if(name=="we are in this together"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573517/api%20musics/pratham/We_re_In_This_Together_PagalWorld.com.cm_xdtauu.mp3",
                             musicTitle:"We are in this Together"
        }]})
        }
        else if(name=="dont you hold me back"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573495/api%20musics/pratham/Don_t_You_Hold_Me_Down_320_PagalWorld.com.cm_y9xmqp.mp3",
                             musicTitle:"Dont you hold me back"
        }]})
        }
        else if(name=="angels in tibet"){
            return res.json({success:true,songs:[{musicfile:"https://res.cloudinary.com/dfjqihjz4/video/upload/v1712573487/api%20musics/pratham/Angels_in_Tibet_320_PagalWorld_fddbsa.mp3",
                             musicTitle:"Angels in tibet"
        }]})
        }
      
        
        

        


        return res.status(404).json({success:false,error:"song not found"})
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({success:false,error:"song not found"})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})