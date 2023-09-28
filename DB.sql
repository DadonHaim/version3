CREATE TABLE users (
    "id"            INT IDENTITY(1,1) PRIMARY KEY,
    "username"      VARCHAR(50) NOT NULL UNIQUE,
    "password"      VARCHAR(50) NOT NULL,
    "email"         VARCHAR(150) NOT NULL UNIQUE,
    "firstName"     VARCHAR(50),
    "lastName"      VARCHAR(50),
    "birthday"       VARCHAR(50),
    "registerDate"  DATETIME2 DEFAULT GETDATE(),
    "forgetPass"    VARCHAR(150),
    "banned"        TINYINT DEFAULT 0,
    "freeze"        TINYINT DEFAULT 0,
    "token"         NVARCHAR(MAX)
);

CREATE TABLE global_settings (
    gameName VARCHAR(50),
    "description" NVARCHAR(MAX) DEFAULT 'no description',
    enablePvp TINYINT DEFAULT 0,
    avatarsPerUser INT DEFAULT 3,
    maxUpgrade INT DEFAULT 4
);

CREATE TABLE settings_client(
    "CONTAINER_APP_GRID"            VARCHAR(20),
    "GUEST_HEADER_POSITION"         VARCHAR(20),
    "GUEST_MENU_POSITION"           VARCHAR(20),
    "GUEST_MAIN_POSITION"           VARCHAR(20),
    "GUEST_FOOTER_POSITION"         VARCHAR(20),
    "GUEST_COPYRIGHT_POSITION"      VARCHAR(20),

    "AVATAR_VIEW_GRID"              VARCHAR(20),
    "GIRL_AVATAR_BODY_POSITION"     VARCHAR(20),
    "GIRL_SHIRT_POSITION"           VARCHAR(20),
    "GIRL_SHOES_POSITION"           VARCHAR(20),
    "GIRL_PANTS_POSITION"           VARCHAR(20),
    "BOY_AVATAR_BODY_POSITION"      VARCHAR(20),
    "BOY_SHIRT_POSITION"            VARCHAR(20),
    "BOY_SHOES_POSITION"            VARCHAR(20),
    "BOY_PANTS_POSITION"            VARCHAR(20)
)



CREATE TABLE category_items(
    "id"    INT IDENTITY(1,1) PRIMARY KEY,
    "name"  VARCHAR(50) NOT NULL UNIQUE,
    "ending"  VARCHAR(10) DEFAULT 'png' ,
    "positionGrid"  VARCHAR(20),
    "genderAvatar" VARCHAR(10) DEFAULT 'all'
)



CREATE TABLE rank_settings (
    id INT IDENTITY(1,1) PRIMARY KEY,
    startExp INT NOT NULL UNIQUE,
    hp INT NOT NULL,
    energy INT NOT NULL,
    refillEnergy INT NOT NULL
);

CREATE TABLE categories_items (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    "description" NVARCHAR(MAX) DEFAULT 'no description',
    freeze TINYINT DEFAULT 0
);

CREATE TABLE magics (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    "description" NVARCHAR(MAX) DEFAULT 'no description',
    freeze TINYINT DEFAULT 0
);

CREATE TABLE maps (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    "description" NVARCHAR(MAX) DEFAULT 'no description',
    freeze TINYINT DEFAULT 0
);

CREATE TABLE monsters (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    "description" NVARCHAR(MAX) DEFAULT 'no description',
    freeze TINYINT DEFAULT 0,
    rankPower NVARCHAR(MAX)
);

CREATE TABLE items (
    id                  INT IDENTITY(1,1) PRIMARY KEY,
    "name"              VARCHAR(50) NOT NULL UNIQUE,
    "description"       NVARCHAR(MAX) DEFAULT 'no description',
    freeze              TINYINT DEFAULT 0,
    price               NVARCHAR(MAX),
    color               VARCHAR(10) DEFAULT('none'),
    sale                NVARCHAR(MAX),
    upgrade             NVARCHAR(MAX),
    minAvatarRank INT DEFAULT 1,
    categoryItem        VARCHAR(20),                                     
    magicID             INT,
    "stats"             NVARCHAR(MAX),
    categoryItemID             INT,
    maxUpgrade  INT DEFAULT 3

    FOREIGN KEY (categoryItemID) REFERENCES categories_items(id),
    FOREIGN KEY (magicID) REFERENCES magics(id)
);

