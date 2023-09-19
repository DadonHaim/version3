export default class UpgradeCards{
    public leven1   :_upgradeCards;
    public leven2   :_upgradeCards;
    public leven3   :_upgradeCards;
    public leven4   :_upgradeCards;
    public leven5   :_upgradeCards;
    public leven6   :_upgradeCards;
    constructor(jsonText:string){}

}


class _upgradeCards{
    public damage        : number;
    public energy        : number;
    public require_leven : number;
    public silver        : number;
    public gold          : number;
    public diamond       : number;
    public redPowder     : number;
}


