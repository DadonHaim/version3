import { Choice, Container, Copyright, Name, Footer,  GuestRegister,GuestHome, GuestLogin,  Header, HeaderBackground, Menu,FooterBackground, useSelector, Main } from "../../importAll";


export default function Guest(props:IGuestProps){
    let subPage  = useSelector<any,any>(store=>store.subPage)
    let mainPage = useSelector<IStore,any>(store=>store.mainPage)

    if(mainPage != "Guest") 
        return <>אין לך גישה </>
    else
        return(
            <Container Grid={49} width="110vh" height="90vh" margin="10px auto" border >

                <Header position="1,1|50,5" bgImg={HeaderBackground}> 
                    <Name>שם המשחק</Name>
                </Header>

                <Menu rtl position="1,5|50,11" border>
                    <Choice selected={subPage=="Guest-Home"    } toSubPage="Guest-Home"      value="בית"      />
                    <Choice selected={subPage=="Guest-About"   } toSubPage="Guest-About"     value="אודות"    />
                    <Choice selected={subPage=="Guest-Login"   } toSubPage="Guest-Login"     value="התחברות"  />
                    <Choice selected={subPage=="Guest-Register"} toSubPage="Guest-Register"  value="הרשמה"     />
                    <Choice selected={subPage=="Guest-Guide"   } toSubPage="Guest-Guide"     value="מדריך"    />
                </Menu>

        <Main position="1,11|50,40" Grid={19}>
              {subPage=="Guest-Home"     ? <GuestHome/>     : '' } 
              {subPage=="Guest-About"    ? <GuestHome/>     : '' } 
              {subPage=="Guest-Login"    ? <GuestLogin/>    : '' } 
              {subPage=="Guest-Register" ? <GuestRegister/> : '' } 
              {subPage=="Guest-Guide"    ? <GuestHome/>     : '' }  
        </Main>

                <Footer position="1,41|50,48" bgImg={FooterBackground} border></Footer> 
                <Copyright position="1,48|50,50"/>
            </Container>
        )
}

 
interface IGuestProps{}