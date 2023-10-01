//Client
type MagicNameType = "fire"|"water"|"nature"|"all";
type CategoryItemsType = "hat"|"shirt"|"pants"|"shoes"|"weapon";

type AllGuestPageType   = "Guest-Home"|"Guest-About"|"Guest-Login"|"Guest-Register"|"Guest-Guide";
type AllGamePageType    = "Game-SelectAvatar"|"Game-CreateAvatar";
type AllMainPagesType   = "Guest" | "Game";
type AllSubPagesType    = AllGamePageType|AllGuestPageType;

type ISettings = IGlobalSettings&IClientSettings;

type client = 
    "Start: Give-Me-Settings" |
    "Start: With-Token" |

    //Login:
    "Login: Me" |
    
    //Register
    "Register: Me" |
    
    
    //avatar
    "Avatar: Give-Me-List"|  
    "Avatar: Give-Me-Active-Avatar" | 
    "Avatar: Set-Active-Avatar" | 
    "Avatar: Create" |
    "Avatar: Give-Me-start-Items" |
    "Avatar: Limit?" 
;

type server = 
    "Error" |
    "ForceLogout"|

    "Start: Get-All-Settings" |
    "Token-Valid"|
    "Token-No-Valid"|

    //Login:
    "Login-You"|
    "Login-No-Valid"|
    "Login-You-Are-Already"|

    //Register
    "Register-You"|
    "Register-Not-Valid"|
    
    //avatar
    "Avatar: Get-List"|
    "Avatar: Get-Active-Avatar"|
    "Avatar: Not-Found"|

    //created avatar
    "Avatar: Created"|
    "Avatar: No-Created"|
    "Avatar: Get-Start-Items"|
    "Avatar: Limit-Over"|
    "Avatar: Sub-Limit"|
    ""
; 
