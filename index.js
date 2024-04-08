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
        


        return res.status(404).json({success:false,error:"song not found"})
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({success:false,error:"song not found"})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})