import React from 'react';
import { 
    View,
    Image
 } from 'react-native';


 import { COLORS } from "../constants";

const TabIcon = ({focused, icon}) => {

    return(
        <View
        style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 90,
            width: 50
        }}
        >
            <Image

                source={icon}
                resizeMode="contain"
                style={{
                    width: 15,
                    height: 15,
                    tintColor: focused? COLORS.secondaryWhite : COLORS.Grey
                }}
            
            />

            {focused &&

                <View
                
                style= {{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 58,
                    borderRadius: 5,
                    backgroundColor: COLORS.DeepBlue
                }}
                
                
                
                />
            
            
            
            }

        </View>
    )
}


export default TabIcon;