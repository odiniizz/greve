import { Text, Image, View, ImageBackground } from "react-native"
import { styles } from './styles'
import { globalstyles } from '../../styles/globalstyles'
import { ButtonSlide } from "../../components/ButtonSlide"
import { Unitario } from "../../components/ButtonSlide"
import { IPagina } from "../../../App";

export function Slide1({ setPageI }: IPagina){
    const slide = require('../../assets/pedemocafundo.png')
    const fome = require('../../assets/fome.png')
    return (
        <ImageBackground style={styles.container} source ={slide}>
            
            <View style={globalstyles.quadro}>
                <Text style={globalstyles.texto}>Bateu aquela vontade de comer um docinho, né?</Text>
            </View>

            <View style={globalstyles.icone}>
                <Image source={fome}></Image>
            </View>

            <View style={globalstyles.button}>
                <View style={globalstyles.buttonSpace}>
                    <Unitario onPressI={() => setPageI(1)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(2)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(3)} />
                </View> 
                <View style={globalstyles.buttonSpace}>
                    <ButtonSlide onPressI={() => setPageI(4)} />
                </View> 
            </View>

        </ImageBackground>
    )
}