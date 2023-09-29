import {Choice,Container,Copyright,Name,Footer,GuestRegister,GuestHome,GuestLogin,Header,HeaderBackground,Menu,FooterBackground,useSelector, Component, Main} from "../../importAll";
const selectStyle:React.CSSProperties ={backgroundColor:"yellow"}

let _Guest = new Component(()=>{
    console.log("Guest-Component")
    let settings   = useSelector<IStore,ISettings>(store=>store.settings)
    let subPage   = useSelector<IStore,any>(store=>store.subPage)
    return(
        <Container grid={settings.CONTAINER_APP_GRID} width="110vh" height="90vh" margin="10px auto" border >
            <Header position={settings.GUEST_HEADER_POSITION} bgImg={HeaderBackground}> 
                <Name>שם המשחק</Name>
            </Header>

            <Menu rtl position={settings.GUEST_MENU_POSITION} border>
                <Choice selected={subPage=="Guest-Home"    } onSelectedStyle={selectStyle} toSubPage="Guest-Home"      value="בית"      />
                <Choice selected={subPage=="Guest-About"   } onSelectedStyle={selectStyle} toSubPage="Guest-About"     value="אודות"    />
                <Choice selected={subPage=="Guest-Login"   } onSelectedStyle={selectStyle} toSubPage="Guest-Login"     value="התחברות"  />
                <Choice selected={subPage=="Guest-Register"} onSelectedStyle={selectStyle} toSubPage="Guest-Register"  value="הרשמה"     />
                <Choice selected={subPage=="Guest-Guide"   } onSelectedStyle={selectStyle} toSubPage="Guest-Guide"     value="מדריך"    />
            </Menu>

            <Main Empty>
                <GuestHome/>    
                <GuestLogin/>   
                <GuestRegister/>
            </Main>

            <Footer    position={settings.GUEST_FOOTER_POSITION} bgImg={FooterBackground} border></Footer> 
            <Copyright position={settings.GUEST_COPYRIGHT_POSITION}/>
            
        </Container>
    )
})
_Guest.SetLoading(()=><>wait...</>)
let Guest = _Guest.Get({Logout:true, Login:false})
export default Guest;


