import { Choice, Container, Copyright, Flex, Footer,  GuestRegister,GuestHome, GuestLogin,  Header, HeaderBackground, Menu, myStore ,FooterBackground, useSelector } from "../../importAll";


export default function Guest(props:IGuestProps){
    let subPage = useSelector<any,any>(store=>store.subPage)
    let mainPage = useSelector<IStore,any>(store=>store.mainPage)

    if(mainPage != "Guest") return <>אין לך גישה </>
    return(
        <Container Grid className="Guest" width="110vh" height="90vh" rows={49} columns={49}  margin="10px auto"  marginTop={10} border >
            
            <Header start="1,1" end="50,5" bgImg={HeaderBackground}> 
                <Flex className="fill XYcenter">שם המשחק</Flex>
            </Header>

            <Menu start="1,5" end="50,11" border rtl>
                <Choice selected={subPage=="Guest-Home"    } toSubPage="Guest-Home"      value="בית"      />
                <Choice selected={subPage=="Guest-About"   } toSubPage="Guest-About"     value="אודות"    />
                <Choice selected={subPage=="Guest-Login"   } toSubPage="Guest-Login"     value="התחברות"  />
                <Choice selected={subPage=="Guest-Register"} toSubPage="Guest-Register"  value="הרשמה"     />
                <Choice selected={subPage=="Guest-Guide"   } toSubPage="Guest-Guide"     value="מדריך"    />
            </Menu>

        
          {subPage=="Guest-Home"     ? <GuestHome/> : '' } 
          {subPage=="Guest-About"    ? <GuestHome/> : '' } 
          {subPage=="Guest-Login"    ? <GuestLogin/> : ''} 
          {subPage=="Guest-Register" ? <GuestRegister/> : '' } 
          {subPage=="Guest-Guide"    ? <GuestHome/> : '' }  

            <Footer Grid start="1,41" end="50,48" border bgImg={FooterBackground}></Footer> 
            <Copyright className="Guest-Copyright" value="" start="1,48" end="50,50" border/>
        </Container>
    )
}
 
interface IGuestProps{

}