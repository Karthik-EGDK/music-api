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


        return res.status(404).json({success:false,error:"song not found"})
        
    } catch (error) {
        console.log(error)
        return res.status(404).json({success:false,error:"song not found"})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})