CREATE TABLE cards (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    "description" NVARCHAR(MAX) DEFAULT 'no description',
    price NVARCHAR(MAX),
    "move" NVARCHAR(MAX),
    attack NVARCHAR(MAX),
    "delay" INT,
    minAvatarRank INT DEFAULT 1,
    upgrade NVARCHAR(MAX),
    "stats" NVARCHAR(MAX),
    maxUpgrade  INT DEFAULT 3,
    freeze TINYINT DEFAULT 0,
    magicID INT,
    categoryCardID INT
    FOREIGN KEY (categoryCardID) REFERENCES categories_cards(id),
    FOREIGN KEY (magicID) REFERENCES magics(id)
);

CREATE TABLE labyrinths (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL UNIQUE,
    "description" NVARCHAR(MAX) DEFAULT 'no description',
    "data" NVARCHAR(MAX),
    freeze TINYINT DEFAULT 0,
    mapID INT,
    FOREIGN KEY (mapID) REFERENCES maps(id)
);

CREATE TABLE missions (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "description" NVARCHAR(MAX) DEFAULT 'no description',
    freeze TINYINT DEFAULT 0,
    minRank INT,
    difficulty INT,
    goal VARCHAR(50),
    prize NVARCHAR(MAX),
    monsterID INT,
    magicID INT DEFAULT 0,
    labyrinthsID INT,
    FOREIGN KEY (monsterID) REFERENCES monsters(id),
    FOREIGN KEY (labyrinthsID) REFERENCES labyrinths(id)
);

CREATE TABLE levels{
    "id" INT IDENTITY(1,1) PRIMARY KEY,
    "level" INT UNIQUE,
    "startExp" INT,
    "damage" INT,
    "energy" INT,
    "refillEnergy" INT 
    "priceLevenUp" TEXT  


}

CREATE TABLE avatars (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    freeze TINYINT DEFAULT 0,
    exp INT DEFAULT 0,
    silver INT DEFAULT 0,
    gold INT DEFAULT 0,
    redPowder INT DEFAULT 0,
    diamond INT DEFAULT 0,
    createdDate DATETIME2 DEFAULT GETDATE(),
    gender  VARCHAR(10) DEFAULT 'boy',
    mainPage VARCHAR(25) ,
    subPage  VARCHAR(25),
    userID INT,
    missionID INT,
    magicID INT,
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (missionID) REFERENCES missions(id),
    FOREIGN KEY (magicID) REFERENCES magics(id)
);

CREATE TABLE pvp_rooms (
    id INT IDENTITY(1,1) PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "status" VARCHAR(50),
    startDate DATETIME2 DEFAULT GETDATE(),
    endDate DATETIME2 DEFAULT GETDATE(),
    avatarOpenLog NVARCHAR(MAX),
    avatarEnterLog NVARCHAR(MAX),
    avatarOpenID INT,
    avatarEnterID INT,
    avatarWinID INT,
    FOREIGN KEY (avatarOpenID) REFERENCES avatars(id),
    FOREIGN KEY (avatarEnterID) REFERENCES avatars(id),
    FOREIGN KEY (avatarWinID) REFERENCES avatars(id)
);

CREATE TABLE avatars_items (
    id          INT IDENTITY(1,1) PRIMARY KEY,
    rank     INT,
    active      TINYINT DEFAULT 0,
    avatarID    INT,
    itemID      INT,
    FOREIGN KEY (avatarID) REFERENCES avatars(id),
    FOREIGN KEY (itemID) REFERENCES items(id)
);

CREATE TABLE avatars_cards (
    id INT IDENTITY(1,1) PRIMARY KEY,
    rank INT,
    avatarID INT,
    cardID INT,
    FOREIGN KEY (avatarID) REFERENCES avatars(id),
    FOREIGN KEY (cardID) REFERENCES cards(id)
);

