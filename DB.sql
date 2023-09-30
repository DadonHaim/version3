CREATE TABLE users (
    "id"            INT IDENTITY(1,1) UNIQUE,
    "username"      VARCHAR(50)  PRIMARY KEY,
    "password"      VARCHAR(50)  NOT NULL,
    "email"         VARCHAR(150) NOT NULL UNIQUE,
    "firstName"     VARCHAR(50),
    "lastName"      VARCHAR(50),
    "birthday"      VARCHAR(50),
    "registerDate"  DATETIME2 DEFAULT GETDATE(),
    "forgetPass"    VARCHAR(150),
    "banned"        TINYINT DEFAULT 0,
    "freeze"        TINYINT DEFAULT 0,
    "token"         NVARCHAR(MAX)
);

CREATE TABLE global_settings (
    "gameName"        VARCHAR(50),
    "description"     NVARCHAR(MAX) DEFAULT 'no description',
    "enablePvp"       TINYINT DEFAULT 0,
    "avatarsPerUser"  INT DEFAULT 3,
    "maxUpgrade"      INT DEFAULT 4
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


CREATE TABLE levels(
    "level"        INT PRIMARY KEY,
    "startExp"     INT,
    "hp"           INT,
    "energy"       INT,
    "refillEnergy" INT ,
    "prizeLevenUp" TEXT  
)

CREATE TABLE categories_items (
    "name"          VARCHAR(50) PRIMARY KEY,
    "description"   NVARCHAR(MAX) DEFAULT 'no description',
    "freeze"        TINYINT DEFAULT 0
);

CREATE TABLE categories_cards (
    "name"          VARCHAR(50) PRIMARY KEY,
    "description"   NVARCHAR(MAX) DEFAULT 'no description',
    "freeze"        TINYINT DEFAULT 0
);

CREATE TABLE magics (
    "name"          VARCHAR(50) PRIMARY KEY,
    "description"   NVARCHAR(MAX) DEFAULT 'no description',
    "freeze"        TINYINT DEFAULT 0
);

-- CREATE TABLE maps (
--     "id"             INT PRIMARY KEY,
--     "name"           VARCHAR(50) NOT NULL UNIQUE,
--     "description"    NVARCHAR(MAX) DEFAULT 'no description',
--     "logoName"       VARCHAR(50)   DEFAULT 'none',
--     "iconName"       VARCHAR(50)  DEFAULT 'none',
--     "backgroundName" VARCHAR(50) DEFAULT 'none',
--     "freeze"         TINYINT DEFAULT 0
-- );

-- CREATE TABLE monsters (
--     "id"              INT PRIMARY KEY,
--     "name"            VARCHAR(50) NOT NULL UNIQUE,
--     "description"     NVARCHAR(MAX) DEFAULT 'no description',
--     "freeze"          TINYINT DEFAULT 0,
--     "rankPower"       NVARCHAR(MAX)
-- );

CREATE TABLE items (
    "id"                INT  PRIMARY KEY,
    "name"              VARCHAR(50) NOT NULL UNIQUE,
    "description"       NVARCHAR(MAX) DEFAULT 'no description',
    "gender"            VARCHAR(10),                                     
    "freeze"            TINYINT DEFAULT 0,
    "price"             NVARCHAR(MAX),
    "sale"              NVARCHAR(MAX),
    "upgrade"           NVARCHAR(MAX),
    "minAvatarRank"     INT DEFAULT 1,
    "startItem"         TINYINT DEFAULT 0,
    "stats"             NVARCHAR(MAX),
    "maxUpgrade"        INT DEFAULT 3,
    "magicName"         VARCHAR(50),
    "categoryItemName"  VARCHAR(50)

    FOREIGN KEY (categoryItemName) REFERENCES categories_items("name"),
    FOREIGN KEY (magicName)        REFERENCES magics("name")
);

-- CREATE TABLE cards (
--     "id"               INT IDENTITY(1,1) PRIMARY KEY,
--     "name"             VARCHAR(50) NOT NULL UNIQUE,
--     "description"      NVARCHAR(MAX) DEFAULT 'no description',
--     "price"            NVARCHAR(MAX),
--     "move"             NVARCHAR(MAX),
--     "attack"           NVARCHAR(MAX),
--     "delay"            INT,
--     "minAvatarRank"    INT DEFAULT 1,
--     "upgrade"          NVARCHAR(MAX),
--     "stats"            NVARCHAR(MAX),
--     "maxUpgrade"       INT DEFAULT 3,
--     "freeze"           TINYINT DEFAULT 0,
--     "magicName"        VARCHAR(50,
--     "categoryCardName" VARCHAR(50
--     FOREIGN KEY (categoryCardName) REFERENCES categories_cards("name"),
--     FOREIGN KEY (magicName)         REFERENCES magics("name")
-- );

-- CREATE TABLE labyrinths (
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     "name" VARCHAR(50) NOT NULL UNIQUE,
--     "description" NVARCHAR(MAX) DEFAULT 'no description',
--     "data" NVARCHAR(MAX),
--     freeze TINYINT DEFAULT 0,
--     mapID INT,
--     FOREIGN KEY (mapID) REFERENCES maps(id)
-- );

-- CREATE TABLE missions (
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     "name" VARCHAR(50) NOT NULL,
--     "description" NVARCHAR(MAX) DEFAULT 'no description',
--     freeze TINYINT DEFAULT 0,
--     minRank INT,
--     difficulty INT,
--     goal VARCHAR(50),
--     prize NVARCHAR(MAX),
--     monsterID INT,
--     magicID INT DEFAULT 0,
--     labyrinthsID INT,
--     FOREIGN KEY (monsterID) REFERENCES monsters(id),
--     FOREIGN KEY (labyrinthsID) REFERENCES labyrinths(id)
-- );



CREATE TABLE avatars (
    "id"           INT PRIMARY KEY,
    "name"         VARCHAR(50) NOT NULL,
    "freeze"       TINYINT DEFAULT 0,
    "exp"          INT DEFAULT 0,
    "silver"       INT DEFAULT 0,
    "gold"         INT DEFAULT 0,
    "redPowder"    INT DEFAULT 0,
    "diamond"      INT DEFAULT 0,
    "createdDate"  DATETIME2 DEFAULT GETDATE(),
    "gender"       VARCHAR(10) DEFAULT 'boy',
    "mainPage"     VARCHAR(25) ,
    "subPage"      VARCHAR(25),
    "username"     VARCHAR(50),
    "magicName"    VARCHAR(50),
    "hp"           INT DEFAULT 100,
    "energy"       INT DEFAULT 100,
    "refillEnergy"   INT DEFAULT 20,
    "missionID"      INT,
    FOREIGN KEY (username) REFERENCES users(username),
    -- FOREIGN KEY (missionID) REFERENCES missions(id),
    FOREIGN KEY (magicName) REFERENCES magics("name")
);

-- CREATE TABLE pvp_rooms (
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     "name" VARCHAR(50) NOT NULL,
--     "status" VARCHAR(50),
--     startDate DATETIME2 DEFAULT GETDATE(),
--     endDate DATETIME2 DEFAULT GETDATE(),
--     avatarOpenLog NVARCHAR(MAX),
--     avatarEnterLog NVARCHAR(MAX),
--     avatarOpenID INT,
--     avatarEnterID INT,
--     avatarWinID INT,
--     FOREIGN KEY (avatarOpenID) REFERENCES avatars(id),
--     FOREIGN KEY (avatarEnterID) REFERENCES avatars(id),
--     FOREIGN KEY (avatarWinID) REFERENCES avatars(id)
-- );

CREATE TABLE avatars_items (
    "id"          INT IDENTITY(1,1) PRIMARY KEY,
    "rank"        INT,
    "isActive"      TINYINT DEFAULT 0,
    "avatarID"    INT,
    "itemID"      INT,
    FOREIGN KEY (avatarID) REFERENCES avatars(id),
    FOREIGN KEY (itemID)   REFERENCES items(id)
);

-- CREATE TABLE avatars_cards (
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     rank INT,
--     avatarID INT,
--     cardID INT,
--     FOREIGN KEY (avatarID) REFERENCES avatars(id),
--     FOREIGN KEY (cardID) REFERENCES cards(id)
-- );

-- CREATE TABLE avatars_monsters (
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     avatarLog NVARCHAR(MAX),
--     monsterLog NVARCHAR(MAX),
--     avatarID INT,
--     monsterID INT,
--     FOREIGN KEY (avatarID) REFERENCES avatars(id),
--     FOREIGN KEY (monsterID) REFERENCES monsters(id)
-- );

-- CREATE TABLE avatars_labyrinths (
--     id INT IDENTITY(1,1) PRIMARY KEY,
--     labyrinthData NVARCHAR(MAX),
--     activeMissionID INT,
--     labyrinthID INT,
--     FOREIGN KEY (activeMissionID) REFERENCES missions(id),
--     FOREIGN KEY (labyrinthID) REFERENCES labyrinths(id)
-- );








