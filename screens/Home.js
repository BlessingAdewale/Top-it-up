import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {COLORS, icons, SIZES} from '../constants';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.primaryWhite}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}>
        {/* Profile  */}
        <View
          style={{
            flexDirection: 'row',
            marginRight: SIZES.padding,
          }}>
          {/* Profile icon */}
          <TouchableOpacity style={{marginHorizontal: SIZES.base}}>
            <Image source={icons.Ellipse_2} resizeMode="cover" style={{}} />
          </TouchableOpacity>
          {/* Profile text */}
          <View>
            <Text style={{fontSize: 12, color:COLORS.ExtremeDark}}>Ayomide</Text>
            <Text style={{fontSize: 10}}>Good morning!</Text>
          </View>
        </View>
        {/* Notification */}
        <TouchableOpacity>
          <Image source={icons.clarity_notification} />
        </TouchableOpacity>
      </View>
          <View style={{ marginHorizontal: SIZES.padding, height: 90, marginBottom: 55}}>
      <Image source={icons.rectangle} />
      </View>
      <View style={{ marginTop: SIZES.padding}}>
        {/* Fund Section */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: SIZES.padding,
            height: 40,
            width: "100%"
          }}>
          {/* Add Fund */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.secondaryBlue,
              borderRadius: SIZES.base,
              width: 168,
             
            }}>
            <View style={{paddingHorizontal: SIZES.radius}}>
              <Image source={icons.plus} />
            </View>
            <Text style={{color: COLORS.TextColor, fontSize: 15}}>Add fund</Text>
          </TouchableOpacity>
          {/* Send Fund */}
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', justifyContent: 1, backgroundColor: COLORS.primaryBlue, borderRadius: SIZES.base, width: 168}}>
            <View style={{paddingHorizontal: SIZES.radius, fontSize: 15}} >
              <Image source={icons.airplane} />
            </View>
            <Text style={{color: COLORS.TextColor}}>Send Fund</Text>
          </TouchableOpacity>
        </View>
      </View>
            {/* Services */}
            <View style={{paddingHorizontal:SIZES.padding}}>
            {/* Service Title */}
            <Text style={{marginTop: 23, color: COLORS.TextColorBlue}}>Our Services</Text>
            {/* Service Details */}
            <View style={{backgroundColor: COLORS.secondaryWhite, borderRadius: SIZES.radius, marginTop: 12, width: 360, height:220}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
              <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                {/* Service icon */}
                <Image source={icons.bi_phone}/>
                {/* Service name */}
                <Text style={{color: COLORS.TextColorBlue, marginTop: 15}}>Airtime</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} >
                {/* Service icon */}
                <Image source={icons.data_icon}/>
                {/* Service name */}
                <Text style={{color: COLORS.TextColorBlue, marginTop: 15}}>Data</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} >
                {/* Service icon */}
                <Image source={icons.electricity}/>
                {/* Service name */}
                <Text style={{color: COLORS.TextColorBlue, marginTop: 15}}>Electricity</Text>
              </TouchableOpacity>
              </View>

              <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}} >
              <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} >
                {/* Service icon */}
                <Image source={icons.Internet}/>
                {/* Service name */}
                <Text style={{color: COLORS.TextColorBlue, marginTop: 15}}>Internet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} >
                {/* Service icon */}
                <Image source={icons.cableTV}/>
                {/* Service name */}
                <Text style={{color: COLORS.TextColorBlue, marginTop: 15}}>Cable TV</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} >
                {/* Service icon */}
                <Image source={icons.Education}/>
                {/* Service name */}
                <Text style={{color: COLORS.TextColorBlue, marginTop: 15}}>Education</Text>
              </TouchableOpacity>
              </View>


            </View>
            </View>


            {/* Loyalty Program */}
            <View style={{flex: 1, paddingHorizontal:SIZES.padding}}>
            <View style={{flexDirection:'row', marginTop: 30, backgroundColor:COLORS.tertiaryBlue, borderRadius: SIZES.radius, justifyContent:'space-between', alignItems: 'center'}}>
            {/* icon */}
            <Image source={icons.standingmen} style={{marginTop:15}} />
            {/* Text */}
            <View style={{flexDirection:'column', flexShrink:1, justifyContent: 'center'}}>
              {/* Title */}
              <Text style={{fontSize: SIZES.h3, color:COLORS.Dark, paddingVertical: 10 }}>Loyalty Program</Text>
              {/* Content */}
              <View style={{}}>
              {/* Narrative */}
              <Text style={{flexWrap:'wrap', color: COLORS.TabBarGrey, fontSize:10, lineHeight:14, paddingBottom: 5 }}>Earn as much as N500 for every friend you invite to use TopitUp. Start inviting today and get rewarded.</Text>
             <TouchableOpacity style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              {/* Link */}
              <Text style={{textDecorationLine: 'underline', color:COLORS.TextColorBlue, fontSize:12, marginRight:12, marginTop: 2}}>Refer now</Text>
                {/* Right Arrow */}
              <Image source={icons.eva_arrow} style={{}} />
              </TouchableOpacity>
              </View>
              </View>
              </View>
            </View>
            <TouchableOpacity style={{position: 'absolute', width: 45, height: 45, left: 326, top: 709, backgroundColor: COLORS.Chocolate, borderRadius:SIZES.h1}}><Image source={icons.support} /></TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