CREATE TABLE avatars_monsters (
    id INT IDENTITY(1,1) PRIMARY KEY,
    avatarLog NVARCHAR(MAX),
    monsterLog NVARCHAR(MAX),
    avatarID INT,
    monsterID INT,
    FOREIGN KEY (avatarID) REFERENCES avatars(id),
    FOREIGN KEY (monsterID) REFERENCES monsters(id)
);

CREATE TABLE avatars_labyrinths (
    id INT IDENTITY(1,1) PRIMARY KEY,
    labyrinthData NVARCHAR(MAX),
    activeMissionID INT,
    labyrinthID INT,
    FOREIGN KEY (activeMissionID) REFERENCES missions(id),
    FOREIGN KEY (labyrinthID) REFERENCES labyrinths(id)
);









INSERT INTO avatar_model("name","cols","rows","grid") VALUES('girl',100,500,'100,500')
INSERT INTO categories_items("name","positionGrid") 
VALUES
    ('shirt' ,'25,100|90,200'),
    ('shoes' ,'20,376|84,505'),
    ('pants' ,'30,215|65,300'),
    ('hat'   ,'dd')









Insert INTO users ("username"   ,"password"   ,"email"  ,"firstName"   ,"lastName"   ,"birthday"  )
Values('user1','123123','user1@gmail.com','haim','dadon','17/10/2000')

Insert INTO users ("username"    ,"password"    ,"email"       ,"firstName"   ,"lastName"    ,"birthday"    )
Values ('user2','12345678','user2@gmail.com','yosef','uliel','08/05/2005')

Insert INTO users ("username"    ,"password"    ,"email"       ,"firstName"   ,"lastName"    ,"birthday"    )
Values ('TestTest','TestTest','TestTest','TestTest','TestTest','TestTest')



Insert Into magics ("name","description","freeze")
Values('fire','empty',0)
Insert Into magics ("name","description","freeze")
Values('water','empty',0)
Insert Into magics ("name","description","freeze")
Values('nature','empty',0)




Insert Into avatars ("name","exp","silver","gold","redPowder","diamond","userID","magicID")
Values  ('barakAvatar',0,10,10,10,10,1,1),
        ('avivatar',0,10,10,10,10,2,2),
        ('Memotar',0,10,10,10,10,2,2)

Insert Into items ("name","description", "freeze", "price", "color", "sale", "upgrade", "categoryItem", "magicID")
Values  ('item1','empty',0,'empty','red','empty','empty','123',1),
        ('item2','empty',0,'empty','red','empty','empty','123',1),
        ('item3','empty',0,'empty','red','empty','empty','123',1)


Insert Into avatars_items   ("rank","active","avatarID","itemID")
Values                      (1,0,1,1),
                            (1,1,3,1),
                            (1,0,1,2),
                            (1,1,2,2),
                            (1,1,3,2),
                            (1,1,3,2),
                            (1,1,2,1),
                            (1,1,2,1)


 Insert Into settings_client 
(
    "CONTAINER_APP_GRID",
    "GUEST_HEADER_POSITION",
    "GUEST_MENU_POSITION",
    "GUEST_MAIN_POSITION",
    "GUEST_FOOTER_POSITION",
    "GUEST_COPYRIGHT_POSITION",


    "AVATAR_VIEW_GRID",           
    "GIRL_AVATAR_BODY_POSITION",  
    "GIRL_SHIRT_POSITION",        
    "GIRL_SHOES_POSITION",        
    "GIRL_PANTS_POSITION",        
    "BOY_AVATAR_BODY_POSITION",   
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


    '100,500',      --"AVATAR_VIEW_GRID",           
    '20,25|90,500',      --"GIRL_AVATAR_BODY_POSITION",  
    '25,100|90,200',      --"GIRL_SHIRT_POSITION",        
    '20,376|84,505',      --"GIRL_SHOES_POSITION",        
    '30,215|65,300',      --"GIRL_PANTS_POSITION",        
    ''    ,  --"BOY_AVATAR_BODY_POSITION",   
    ''    ,  --"BOY_SHIRT_POSITION",         
    ''    ,  --"BOY_SHOES_POSITION",         
    ''      --"BOY_PANTS_POSITION"               
)



