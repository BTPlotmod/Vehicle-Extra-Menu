import * as alt from 'alt';
import * as game from 'natives';
import * as NativeUI from './includes/NativeUI/NativeUI';

const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;
const maxListItems = 800;

let player = alt.Player.local;

const menu = new NativeUI.Menu("Vehicle Extra Menü", "BlackTycoon Vehicle Extra Menu", new NativeUI.Point(50, 50));
var banner = new NativeUI.ResRectangle(new NativeUI.Point(0, 0), new NativeUI.Size(0,0), new NativeUI.Color(255, 25, 25, 255)); 
menu.SetRectangleBannerType(banner);
menu.GetTitle().Scale = 0.9;


menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 1",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));
menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 2",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));
menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 3",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));
menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 4",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));
menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 5",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));
menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 6",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));
menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 7",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));
menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 8",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));
menu.AddItem(new NativeUI.UIMenuListItem(
    "Extra 9",
     "",
     new NativeUI.ItemsCollection(["On", "Off"])
));

let veh = alt.Player.local.vehicle.scriptID;

menu.ItemSelect.on((selectedItem, selectedItemIndex) => {
    if (selectedItem instanceof NativeUI.UIMenuItem) {
        if (selectedItemIndex == 0){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                alt.emitServer("Server:VehicleExtraMenu:Aktivate", veh, 1, true);
            } else { 
                alt.emitServer("Server:VehicleExtraMenu:Aktivate", veh, 1, false);
            }
        } else
        if (selectedItemIndex == 1){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 2, true);
            } else { 
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 2, false);
            }
        } else
        if (selectedItemIndex == 2){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 3, true);
            } else { 
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 3, true);
            }
        } else
        if (selectedItemIndex == 3){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 4, true);
            } else { 
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 4, false );
            }
        } else
        if (selectedItemIndex == 4){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 5, true);
            } else { 
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 5, false );
            }
        } else
        if (selectedItemIndex == 5){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 6, true);
            } else { 
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 6, false );
            }
        } else
        if (selectedItemIndex == 6){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 7, true);
            } else { 
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 7, false );
            }
        } else
        if (selectedItemIndex == 7){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 8, true);
            } else { 
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 8, false );
            }
        } else
        if (selectedItemIndex == 8){
            if (selectedItem.SelectedItem.DisplayText === "On") {
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 9, true);
            } else { 
                game.setVehicleExtra(alt.Player.local.vehicle.scriptID, 9, false );
            }
        }
    } 
});

//------------------------------------------------ HAUPTMENÜ  END------------------------------------------------//

alt.on('keyup', (key) => {
    if (key === 0x74) { 
        if (alt.Player.local.getSyncedMeta("IsCefOpen") == true || alt.Player.local.getSyncedMeta("HasHandcuffs") == true || alt.Player.local.getSyncedMeta("HasRopeCuffs") == true) return;
        if (menu.Visible)
            menu.Close();
        else
            menu.Open();
    }
});