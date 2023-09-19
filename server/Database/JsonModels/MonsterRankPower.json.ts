export default class MonsterRankPower{
    public addPerRank   :_monsterRankPower; 
    public simple       :_monsterRankPower; 
    public general      :_monsterRankPower; 
    public king         :_monsterRankPower; 
    constructor(jsonText:string){}

}

class _monsterRankPower{
    public hp           :number;
    public energy       :number;
    public refillEnergy :number;
}

