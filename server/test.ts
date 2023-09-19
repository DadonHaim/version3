import Test from "./Tests/Test"

require('module-alias/register')

Test.DeleteTestDB();
Test.CreateTestDB();

require("./RegisterTest")
require("./ILoginTest")

Test.DeleteTestDB();

