
// chatbar array object : 






function Chatbar ({name,text,imgUrl}) {
    return (
        <>
       
   <div>
    <img className="w-20" src={imgUrl} alt={text} />
   </div>
   <p>{name}</p>
   <p>{text}</p>
   <div>
    <p>Bell</p>
   </div>
   </>
    )
}
export default Chatbar