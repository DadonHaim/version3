import { useSelector} from "../../../importAll";

const bgMusic = require("../../../audio/bgMusic.mp3")

export default function MusicEffect(){
        let music = useSelector<IStore,boolean>(store=>store.music)

        if(music)
            return ( 
                <>
                <audio id="bgAudio">
                    <source src={bgMusic} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                </>
            )
        else
            return <></>
}