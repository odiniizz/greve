import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { Register, Slide4 } from '../screens';

type MenuDrawerParam = {
    Slide3: undefined
    Slide4: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Slide3">
export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}

export function MenuDrawer() {
const Drawer = createDrawerNavigator<MenuDrawerParam>();
return (
    <Drawer.Navigator>
        <Drawer.Screen name="Slide3" component={Register} />
        <Drawer.Screen name="Slide4" component={Slide4} />
    </Drawer.Navigator>
    );
}