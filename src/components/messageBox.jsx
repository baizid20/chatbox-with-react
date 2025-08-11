import Chatbar from "./chatbar"
// chat array object
const chats = [
    {
        id: 1,
        name:'Rakibul Islam Alif',
        text : "Be yourself; everyone else is already taken.",
        Img: 'https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/480827783_616595857673315_6885633448181375542_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGscGLuFQy3sE1K6_oJbX93dEOjP7Fx4Qp0Q6M_sXHhCi5_8Ijo-O8oeWM_a3y3oeeuht9_yqPL69ZwAv3yWA7r&_nc_ohc=cvXdt1OCk38Q7kNvwE8Mulo&_nc_oc=AdkpxzBp5pWifRjyS_C1dGJrxNI0rx7VoO3OBmnFxjwlx9pnLTSH51UQvC4DG5tiQQM&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=336nVxpPpiMaMpS3I29e1g&oh=00_AfWkHAdwmpU2QEh9xkxISpT5VKSEmCa9HZwEhDqy257tZQ&oe=689FDBE5'
    },
    {
        id: 2,
        name:'Khalid Saifullah Alif',
        text : "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        Img: 'https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/527821586_1475743610277992_4835280913983592980_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGq62Ub8zvtxQ_Ktd6QwkzhB-daDKc0wqIH51oMpzTCoor3NGta-KZkNv6qlBckzLPJDLK8zdwvvvVvjPmDnCO3&_nc_ohc=QVmm5VSLHfQQ7kNvwF6VTrH&_nc_oc=AdnI5OT4bKUS8121Hz22zmPFNVH1Rghvvh1n_waQXVivep26RfvpZCON9gbAxugiygs&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=XmSMADY9AYfFpLCfSiqd2A&oh=00_AfVYVbdWiM4wP4QUlP6txgFVR-eNMC2z2I554vj-FjZ1Sg&oe=689FD095'
    },
    {
        id: 3,
        name:'Anonto Opu',
        text : "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        Img: 'https://wallpapers.com/images/high/man-pictures-37xpt76vryisbhvt.webp'
    },
    {
        id: 4,
        name:'Rohima Islam Bithe',
        text : "Push your boundaries, that's what they're there for",
        Img: 'https://img.freepik.com/premium-photo/muslim-mother-hugging-her-son-cartoon-white-background-by-ai-generated_990473-93.jpg?w=1060'
    },
    {
        id: 5,
        name:'Tariqul Islam',
        text : "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        Img: 'https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/471996724_122139733412447081_6399229228797894187_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGitrw6sGVsDIjbo-fMIpUBzhwDJyDjB2jOHAMnIOMHaMOMYw6Ia-1x3CgvS632b-UYM4av9g-T9RVRdtksLVNF&_nc_ohc=T7m7PKaiVBgQ7kNvwEJtDny&_nc_oc=AdnB7LmyyHU8EUlVNbdoPN9U49GcE0mLinnLqcOxAT5ru5VsBm5m3MznTBsFlyJqvM0&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=bOlkh9GxCSMBK2gGuuGl5w&oh=00_AfUOH_Qz0Wy_cq9-9Tg7bibVlBqLsXpPxCYJem1bhNY8Yw&oe=689FF32C'
    },
    {
        id: 6,
        name:'Baizidul Islam Rupom',
        text : "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        Img: 'https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/522405226_2276796606128392_7210091730277385083_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGD1tkvpxVUd2zpH-AA7CtSyRrYfPnxO-fJGth8-fE756JIND8JQTC18RjNdzynliV6h9J2x08rdmoPC4apa4AV&_nc_ohc=Uvwgrrp7i9YQ7kNvwEPobuj&_nc_oc=Adkjr5VBt-vd6hdeqFwO0K0aYia8MAqcdMKpY_Kwn5vaWhU6vwHOYQ8pki_ImPTqArc&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=MAXwO3f_rDz7GKfIZ2wZPg&oh=00_AfWxTlIx0WUm0SmPlMRFoBaN4qfOFanAJSMhIATPZmeNEg&oe=689FCCBA'
    },
]


function MessageBox () {
    return (
       <ul>
       {
       chats.map((chat => {
        return(
             <li key={chat.id}>
        <Chatbar name={chat.name} text={chat.text} imgUrl={chat.Img}></Chatbar>
      </li>
        )
       
     
       }) )
       }
       </ul>
    )
}


export default MessageBox