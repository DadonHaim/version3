import ResultValid from "./ResultValid"
import {RegisterSettings,LoginSettings} from "./Settings";

export {ResultValid}
export {RegisterSettings}
export {LoginSettings}


class ResultSql{
    public ValidDB(s:any){}
    public NoValidDB(s:any){}
}
class Database{
    public QuerySync(s:string):ResultSql{return new ResultSql()}
}
export {Database}

