// import { Avatar, Card, Database, Item } from "./../importAll";
// export default class Inventory extends Database<TAvatarsItems>{
//     private avatar      : Avatar;
//     private allItems    : Item[];
//     private allCard     : Card[];
//     private activeItems : CategoriesItemsModel;
//     public GetAllItems    = ():Item[]                 => this.allItems;
//     public GetActiveItems = ():CategoriesItemsModel   => this.activeItems;
//     public GetAvatar      = ():Avatar                 => this.avatar;
//     constructor(avatar:Avatar){
//         super({tableName:"avatars_items"})
//         this.avatar      = avatar;
//         this.allItems    = Item.GetItemsByAvatarSync(avatar);
//         this.allCard    =  Card.GetCardsByAvatarSync(avatar);
//         this.activeItems = this.getActiveItems();
//     }
//     private getActiveItems() :CategoriesItemsModel{
//         let result = new CategoriesItemsModel();
//         this.allItems.forEach(item=>{
//             if(item.IsActive) 
//                 result[item.GetCategoryItem()] = item;
//         })
//         return result;
//     }
//     public SetActiveItem(obj:{category:string,item:Item}){
//         this.Update({from:"avatars_items",update:{active:0},where:`itemID=${this.activeItems[obj.category].GetId()} and avatarID = ${this.avatar.GetId()}`})
//         this.activeItems[obj.category] = obj.item;
//         this.Update({from:"avatars_items",update:{active:1},where:` itemID=${obj.item.GetId()} and avatarID = ${this.avatar.GetId()}`})
//     }
// }
//# sourceMappingURL=Inventory.js.map