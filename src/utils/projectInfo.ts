interface IProject {
    name: string;
    images: string[];
    description: string;
    technology: string;
    youTubeVideoId?: string;
    demoUrl?: string;
    githubUrl?: string;
    isHaveSource: boolean;
}

const DATA = [
    "https://boostlikes-bc85.kxcdn.com/blog/wp-content/uploads/2017/06/Automatically-Message-Facebook-Fans.jpg",
    "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios12-iphone-x-messages-send-photo-from-camera.jpg",
    "https://resources.workable.com/wp-content/uploads/2017/03/Recruiting-via-text-message.png"
]

const Instacop: IProject = {
    name: "Instacop",
    images: DATA,
    description: "Product ordering system for clothes shop.",
    technology: "Flutter - Dart, Firebase, Stripe.",
    isHaveSource: true,
    youTubeVideoId: "H8aGcukJyn4",
    demoUrl: "https://www.youtube.com/watch?v=H8aGcukJyn4",
    githubUrl: "https://github.com/NamNguyen1606/Instacop",
}

const Apollo: IProject = {
    name: "Apollo",
    images: DATA,
    description: "Product ordering system for ebook shop",
    technology: "React Native - TypeScript",
    isHaveSource: true,
    youTubeVideoId: "zS1GWKC9dfw",
    demoUrl: "https://youtu.be/zS1GWKC9dfw",
    githubUrl: "https://github.com/NamNguyen1606/Apollo-Ebook-App",
}

const FlashChat: IProject = {
    name: "FlashChat",
    images: DATA,
    description: "An app for group chat",
    technology: "Flutter - Dart, Firebase,",
    isHaveSource: true,
    youTubeVideoId: "EAY41D2-XNk",
    demoUrl: "https://www.youtube.com/watch?v=EAY41D2-XNk",
    githubUrl: "https://github.com/NamNguyen1606/Flutter-Chat", 
}

const ChatServiceMobile: IProject = {
    name: "FlashChat",
    images: DATA,
    description: "An app help customer can create group chat room and personal chat room",
    technology: "React Native, ReactJS, NodeJs, Express, Socket.io, MongoDB, CosmosDB.",
    isHaveSource: true,
    youTubeVideoId: "",
    demoUrl: "",
    githubUrl: "",
}

const ChatServiceWebsite: IProject = {
    name: "FlashChat",
    images: DATA,
    description: "An app help customer can create group chat room and personal chat room",
    technology: "ReactJS, NodeJs, Express, Socket.io, MongoDB, CosmosDB.",
    isHaveSource: true,
    youTubeVideoId: "",
    demoUrl: "",
    githubUrl: "",
}

const ProjectData: IProject[] = [
    Instacop,
    Apollo,
    FlashChat,
    ChatServiceMobile,
    ChatServiceWebsite
];

export default ProjectData;