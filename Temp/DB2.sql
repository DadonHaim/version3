Insert into users
(
 "username"    ,
 "password"    ,
 "email"       ,
 "firstName"   ,
 "lastName"    ,
 "freeze"      
)
Values
('user1','123123','user1@gmail.com' , 'haim','dadon',0),
('user2','123123','user2@gmail.com', 'haim','dadon',0),
('haimsub','123123','haimsub@gmail.com', 'Haim','Dadon',0),
('afik','123123','afik@gmail.com', 'afik','yosef',0),
('temp','123123','temp@gmail.com', 'temp','yosef',1)
------------

Insert into global_settings
(
    "gameName"       ,
    "description"    ,
    "enablePvp"      ,
    "avatarsPerUser" ,
    "maxUpgrade"     
)
Values
('GameProjec' , 'GameProgect',1,5,3)
--------------------------

Insert into settings_client
(
    "CONTAINER_APP_GRID",
    "GUEST_HEADER_POSITION",
    "GUEST_MENU_POSITION",
    "GUEST_MAIN_POSITION",
    "GUEST_FOOTER_POSITION",
    "GUEST_COPYRIGHT_POSITION",
    "AVATAR_VIEW_GRID",           
    "GIRL_AVATAR_BODY_POSITION",  
    "GIRL_HAT_POSITION",        
    "GIRL_SHIRT_POSITION",        
    "GIRL_SHOES_POSITION",        
    "GIRL_PANTS_POSITION",        
    "BOY_AVATAR_BODY_POSITION",   
    "BOY_HAT_POSITION",         
    "BOY_SHIRT_POSITION",         
    "BOY_SHOES_POSITION",         
    "BOY_PANTS_POSITION"       
)
Values
(
    '49,49',             --"CONTAINER_APP_GRID",
    '1,1|50,5',          --"GUEST_HEADER_POSITION",
    '1,5|50,11',         --"GUEST_MENU_POSITION",
    '1,11|50,40',        --"GUEST_MAIN_POSITION",
    '1,41|50,48',        --"GUEST_FOOTER_POSITION",
    '1,48|50,50',        --"GUEST_COPYRIGHT_POSITION",


    '100,500',              --"AVATAR_VIEW_GRID",    
    '20,25|90,500',         --"GIRL_AVATAR_BODY_POSITION",  
    '35,11|65,15'         --GIRL_HAT_POSITION                  
    '25,100|90,200',        --"GIRL_SHIRT_POSITION",        
    '20,376|84,505',        --"GIRL_SHOES_POSITION",        
    '30,215|65,300',        --"GIRL_PANTS_POSITION",        
    ''    ,                 --"BOY_AVATAR_BODY_POSITION",   
    ''    ,                 --"BOY_HAT_POSITION",         
    ''    ,                 --"BOY_SHIRT_POSITION",         
    ''    ,                 --"BOY_SHOES_POSITION",         
    ''                      --"BOY_PANTS_POSITION"       
)
--------------------------
Insert into categories_items
(
    "name"        
)
Values
('weapon'),         
('hat'   ),     
('shirt' ),         
('pants' ),         
('shoes' )   
---------------      
Insert into categories_cards
(
    "name"        
)
Values
('movement'),         
('filling'),     
('attack')    
  
--------------------------
Insert into levels
(
    "level"           ,
    "startExp"     ,
    "hp"           ,
    "energy"       ,
    "refillEnergy" ,
    "priceLevenUp"   

)
Values
(1,0,100,100,15,'{}'),
(2,1000,200,200,20,'{}'),
(3,2500,300,300,25,'{}'),
(4,4000,400,400,30,'{}'),
(5,8000,500,500,35,'{}'),
(6,16000,600,600,40,'{}'),
(7,28000,700,700,45,'{}'),
(8,50000,800,800,50,'{}'),
(9,100000,900,900,55,'{}'),
(10,200000,1000,1000,60,'{}')
--------------------------
Insert into magics
(
    "name"          ,
    "description"   ,
    "freeze"        
)
Values
('fire','fire is good',0),
('nature','nature is good',0),
('water','water is good',0),
('all','all is good',0),
('temp','temp is good',1)
--------------------------
-- Insert into monsters
-- ()
-- Values
-- ()
--------------------------
Insert into items
(
    "id"              ,
    "name"            ,
    "gender"          ,
    "freeze"          ,
    "price"           ,
    "sale"            ,
    "upgrade"         ,
    "minAvatarRank"   ,
    "stats"           ,
    "maxUpgrade"      ,
    "magicName"       ,
    "categoryItemName",
    "startItem" 
)
Values
(1,'hat1','girl',0,'{}','{}','{}',1,'{}',3,'all','hat',1),
(2,'hat2','girl',0,'{}','{}','{}',1,'{}',3,'all','hat',1),
(3,'pants1','girl',0,'{}','{}','{}',1,'{}',3,'all','pants',1),
(4,'pants2','girl',0,'{}','{}','{}',1,'{}',3,'all','pants',1),
(5,'pants3','girl',0,'{}','{}','{}',1,'{}',3,'all','pants',1),
(6,'pants4','girl',0,'{}','{}','{}',1,'{}',3,'all','pants',1),
(7,'shirt1','girl',0,'{}','{}','{}',1,'{}',3,'all','shirt',1),
(8,'shirt2','girl',0,'{}','{}','{}',1,'{}',3,'all','shirt',1),
(9,'shirt3','girl',0,'{}','{}','{}',1,'{}',3,'all','shirt',1),
(10,'shirt4','girl',0,'{}','{}','{}',1,'{}',3,'all','shirt',1),
(11,'shirt5','girl',0,'{}','{}','{}',1,'{}',3,'all','shirt',1),
(12,'shirt6','girl',0,'{}','{}','{}',1,'{}',3,'all','shirt',1),
(13,'shirt7','girl',0,'{}','{}','{}',1,'{}',3,'all','shirt',1),
(14,'shoes1','girl',0,'{}','{}','{}',1,'{}',3,'all','shoes',1),
(15,'shoes2','girl',0,'{}','{}','{}',1,'{}',3,'all','shoes',1),
(16,'shoes3','girl',0,'{}','{}','{}',1,'{}',3,'all','shoes',1),
(17,'shoes4','girl',0,'{}','{}','{}',1,'{}',3,'all','shoes',1)



--------------------------
Insert into avatars
(
    "id"         ,
    "username"   ,
    "name"       ,
    "gender"     ,
    "exp"        ,
    "silver"     ,
    "gold"       ,
    "redPowder"  ,
    "diamond"    ,
    "magicName"  
)
Values
(1,'user1','ava1','girl',0,0,100,100,100,'fire'),
(2,'user1','ava2','girl',1500,0,999,999,999,'water'),
(3,'user1','ava3','boy',500,0,2420,15000,9859,'fire'),


(4,'user2','ava1','girl',0,0,100,100,100,'nature'),
(5,'user2','ava2','girl',1500,0,999,999,999,'water'),
(6,'user2','ava3','boy',500,0,2420,15000,9859,'fire'),

(7,'haimsub','ava1','girl',0,0,100,100,100,'nature'),
(8,'haimsub','ava2','girl',1500,0,999,999,999,'water'),
(9,'haimsub','ava3','boy',500,0,2420,15000,9859,'fire')


--------------------------

Insert into avatars_items
(
    "avatarID",
    "itemID"  ,
    "rank"    ,
    "isActive"  
)
Values
(4,7,1,1)
