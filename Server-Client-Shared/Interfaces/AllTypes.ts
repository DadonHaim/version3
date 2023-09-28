type MagicNameType = "fire"|"water"|"nature";

type AllGuestPageType   = "Guest-Home"|"Guest-About"|"Guest-Login"|"Guest-Register"|"Guest-Guide";
type AllGamePageType    = "Game-SelectAvatar"|"Game-CreateAvatar";
type AllMainPagesType   = "Guest" | "Game";
type AllSubPagesType    = AllGamePageType|AllGuestPageType;




type client = 
    //start:
    "Start-With-Token"|
    //Login:
    "Login-Me"|
    //Register:
    "Register-Me"|
    "Start-Give-Me-Settings"|
    ""|
    //avatar
    "Avatar-Give-Me-List"|
    "Avatar-Create"|
    ""|
    ""|
    ""|
    ""| 
    ""|
    ""|
    ""|
    ""|
    "" 
;
type server = 
    //start:
    "Start-Token-Valid"|
    "Start-Token-No-Valid"|
    //Login:
    "Login-You"|
    "Login-No-Valid"|
    "Login-You-Are-Already"|
    //Register
    "Register-You"|
    "Register-Not-Valid"|
    ""|
    //avatar
    "Avatar-Get-List"|
    ""|
    "Start-Get-Settings"|
    "ForceLogout"|
    "Avatar-No-Creative-Limit-Max"|
    ""|
    ""|
    ""
; 