function LaTex(code) {
    return `https://latex.codecogs.com/svg.image?\\LARGE&space;${code}`;
}

let dbQuestions = [
    
    {
        //"cathegory":"Art and literature",
        question:"",
        help: "Math books",
        imgHelp: "https://i.pinimg.com/736x/d9/8f/1a/d98f1aa604b49a3e10a422321da08768.jpg",
        images:LaTex(`\\int x dx`),
        answer:"1/2x2",
        badanswers : ["A","B","C"],        
    },
    {
        //"cathegory":"Art and literature",
        question:"How paint the Mona Lisa?",
        help: "That person also painted \"the last supper\"",
        imgHelp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3ydoI4NVb0iVXSzR-5nzK5zOoeMWjXioJw&usqp=CAU",
        images:"https://historia.nationalgeographic.com.es/medio/2018/06/11/01-mona-lisa-marco-gioconda-louvre_2d7f91a1.jpg",
        answer:"Leonardo daVinci",
        badanswers : ["Miguel Angel","Anguissola","Picasso"],        
    },
    {
        //"cathegory":"Art and literature",
        question:"Por que Marco Aurelio escribio Meditaciones?",
        help: "Know thyself is the beginning to wisdom ~ Socrates",
        imgHelp: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Marcus_Aurelius_Metropolitan_Museum.png/200px-Marcus_Aurelius_Metropolitan_Museum.png",
        images:"https://www.elejandria.com/covers/Las_meditaciones_de_Marco_Aurelio-Marco_Aurelio-md.png",
        answer:"Para si mismo como reflexion diaria",
        badanswers : ["Como una guia para sus hijos","Por ser una guia para proximos emperadores","Por ser la vitacora de todo emperador"],        
    },
    {
        //"cathegory":"Art and literature",
        question:"Que origen tiene el Archipielago de Colon?",
        help: "???",
        imgHelp: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Marcus_Aurelius_Metropolitan_Museum.png/200px-Marcus_Aurelius_Metropolitan_Museum.png",
        images:"https://www.elejandria.com/covers/Las_meditaciones_de_Marco_Aurelio-Marco_Aurelio-md.png",
        answer:"Es de origen volcanico",
        badanswers : ["Es de origen petreo","Es de origen mineral","Es de origen terreo"],        
    },
];