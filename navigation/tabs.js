import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { History, Home, More, Profile } from "../screens"

import { TabIcon } from "../components";

import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: COLORS.secondaryWhite,
            showLabel: true,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: COLORS.primaryWhite,
                borderTopColor: "transparent",
                height: 72
            }
        }}

        
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                     tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.home} />
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.History} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.profile} />
                }}
            />
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarIcon: ({focused}) => <TabIcon focused={focused} icon={icons.more} />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;